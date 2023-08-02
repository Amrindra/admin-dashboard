import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setIsOpen }: Props) => {
  const queryClient = useQueryClient();
  // When this mutation succeeds, invalidate any queries with the `` query key
  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: "Hello",
          firstName: "Test",
          email: "testme@gmail.com",
          phone: "123 456 789",
          createdAt: "01.02.2023",
          verified: true,
        }),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`all${slug}s`] });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate();

    // Telling modal page to close after submitting user
    setIsOpen(false);
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

export default Add;
