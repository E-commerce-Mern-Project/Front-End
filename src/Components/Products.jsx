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

const Products = ({filters,sort , cat}) => {
  const [products , setProducts] = useState([]);
  const [filteredProducts , setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
     try {
          const res =  await axios.get("http://localhost:5000/api/product?category=coat")
          console.log(res)
     } catch (err) {}
    }
    getProducts()
  },[cat])
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;