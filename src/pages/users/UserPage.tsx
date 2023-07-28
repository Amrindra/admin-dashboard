import { GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import './UserPage.scss';
import { userRows } from '../../utils/data';

const UserPage = () => {
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
        return (
          <img
            src={
              params.row.img ||
              'https://img.icons8.com/nolan/64/user-default.png'
            }
            alt="user's avatar"
          />
        );
      },
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'phone',
      type: 'string',
      headerName: 'Phone',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      type: 'string',
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 150,
      type: 'boolean',
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

  return (
    <div className="userPage">
      <div className="info">
        <h1>Users</h1>
        <button className="add-new-user">Add New User</button>
      </div>

      <DataTable columns={columns} rows={userRows} />
    </div>
  );
};

export default UserPage;
