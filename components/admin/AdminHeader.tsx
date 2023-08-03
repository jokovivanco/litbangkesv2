import Button from "@components/Button";

interface IAdminHeaderParams {
    title: string;
    onSave: () => void;
}

const AdminHeader = ({title, onSave}: IAdminHeaderParams) => {
  return (
    <div className="flex w-full justify-between items-center mb-4">
        <div>
            <h3 className="admin_title">{title}</h3>
        </div>
        <div>
            <Button text="Save" onClick={onSave}  />
        </div>
    </div>
  )
}
export default AdminHeader