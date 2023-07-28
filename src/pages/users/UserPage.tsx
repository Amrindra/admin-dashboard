import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
import "./UserPage.scss";
import { userRows } from "../../utils/data";
import { useState } from "react";
import Add from "../../components/add/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => {
      return (
        <img
          // If there are no user image, show avatar icon instead
          src={
            params.row.img || "https://img.icons8.com/nolan/64/user-default.png"
          }
          alt="user's avatar"
        />
      );
    },
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 200,
  },
  {
    field: "verified",
    type: "boolean",
    headerName: "Verified",
    width: 150,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const UserPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="user-page">
      <div className="info">
        <h1>Users</h1>
        <button className="add-new-user" onClick={() => setIsOpen(true)}>
          Add New User
        </button>
      </div>
      {/* Pass users via slug so that when user clicks on action view icon it will show the slug as users and ID */}
      <DataTable columns={columns} rows={userRows} slug="users" />
      {isOpen && <Add slug="user" columns={columns} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default UserPage;
