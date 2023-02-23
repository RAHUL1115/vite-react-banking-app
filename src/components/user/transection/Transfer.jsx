import axios from "axios";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Model from "../../Model";

function Transfer({ accountId, bankId, reRender }) {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [ammount, setAmmount] = useState();
  const [toAccount, setToAccount] = useState();

  function transfer() {
    let url = `http://localhost:5000/api/v1/bank-app/accounts/${accountId}/transfer`;
    axios
      .post(url, {
        amount: ammount,
        bankID: bankId,
        toAccountID: toAccount,
      })
      .then((res) => {
        enqueueSnackbar("Transfered", { variant: "success" });
        setOpen(false);
        reRender();
      })
      .catch((err) => {
        enqueueSnackbar("Transfer error", { variant: "error" });
        setOpen(false);
        console.log(err);
      });
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
        }}
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Transfer
      </button>
      <Model open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Reciver Account ID
            </label>
            <input
              type="text"
              value={toAccount}
              onChange={(e) => {
                setToAccount(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Ammount
            </label>
            <input
              type="text"
              value={ammount}
              onChange={(e) => {
                setAmmount(e.target.value);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
            />
          </div>
          <div className="flex mx-auto gap-x-2">
            <button
              type="button"
              onClick={transfer}
              className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Withdraw
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

export default Transfer;
