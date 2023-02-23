import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Model from "../../Model";

function UpdateBank({id,fullNameProp,abbreviationProp,reRender}) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [abbreviation, setAbbreviation] = useState(abbreviationProp);
  const [fullName, setFullName] = useState(fullNameProp);

  function deposit() {
    let url = `http://localhost:5000/api/v1/bank-app/banks/${id}`;
    axios
      .put(url, {
        fullName: fullName,
        abbreviation: abbreviation,
      })
      .then((res) => {
        enqueueSnackbar("Bank Updated", { variant: "info" });
        setOpen(false)
        reRender();
      })
      .catch((err) => {
        enqueueSnackbar("Update Bank Error", { variant: "error" });
        reRender();
        setOpen(false)
      });
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-700"
      >
        Update
      </button>
      <Model open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e)=>{setFullName(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Abbreviation
            </label>
            <input
              type="text"
              value={abbreviation}
              onChange={(e)=>{setAbbreviation(e.target.value)}}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div className="flex mx-auto gap-x-2">
            <button
              type="button"
              onClick={deposit}
              className=" text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Update
            </button>
            <button
              type="button"
              onClick={()=>{setOpen(false)}}
              className=" text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Cancle
            </button>
          </div>
        </div>
      </Model>
    </div>
  );
}

export default UpdateBank;
