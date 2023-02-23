import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserIcon from "../../assets/icons8-user-100.png";

function UserCard({ id, isActive, firstName, lastName, email, balance, reRender }) {
  const [isUserActive, setisUserActive] = useState(isActive);
  const { enqueueSnackbar } = useSnackbar();

  function toggleUserActive(state){
    let url = `http://localhost:5000/api/v1/bank-app/auth/${id}`;
    axios
      .put(url,{
        isActive : state
      })
      .then((res) => {
        enqueueSnackbar(`user ${state ? 'enabled' : 'disabled'}`, { variant: state ? 'info' : 'warning' });
        setisUserActive(state);
        reRender();
      })
      .catch((err) => {
        enqueueSnackbar(`${state ? 'enable' : 'disable'} user error`, { variant: "error" });
        reRender();
        console.error(err);
      });
  }

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
      <div className="flex justify-end px-4 pt-4">
        <span className="flex items-center gap-2">
          <span className="ml-3 text-sm font-medium text-gray-900 ">
            Active
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={isUserActive} onChange={(e)=>toggleUserActive(e.target.checked)} className="sr-only peer pt-5" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          </label>
        </span>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={UserIcon}
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
          {firstName} {lastName}
        </h5>
        <span className="text-sm text-gray-500 ">{email}</span>
        <span className="text-sm text-gray-500 ">{balance}</span>
        <div className="flex items-center mt-4 space-x-3 md:mt-6">
          <Link
            to={`/admin/user/${id}`}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500   "
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
