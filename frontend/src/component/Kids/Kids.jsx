import React, { useState, useEffect } from "react";
// import "./Womens.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductData,
  handleSortByRedux,
} from "../../redux/Products/action";
import { Card } from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import MobileNav from '../Navbar/MobileNav';
import { useMediaQuery } from '@chakra-ui/react'
import { Loader } from "../Loader/Loader";
import Sidebar from "../Sidebar/Sidebar";

function Womens() {
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.ProductReducer.Products);
  const [priceFilter, setPriceFilter] = React.useState([]);
  const [count, setCount] = useState(0)
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const handleSorting = (e) => {
    const value = e.target.value;
    const allProducts = Products;

    if (value === "highToLow") {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(b.discountPrice) - parseInt(a.discountPrice)
      );

      // console.log("allProd", sortedProduct);
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)

    } else {
      const sortedProduct = allProducts.sort(
        (a, b) => parseInt(a.discountPrice) - parseInt(b.discountPrice)
      );
      dispatch(handleSortByRedux(sortedProduct));
      setCount((pre) => pre + 1)
    }
  };

  const categoryFilter = () => { };

  const handlePriceFilterChange = (event) => {
    const value = parseInt(event.target.value);
    let newPriceFilter = [...priceFilter];
    if (event.target.checked) {
      newPriceFilter.push(value);
    } else {
      newPriceFilter = newPriceFilter.filter((price) => price !== value);
    }
    setPriceFilter(newPriceFilter);
  };

  useEffect((Products) => {
    dispatch(getProductData("kid"));
  }, []);
  return (
    <>


      {isLargerThan800 ? <Navbar /> : <MobileNav />}

      <Box display="flex" justifyContent="space-between" maxWidth="1250px" margin="auto" gap="40px">

        <Box display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }} width="20%" marginTop="50px">
          <Box className="women-left">
            <Box>


              <Sidebar />

            </Box>
          </Box>
        </Box>

        <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}>
          <hr />
          <Box display={{ base: "grid", sm: "flex" }} gap="20px" justifyContent={{ base: "center", sm: "right" }}>

            <Flex>

              <Select variant='unstyled' padding={"7px"} onChange={(e) => handleSorting(e)} id="sort-select">
                <option value=""> Select Price</option>
                <option value="highToLow">Price High to Low</option>
                <option value="lowToHigh">Price Low to High</option>
              </Select>
            </Flex>

          </Box>

          <hr />

          <Box
            style={{
              display: "grid",
              gap: "15px",
              justifyContent: "space-around",
              margin: "20px",
            }}
            gridTemplateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr) ",
              lg: "repeat(3, 1fr) ",
            }}
          >
            {
              Products.length === 0 ? <Loader /> : Products?.map((item) => (
                <Card {...item} />
              ))

            }
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Womens;
