import DataTable from '../../components/dataTable/DataTable';
import './UserPage.scss';

const UserPage = () => {
  return (
    <div className="userPage">
      <div className="info">
        <h1>Users</h1>
        <button className="add-new-user">Add New User</button>
      </div>

      <DataTable />
    </div>
  );
};

export default UserPage;
