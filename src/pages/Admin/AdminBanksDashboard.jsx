import axios from "axios";
import { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import Loader from "../../components/Loader";
import BankCard from "../../components/admin/BankCard";

function AdminUsersDashboard() {
  const [banks, setBanks] = useState(null);

  useEffect(() => {
    getBanks();
  }, []);

  function getBanks() {
    let url = `http://localhost:5000/api/v1/bank-app/banks`;
    axios
      .get(url)
      .then((res) => {
        setBanks(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Layout1>
      <hr />
      <div className="container mx-auto p-4 space-y-5">
        <h2 className="uppercase font-bold text-2xl text-center">Bank List</h2>
        <div className="space-y-5">
          {banks ? (
            <div className="grid grid-cols-4 gap-5">
              {banks.map((bank) => (
                <BankCard
                  key={bank.id}
                  id={bank.id}
                  fullName={bank.fullName}
                  abbreviation={bank.abbreviation}
                >
                  Hello
                </BankCard>
              ))}
            </div>
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

export default AdminUsersDashboard;
