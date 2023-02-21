import axios from "axios";
import { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import UserCard from "../../components/admin/UserCard";

function AdminUsersDashboard() {
  const [customers, setCusomers] = useState(null);
  const [totalRecords, setTotalRecords] = useState(5);
  const [limit, setLimit] = useState(8);
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getCustomers();
  }, [limit, offset]);

  useEffect(() => {
    if (customers) {
      setCusomers(null);
      setOffset(currentPage * limit - limit);
    }
  }, [currentPage]);

  function getCustomers() {
    let url = `http://localhost:5000/api/v1/bank-app/customers?offset=${offset}&limit=${limit}`;
    axios
      .get(url)
      .then((res) => {
        setTotalRecords(res.headers["x-total-count"]);
        setCusomers(res.data);
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
          Customers List
        </h2>
        <div className="space-y-5">
          {customers ? (
            <div className="grid grid-cols-4 gap-5">
              {customers.map((customer) => (
                <UserCard
                  key={customer.id}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  email={customer.email}
                  balance={customer.balance}
                >
                  Hello
                </UserCard>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Loader></Loader>
            </div>
          )}
          <div className="flex justify-center items-center">
            <Pagination
              total={totalRecords}
              limit={limit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </Layout1>
  );
}

export default AdminUsersDashboard;
