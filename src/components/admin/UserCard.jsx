import UserIcon from "../../assets/icons8-user-100.png";

function UserCard({ firstName, lastName, email, balance }) {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
      <div className="flex justify-end px-4 pt-4">
        <span className="flex items-center gap-2">
          <span className="ml-3 text-sm font-medium text-gray-900 ">
            Active
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer pt-5" />
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
        <div className="flex items-center mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300   "
          >
            Edit
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-500   "
          >
            View
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-oranbg-orange-300   "
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
