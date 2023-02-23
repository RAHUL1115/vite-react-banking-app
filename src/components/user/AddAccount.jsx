import axios from "axios";
import { useEffect, useState } from "react";
import Model from "../Model";
import AddIcon from '@mui/icons-material/Add';
import { useSnackbar } from "notistack";

function AddAccount({ customerId, reRender }) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [bankList, setBankList] = useState();
  const [accountName, setAccountName] = useState();
  const [bankId, setBankId] = useState();
  const [balance, setPassword] = useState();

  useEffect(() => {
    if (open) {
      getBanksList();
    }
  }, [open]);

  function getBanksList() {
    let url = `http://localhost:5000/api/v1/bank-app/banks`;
    axios
      .get(url)
      .then((res) => {
        setBankList(res.data)
      })
      .catch((err) => {
        enqueueSnackbar("Error: Could not able to retrive bank list.", { variant: "error" });
        console.log(err);
      });
  }

  function addAccount() {
    let url = `http://localhost:5000/api/v1/bank-app/accounts`;
    axios
      .post(url, {
        accountName: accountName,
        bankID: bankId,
        customerID: customerId,
        balance: balance,
      })
      .then((res) => {
        enqueueSnackbar("Added", { variant: "success" });
        setOpen(false);
        reRender();
      })
      .catch((err) => {
        enqueueSnackbar("Account Add Error", { variant: "error" });
        console.log(err);
        reRender();
        setOpen(false);
      });
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
        className="w-full h-full text-gray-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        <AddIcon className="!text-7xl"></AddIcon>
      </button>
      <Model open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Account Name
            </label>
            <input
              type="text"
              value={accountName}
              onChange={(e) => {
                setAccountName(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Bank
            </label>
            <select value={bankId} onChange={(e)=>{setBankId('' ? undefined : e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value={''}>Choose a country</option>
              {bankList  && bankList.map((bank)=>(
                <option key={bank.id} value={bank.id}>{bank.fullName}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              balance
            </label>
            <input
              type="text"
              value={balance}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div className="flex mx-auto gap-x-2">
            <button
              type="button"
              onClick={addAccount}
              className=" text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
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

export default AddAccount;
