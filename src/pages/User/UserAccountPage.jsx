import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Layout1 from "../../layout/Layout1";
import TransectionTable from "../../components/TransectionTable";
import Pagination from "../../components/Pagination"; 

function UserAccountPage() {
  const accountId = useParams()["accountId"];
  const [accountDetails, setaccountDetails] = useState(null);
  const [accountTransection, setAccountTransection] = useState(null);
  const [transections, setTransections] = useState(0);
  const [transectionPage, setTransectionPage] = useState(1);
  const [transectionPageLimit, setTransectionPageLimit] = useState(5);
  let transectionPageOffset = 0

  useEffect(() => {
    getAccountDetails();
    getAccountTransection();
  }, []);
  
  useEffect(()=>{
    if(accountTransection){
      transectionPageOffset = transectionPage*transectionPageLimit-transectionPageLimit
      transections
      getAccountTransection();
    }
  },[transectionPage])

  function getAccountDetails() {
    let url = `http://localhost:5000/api/v1/bank-app/accounts?accountID=${accountId}`;
    axios
      .get(url)
      .then((res) => {
        setaccountDetails(res.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function getAccountTransection() {
    let url = `http://localhost:5000/api/v1/bank-app/accounts/${accountId}/transactions?limit=${transectionPageLimit}&offset=${transectionPageOffset}`;
    axios
      .get(url)
      .then((res) => {
        setAccountTransection(res.data);
        setTransections(res.headers["x-total-count"]);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Layout1>
      <hr />
      <div className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">
          Account info
        </h2>
        <div className="space-y-5">
          {accountDetails ? (
            <div></div>
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">
          Transactions
        </h2>
        <div className="space-y-5">
          {accountTransection ? (
            <TransectionTable data={accountTransection}></TransectionTable>
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
          <div className="flex items-center justify-center">
            <Pagination
              total={transections}
              limit={transectionPageLimit}
              currentPage={transectionPage}
              setCurrentPage={setTransectionPage}
            />
          </div>
        </div>
      </div>
    </Layout1>
  );
}

export default UserAccountPage;
