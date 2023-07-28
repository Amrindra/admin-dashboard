import { GridColDef } from "@mui/x-data-grid";
import "./AddUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = ({ slug, columns, setIsOpen }: Props) => {
  return (
    <div className="add-user">
      <div className="modal">
        <span className="close">Close</span>
        <h3>Add New {slug}</h3>
        <form></form>
      </div>
    </div>
  );
};

export default AddUser;
