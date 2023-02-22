import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import Layout1 from "../../layout/Layout1";
import TransectionTable from "../../components/TransectionTable";
import Pagination from "../../components/Pagination";
import AccountInfoCard from "../../components/user/AccountInfoCard";

function UserAccountPage() {
  const accountId = useParams()["accountId"];

  const [accountDetails, setaccountDetails] = useState(null);

  const [transections, setTransections] = useState(null);
  const [totalTransections, setTotalTransections] = useState(0);
  const [transectionPage, setTransectionPage] = useState(1);
  const transectionPageLimit = 5;

  useEffect(() => {
    getAccountDetails();
    getAccountTransection();
  }, []);

  useEffect(() => {
    if (transections) {
      setTransections(null);
      getAccountTransection();
    }
  }, [transectionPage]);

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
    let url = `http://localhost:5000/api/v1/bank-app/accounts/${accountId}/transactions?limit=${transectionPageLimit}&offset=${
      transectionPage - 1
    }`;
    axios
      .get(url)
      .then((res) => {
        setTotalTransections(res.headers["x-total-count"]);
        setTransections(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Layout1>
      <hr />
      <div id="account-details" className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">
          Account info
        </h2>
        <div className="space-y-5">
          {accountDetails ? (
            <AccountInfoCard accountDetails={accountDetails} />
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
        </div>
      </div>
      <div
        id="account-transections"
        className="container mx-auto p-4 space-y-5"
      >
        <h2 className="uppercase font-bold text-2xl text-center">
          Transactions
        </h2>
        <div className="space-y-5">
          {transections ? (
            <TransectionTable data={transections}></TransectionTable>
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
          <div className="flex items-center justify-center">
            <Pagination
              total={totalTransections}
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
