import SejarahCard from "@components/admin/SejarahCard";

interface ISejarahData {
  id: string;
  year: number;
  textarea: string;
  newData: boolean;
}

interface IData {
  sejarah: ISejarahData[];
  isLoading: boolean;
}

const AdminSejarahComponent = ({
  sejarah,
  setData,
}: {
  sejarah: ISejarahData[];
  setData: React.Dispatch<React.SetStateAction<IData>>;
}) => {
  return sejarah.map((item) => (
    <div key={item.id}>
      <div className="space-y-2 mb-4">
        <SejarahCard data={item} setData={setData} />
      </div>
      <div className="w-full h-1 rounded-lg bg-gray-500/20 mb-5" />
    </div>
  ));
};

export default AdminSejarahComponent;
