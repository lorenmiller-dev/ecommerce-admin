import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Layout>
      <Link
        className="bg-gray-300 text-black rounded-md py-1 px-2"
        href={"/products/new"}
      >
        Add new product
      </Link>

      <table>
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr>
              <td>{product.title}</td>
              <td>button</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
