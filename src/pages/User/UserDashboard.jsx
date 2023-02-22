import axios from "axios";
import { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import Loader from "../../components/Loader";
import UserDetailsCard from "../../components/user/UserDetailsCard";
import UserAccountCard from "../../components/user/UserAccountCard";
import { useNavigate, useParams } from "react-router-dom";
import cookies from '../../utils/cookies'

function UserDashboard() {
  let isAdmin = cookies.get('role') == "admin"
  let navigate = useNavigate()
  let accountId = isAdmin ? useParams()['userId'] : cookies.get('id');
  const [customer, setCusomers] = useState(null);


  useEffect(() => {
    getCustomerDetails();
  }, []);

  function getCustomerDetails() {
    let url = `http://localhost:5000/api/v1/bank-app/customers/${accountId}`;
    axios
      .get(url)
      .then((res) => {
        if(res.data.length == 0){
          alert('No data found');
          isAdmin && navigate(-1)
        }else{
          setCusomers(res.data[0]);
        }
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
            <UserDetailsCard
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
              <UserAccountCard
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
