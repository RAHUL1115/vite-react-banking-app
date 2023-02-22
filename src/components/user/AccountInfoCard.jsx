function AccountInfo({accountDetails}) {
  return (
    <div className="grid grid-cols-2 gap-10">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 ">
          Account Name
        </label>
        <input
          type="text"
          value={accountDetails.accountName}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          balance
        </label>
        <input
          type="text"
          value={accountDetails.balance}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          bankID
        </label>
        <input
          type="text"
          value={accountDetails.bankID}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
          disabled
        />
      </div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          customerID
        </label>
        <input
          type="text"
          value={accountDetails.customerID}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5      "
          disabled
        />
      </div>
    </div>
  );
}

export default AccountInfo;
