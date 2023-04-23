import React, { useState, useEffect } from "react";
import "./Womens.css";
import {

  Box,

  Flex,

  Select,
  Show,

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
import Mobilesidebar from "../Sidebar/Mobilesidebar";

function Womens() {
  const dispatch = useDispatch();
  const Products = useSelector((store) => store.ProductReducer.Products);
  // console.log('Products: ', Products);
  // const [value,setInputValue]=useState("")
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
  const [inputValue, setInputValue] = React.useState("");
  // console.log('inputValue: ', inputValue);
  const categoryFilterFunc = (e) => {
    setInputValue(e.target.value)
    // setInputValue('');
  }
  const filter_Data = Products.filter((item) => item.brand === inputValue)
  // console.log('filtered_data: ', filter_Data);
  // setInputValue("")

  useEffect((Products) => {
    dispatch(getProductData("women"));
  }, [inputValue]);
  return (
    <>


      {isLargerThan800 ? <Navbar /> : <MobileNav />}

      <Box  position="fixed" top="29px" width="100%" margin={"auto"}  backgroundColor="white" zIndex={9} >
        <Show breakpoint='(max-width: 450px)'>

          <Mobilesidebar onPriceFilterChange={handlePriceFilterChange} categoryFilter={categoryFilterFunc} />

        </Show>
      </Box>
      <Box display="flex" justifyContent="space-between" maxWidth="1250px" margin="auto" marginTop={"20px"} gap="40px">
        <Box display={{ base: "none", sm: "flex", md: "flex", lg: "flex" }} width="20%" marginTop="50px">
          <Box className="women-left">




            <Sidebar onPriceFilterChange={handlePriceFilterChange} categoryFilter={categoryFilterFunc} />


          </Box>
        </Box>

        <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}>
         
          <Box display={{ base: "grid", sm: "flex" }} gap="20px" justifyContent={{ base: "center", sm: "right" }}>
            <Flex>

              <Select variant='unstyled' padding={"7px"} border={"none"} onChange={(e) => handleSorting(e)} id="sort-select">
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
            {filter_Data.length > 0 ? filter_Data.length === 0 ? <Loader /> : filter_Data?.map((item) => (
              <Card  {...item} />
            )) :
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
