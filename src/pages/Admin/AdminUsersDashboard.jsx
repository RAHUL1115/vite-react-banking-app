import axios from "axios";
import { useEffect, useState } from "react";
import Layout1 from "../../layout/Layout1";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import UserCard from "../../components/admin/UserCard";
import AddUser from "../../components/admin/User/AddUser";

function AdminUsersDashboard() {
  const [customers, setCusomers] = useState(null);
  const [totalRecords, setTotalRecords] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [temp, setTemp] = useState(true);
  const limit = 7;

  useEffect(() => {
    getCustomers();
  }, []);

  useEffect(() => {
    if (customers) {
      setCusomers(null);
      getCustomers();
    }
  }, [currentPage]);

  function getCustomers() {
    let url = `http://localhost:5000/api/v1/bank-app/customers?limit=${limit}&offset=${
      currentPage - 1
    }`;
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
              <AddUser
            reRender={() => {
              setTemp(!temp);
            }}
          />
              {customers.map((customer) => (
                <UserCard
                  key={customer.id}
                  id={customer.id}
                  firstName={customer.firstName}
                  lastName={customer.lastName}
                  email={customer.email}
                  balance={customer.balance}
                  isActive={customer.credential.isActive}
                  reRender={() => {
                    setTemp(!temp);
                  }}
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
