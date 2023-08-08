import TupoksiCard from "@components/admin/TupoksiCard";

interface ITupoksiData {
  id: string;
  title: string;
  textarea: string;
}

const AdminTupoksiComponent = ({ tupoksi }: { tupoksi: ITupoksiData[] }) => {
  return tupoksi.map((item) => (
    <div key={item.id}>
      <div className="space-y-2 mb-4">
        <TupoksiCard data={item} />
      </div>
      <div className="w-full h-1 rounded-lg bg-gray-500/20 mb-5" />
    </div>
  ));
};

export default AdminTupoksiComponent;
