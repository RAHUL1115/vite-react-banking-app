import axios from "axios";
import { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import Loader from "../../components/Loader";
import UserDetails from "../../components/user/UserDetails";
import UserAccount from "../../components/user/UserAccount";

function UserDashboard() {
  const [customer, setCusomers] = useState(null);

  useEffect(() => {
    getCustomerDetails();
  }, []);

  function getCustomerDetails() {
    let accountId = "e45b93a3-39a5-4492-91d5-1513cce6d09e";
    let url = `http://localhost:5000/api/v1/bank-app/customers/${accountId}`;
    axios
      .get(url)
      .then((res) => {
        setCusomers(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Layout1>
      <hr />
      <div className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">User info</h2>
        <div className="space-y-5">
          {customer ? (
            <UserDetails
              firstName={customer.firstName}
              lastName={customer.lastName}
              email={customer.email}
              balance={customer.balance}
            />
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">
          user accounts
        </h2>
        <div className="space-y-5">
          {customer ? (
            customer.accounts.map((account) => (
              <UserAccount
                key={account.id}
                id={account.id}
                accountName={account.accountName}
                bankID={customer.bankID}
                customerID={customer.customerID}
                balance={customer.balance}
              />
            ))
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>
    </Layout1>
  );
}

export default UserDashboard;
