import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ filters, sort, cat }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ?
          `http://localhost:5000/api/product/?category=${cat}`
          : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(products);

  return (
    <Container>
      { cat ? filteredProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) : popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      )) }
    </Container>
  );
};

export default Products;
