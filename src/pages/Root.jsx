import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/products/ProductCard";
import Layout1 from "../layout/Layout1";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5100",
});

function Root() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    try { 
      let res = await client.get("/products");
      setProducts(res.data);
    }
    catch(err){
      console.error(err);
    };
  }

  return (
    <Layout1>
      <div className="container mx-auto grid grid-cols-4 gap-10">
        {products ? (
          products.map((product) => <ProductCard key={product.id} name={product.title} image={product.thumbnail} description={product.description} />)
        ) : (
          <p>loading..</p>
        )}
      </div>
    </Layout1>
  );
}

export default Root;
