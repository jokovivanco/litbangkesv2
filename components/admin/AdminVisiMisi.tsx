"use client";

import { useEffect, useState } from "react";
import AdminHeader from "@components/admin/AdminHeader";
import groupArray from "@utils/groupArray";
import AdminVissionComponent from "@components/admin/AdminVissionComponent";
import AdminMissionComponent from "@components/admin/AdminMissionComponent";
import { Mission } from "@prisma/client";
import axios from "axios";
import { Oval } from "react-loader-spinner";

interface IMissionsData extends Mission {
  newData: boolean;
}

interface IData {
  vission: string;
  missions: IMissionsData[];
  isLoading: boolean;
}

const getVission = async () => {
  const { data } = await axios.get("/api/vission");
  return data;
};

const getMissions = async () => {
  const { data } = await axios.get("/api/mission");
  return data;
};

const AdminVisiMisi = () => {
  const [data, setData] = useState<IData>({
    vission: "",
    missions: [],
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      const [vission, missions] = await Promise.all([
        getVission(),
        getMissions(),
      ]);

      setData((prev) => ({ ...prev, vission: vission.text }));

      if (missions.length > 0) {
        setData((prev) => ({
          ...prev,
          missions: missions.map((mission: Missions) => ({
            ...mission,
            newData: false,
          })),
        }));
      } else {
        setData((prev) => ({ ...prev, missions }));
      }

      setData((prev) => ({ ...prev, isLoading: false }));
    };

    fetchData();
  }, []);

  const onSave = async () => {
    const data = Array.prototype.slice.call(document.querySelectorAll("input"));
    const dataVission = data[0].value;
    if (!dataVission) {
      return console.log("Vission is empty!");
    }

    const dataMissionsHTMLElements = groupArray<HTMLInputElement>(
      data.slice(1),
      3
    );
    const dataMissions = dataMissionsHTMLElements.map(
      (dataMissionHTMLElement) => {
        const [idElement, newDataElement, textElement] = dataMissionHTMLElement;
        return {
          id: idElement.value,
          newData: newDataElement.checked,
          text: textElement.value,
          vissionId: 1,
        };
      }
    );

    if (!dataMissions.length) {
      return console.log("Missions is empty!");
    }

    const checkDataMissions = dataMissions.every((dataMission) => {
      return dataMission.text.length > 0;
    });

    if (!checkDataMissions) {
      return console.log("Some of Mission is empty!");
    }

    setData((prev) => ({ ...prev, isLoading: true }));

    const updateVission = async () => {
      return await axios("/api/vission", {
        method: "PATCH",
        data: {
          text: dataVission,
        },
      });
    };

    const updateMissions = () => {
      return dataMissions.map(async (mission) => {
        if (mission.newData) {
          return await axios("/api/mission", {
            method: "POST",
            data: {
              id: mission.id,
              text: mission.text,
              vissionId: mission.vissionId,
            },
          });
        }

        return await axios(`/api/mission/${mission.id}`, {
          method: "PATCH",
          data: {
            text: mission.text,
            vissionId: mission.vissionId,
          },
        });
      });
    };

    Promise.all([updateVission(), ...updateMissions()]).then((result) => {
      const vission = result[0].data.text;
      const missions = result.slice(1).map((mission) => mission.data);
      setData((prev) => ({
        ...prev,
        vission,
        missions: missions.map((mission) => ({ ...mission, newData: false })),
        isLoading: false,
      }));
    });
  };

  if (data.isLoading)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Oval
          height={80}
          width={80}
          color="#21928F"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#21928FCC"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );

  return (
    <div>
      <AdminHeader title="Visi / Misi" onSave={onSave} />
      {data.vission && (
        <AdminVissionComponent vission={data.vission} setData={setData} />
      )}
      <div className="mt-4">
        {data.missions.length > 0 && (
          <AdminMissionComponent missions={data.missions} setData={setData} />
        )}
      </div>
    </div>
  );
};

export default AdminVisiMisi;
