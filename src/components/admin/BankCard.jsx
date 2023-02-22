import axios from "axios";
import UpdateBank from '../admin/Bank/UpdateBank'
import UserIcon from "../../assets/icons8-user-100.png";

function BankCard({ fullName, abbreviation, id, reRender }) {
  function updateBank() {
    let url = `http://localhost:5000/api/v1/bank-app/banks/${id}`;
    axios
      .put(url,{
        fullName: fullName,
        abbreviation: abbreviation,
      })
      .then((res) => {
        reRender()
      })
      .catch((err) => {
        console.error(err);
        reRender();
      });
  }
  
  function deleteBank() {
    let url = `http://localhost:5000/api/v1/bank-app/banks/${id}`;
    axios
      .delete(url)
      .then((res) => {
        reRender()
      })
      .catch((err) => {
        console.error(err);
        reRender();
      });
  }
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
      <div className="flex flex-col items-center p-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={UserIcon}
          alt=""
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 ">{fullName}</h5>
        <span className="text-sm text-gray-500 ">{abbreviation}</span>
        <div className="flex items-center mt-4 space-x-3 md:mt-6">
          <UpdateBank id={id} fullNameProp={fullName} abbreviationProp={abbreviation} reRender={reRender}></UpdateBank>
          <button
            onClick={deleteBank}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default BankCard;
