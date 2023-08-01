import Single from "../../components/single/Single";
import { singleUser } from "../../utils/data";
import "./SingleUserPage.scss";

const SingleUserPage = () => {
  return (
    <div className="single-user-page">
      <Single {...singleUser} />
    </div>
  );
};

export default SingleUserPage;
