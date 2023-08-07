import { v4 } from "uuid";
import type { Mission } from "@prisma/client";
import { MdAdd } from "react-icons/md";
import MisiCard from "./MisiCard";

interface IMissionsData extends Mission {
  newData: boolean;
}

interface IData {
  vission: string;
  missions: IMissionsData[];
  isLoading: boolean;
}

const AdminMissionComponent = ({
  missions,
  // setMissions,
  setData,
}: {
  missions: IMissionsData[];
  // setMissions: React.Dispatch<React.SetStateAction<IDataMission[]>>;
  setData: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const onAddMission = async () => {
    const newId = v4();
    // setMissions((prev) => [
    //   ...prev,
    //   { id: newId, text: "", vissionId: 1, newData: true },
    // ]);
    setData((prev: IData) => ({
      ...prev,
      missions: [
        ...prev.missions,
        { id: newId, text: "", vissionId: 1, newData: true },
      ],
    }));
  };

  return (
    <div>
      <h4 className="input_title">Misi</h4>
      <div className="space-y-3">
        {missions ? (
          missions.map((mission, index) => (
            <div className="relative" key={mission.id}>
              <MisiCard order={index + 1} data={mission} setData={setData} />
            </div>
          ))
        ) : (
          <p>
            Misi tidak ada. Silahkan tambahkan dengan menekan tombol di bawah.
          </p>
        )}
      </div>
      <div className="mt-4">
        <button
          onClick={onAddMission}
          className="flex justify-between items-center rounded-md border-2 border-white pl-2 pr-4 py-2"
        >
          <div className="flex space-x-2 items-center w-full">
            <div className="rounded-md bg-blue-500 text-white px-2 py-2 text-lg">
              <MdAdd />
            </div>
            <p className="text-blue-500">Tambah baris misi</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AdminMissionComponent;
