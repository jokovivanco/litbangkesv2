import { Mission } from "@prisma/client";

interface IMissionsData extends Mission {
  newData: boolean;
}

interface IData {
  vission: string;
  missions: IMissionsData[];
  isLoading: boolean;
}

const AdminVissionComponent = ({
  vission,
  // setVission,
  setData,
}: {
  vission: string;
  // setVission: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<IData>>;
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setVission(e.target.value);
    setData((prev) => ({ ...prev, vission: e.target.value }));
  };

  return (
    <div>
      <h4 className="input_title">Visi</h4>
      <input
        placeholder="Your vissions..."
        type="text"
        onChange={onChange}
        className="w-full rounded-md border-2 border-gray-500 px-4 py-2"
        value={vission}
      />
    </div>
  );
};

export default AdminVissionComponent;
