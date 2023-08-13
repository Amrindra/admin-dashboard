import { GridColDef } from "@mui/x-data-grid";
import "./Add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  slug: string;
  columns: GridColDef[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = ({ slug, columns, setIsOpen }: Props) => {
  const [formValue, setFormValue] = useState({
    id: "",
    img: "",
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    createdAt: "",
    verified: Boolean,
  });

  // const LOCALHOST = import.meta.env.VITE_REACT_APP_API_URL_LOCAL;
  const FROMSERVER = import.meta.env.VITE_REACT_APP_API_URL_SERVER;

  // console.log(columns);

  const queryClient = useQueryClient();
  // When this mutation succeeds, invalidate any queries with the `` query key
  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`${FROMSERVER}/${slug}s`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 111,
          img: "",
          lastName: formValue.lastName,
          firstName: formValue.firstName,
          email: formValue.email,
          phone: formValue.phone,
          createdAt: formValue.createdAt,
          verified: formValue.verified,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // console.log(formValue);

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
                <input
                  type={column.type}
                  placeholder={column.field}
                  name={column.field}
                  onChange={handleChange}
                />
              </div>
            ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
