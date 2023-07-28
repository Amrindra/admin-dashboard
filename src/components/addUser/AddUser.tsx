import { GridColDef } from "@mui/x-data-grid";
import "./AddUser.scss";

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUser = ({ slug, columns, setIsOpen }: Props) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="add-user">
      <div className="modal">
        <span className="close" onClick={() => setIsOpen(false)}>
          X
        </span>
        <h3>Add New {slug}</h3>
        <form onSubmit={handleSubmit}>
          {columns
            // Filter out the columns to not include the id and img
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
