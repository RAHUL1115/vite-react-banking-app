import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons8-user-100.png";

function UserAccountCard({ accountName, bankID, customerID, balance, id }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
     
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={UserIcon}
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          {accountName}
        </h5>
        <span className="text-sm text-gray-500 ">{balance}</span>
        <div className="flex items-center mt-4 space-x-3 md:mt-6">
          <Link to={`/user/account/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   "
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserAccountCard;
