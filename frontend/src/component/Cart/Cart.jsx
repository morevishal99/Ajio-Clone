import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Select, useToast, } from '@chakra-ui/react'
import { Box, Button, Checkbox, CheckboxGroup, Flex, Image, Stack, Text } from '@chakra-ui/react';
import { Input, useDisclosure } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import Paymentmodal from '../PaymentModel/Payments';
import { useDispatch } from "react-redux"
// import { getCartData } from '../../redux/action'
import { useMediaQuery } from '@chakra-ui/react'
import Navbar from '../Navbar/Navbar';
import MobileNav from '../Navbar/MobileNav';
import BottomBar from './BottomBar';

const Cart = () => {
    const [cart, setcart] = useState([])

    const [cartitem, setCartitem] = useState([])
    // const [count, setCount] = useState(1)
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()
    const ref = useRef()
    const navigate = useNavigate()
    const { isOpen, onToggle } = useDisclosure()
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const [qty, setQty] = useState(1);
    const toast = useToast()

    const getcartdata = () => {

        axios
            .get("https://kind-plum-agouti-tam.cyclic.app/cart", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {

                setcart(res.data)
                // dispatch(getCartData(res.data))
                // console.log(res.data);
            })
            .catch((e) => {
                // console.log(e);

            });
    }
    const handleclick = () => {
        navigate("/")
    }


    const deleteitem = (id) => {

        axios.delete(`https://kind-plum-agouti-tam.cyclic.app/cart/delete/${id}`)

            .then(res => getcartdata())
        toast({
            title: `Product Deleted From Cart `,
            position: "top",
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
        // .then((res) => dispatch(getCartData(res.data)))



    }
    const addtowishlist = (item, id) => {
        toast({
            title: `Wishlist function not enabled `,
            position: "top",
            status: 'error',
            duration: 3000,
            isClosable: true,
        })

        // axios.post("https://kind-plum-agouti-tam.cyclic.app/wishlist", item)
            // axios.post("https://dizzy-plum-donkey.cyclic.app/wishlist", item)
            // .then(r => setCartitem(r.data))

        // axios.delete(`https://dizzy-plum-donkey.cyclic.app/cart/${id}`)
            // .then(res => setCartitem(res.data))
    }
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
        sum += cart[i].discountPrice * cart[i].quantity;
    }

    const handleQuantity = (id) => {
        setTimeout(() => {
            const payload = { quantity: qty };

            axios.patch(`https://kind-plum-agouti-tam.cyclic.app/cart/update/${id}`, payload)

                .then((res) => {
                    getcartdata()
                })
            toast({
                title: `Quantity updated`,
                position: "top",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }, 1000)
        // .catch((e) => console.log(e));
    };
    useEffect(() => {
        getcartdata()
    }, [counter, qty]);
    // console.clear()
    return (
        <>
            {isLargerThan800 ? <Navbar cartlength={cart.length} /> : <MobileNav cartlength={cart.length} />}
            {cart.length === 0 ?
                <Box textAlign={"center"}>
                    <div>
                        <img src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" alt="" />
                        <h1 style={{ padding: "20px", color: "rgb(88, 88, 88)", fontFamily: "SourceSansProSemiBold", fontWeight: "400" }}>Your Shopping Bag is Empty!!</h1>
                    </div>

                    <Button onClick={handleclick} bg={"rgb(213,162,73)"} padding="10px" color="white">Continue Shopping</Button>
                    <Box margin="auto" padding={"30px"}  >
                        <hr />
                        <Flex display={{ base: "grid", sm: "grid", md: "flex" }} padding={"30px"} justifyContent={"space-around"} color="rgb(213,162,73)">
                            <Flex>
                                <Image width={{ base: "30px", sm: "40px", md: "30px" }} padding="5px" src='https://penncommunitybank.imgix.net/wp-content/uploads/2019/11/security-icon.png?auto=compress&fit=crop' />
                                <Text padding={"10px"}>SECURE PAYMENTS</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/2724368-200.png' />
                                <Text padding={"10px"}>CASH ON DELIVERY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://cdn-icons-png.flaticon.com/512/1883/1883880.png' />
                                <Text padding={"10px"}>ASSURED QUALITY</Text>
                            </Flex>
                            <Flex>
                                <Image width={"40px"} padding="5px" src='https://static.thenounproject.com/png/1015317-200.png' />
                                <Text padding={"10px"}>EASY RETURNS</Text>
                            </Flex>
                        </Flex>

                        <hr style={{ fontSize: "10px" }} />
                    </Box>


                    <Flex padding={"20px"} justifyContent="space-around" backgroundColor="rgb(250,250,250)" marginTop="20px">
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://cdn-icons-png.flaticon.com/512/182/182308.png" alt="" />
                            <Text>Easy Returns</Text>
                        </Box>
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://thumbs.dreamstime.com/b/empathy-vector-icon-black-silhouette-flat-illustration-isolated-white-background-204899514.jpg" alt="" />
                            <Text >100% Hand Picked</Text>
                        </Box>
                        <Box justifyContent={"center"} alignItems="center" >
                            <img width="60px" src="https://d1pt6w2mt2xqso.cloudfront.net/AcuCustom/Sitename/DAM/044/FSEweek-icon-tick.png" alt="" />
                            <Text> Assured Quality</Text>
                        </Box>
                    </Flex>
                </Box> :
                <Box>
                    <Image width={"80%"} margin="auto" src={"https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg"} />
                    <Box width={"80%"} display={{ base: "grid", sm: "flex" }} margin="auto" gap={"20px"} >
                        <Box width={{ base: "100%", sm: "70%" }} margin={"auto"} marginTop={"30px"} >
                            <Text fontSize={"20px"} color="goldenrod" textAlign={"left"}>My Bag ({cart.length}item)</Text>
                            <Box style={{ textAlign: "center" }}>
                                {cart.map((item) =>
                                    <Box key={item._id} padding={"5px"} border="1px solid rgb(250,230,250)" display={{ base: "grid", md: "flex" }} justifyContent="space-evenly" gap="20px" marginTop="20px">
                                        <Image src={item.src} width={{ base: "200px", sm: "200px" }} margin={{ base: "auto" }} alt="" />
                                        <Text>{item.brand}- <span> {item.title}</span> </Text>

                                        <Popover >
                                            <PopoverTrigger>
                                                <Button fontSize={"12px"}> Qty {item.quantity}</Button>
                                            </PopoverTrigger>
                                            <PopoverContent>
                                                <PopoverArrow />
                                                <PopoverCloseButton />
                                                <PopoverHeader>Set Quantity!</PopoverHeader>
                                                <PopoverBody>
                                                    <Flex justifyContent={"center"}>
                                                        <Button
                                                            color={"#f43297"}
                                                            variant="ghost"
                                                            isDisabled={item.quantity === 1}
                                                            _hover={
                                                                qty > 1
                                                                    ? {
                                                                        transform: "translateY(-2px)",
                                                                        boxShadow: "lg",
                                                                    }
                                                                    : null
                                                            }
                                                            onClick={() => {
                                                                setQty((prev) => prev - 1);
                                                                handleQuantity(item._id);
                                                            }}
                                                        >
                                                            -
                                                        </Button>
                                                        <Button
                                                            fontWeight={"semibold"}
                                                            color={"#f43297"}
                                                            variant="ghost"
                                                            marginLeft="1"
                                                        >
                                                            {item.quantity}
                                                        </Button>
                                                        <Button
                                                            color={"#f43297"}
                                                            variant="ghost"
                                                            _hover={{
                                                                transform: "translateY(-2px)",
                                                                boxShadow: "lg",
                                                            }}
                                                            // onClick={() => setQty((prev) => prev + 1)}
                                                            onClick={() => {
                                                                setQty((prev) => prev + 1);
                                                                handleQuantity(item._id);
                                                            }}
                                                        >
                                                            +
                                                        </Button>
                                                    </Flex></PopoverBody>
                                            </PopoverContent>
                                        </Popover>



                                        <div style={{ display: "grid", gap: "20px" }}>
                                            <div >
                                                <h1> Discount  Rs.{item.discount}</h1>
                                                <h1 style={{ color: "rgb(177, 153, 117)" }}>  ₹{item.discountPrice}  <span style={{ textDecoration: "line-through" }}>₹{item.orginalPrice} </span></h1>
                                                <Text >Item Total ₹ {item.discountPrice * item.quantity}</Text>
                                            </div>
                                            <div>
                                                <div style={{ display: "flex", gap: "20px" }}>
                                                    <Button onClick={() => deleteitem(item._id)}> Delete</Button>
                                                    <Button onClick={() => addtowishlist(item, item._id)}> Move To Wishlist</Button></div>
                                            </div>

                                        </div>

                                    </Box>
                                )}
                            </Box>
                        </Box>


                        <Box width={{ base: "100%", sm: "30%" }} bg={"rgb(250,250,250)"} padding="10px" marginTop={"30px"}>
                            <Box padding={"5px"} margin={"5px"} >

                                <Text fontFamily={"Lora"} fontWeight="700" textAlign={"left"} color="rgb(51, 51, 51)">Order Details</Text>
                                <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)">
                                    <Text >Bag total</Text>
                                    <Text>{Number(sum)}</Text>
                                </Flex>

                                <Flex>


                                </Flex>
                                <Flex padding={"5px"} justifyContent={"space-between"} color="rgb(51, 51, 51)" >
                                    <Text>Delivery </Text>
                                    <Text>{Number(sum) >= 1000 ? "Free delivery" : "Rs 99"}</Text>
                                </Flex>
                                <Flex padding={"5px"} justifyContent={"space-between"} fontWeight="600" color="rgb(51, 51, 51)" >
                                    <Text>Order total</Text>
                                    <Text>{Number(sum) >= 1000 ? Number(sum) : Number(sum) + 99}</Text>
                                </Flex>
                                <Paymentmodal total={sum} />

                            </Box>
                            {/* coupon box */}
                            <Box marginTop={"50px"}>
                                <Text>Apply Coupon</Text>
                                <Flex gap={"10px"} padding="10px">
                                    <Input border={"grey"} width={"90%"} placeholder='Enter Coupon Code' />
                                    <Button>Apply</Button>
                                </Flex>
                                <Box bg={"white"} textAlign="left" overflow={"scroll"} height="500px" padding={"10px"} border="1px dashed black">
                                    <Text textAlign={"left"}>Applicable Coupons</Text>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='FREEDEL'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                                    <Text fontSize={"16px"}>FREEDEL</Text>
                                                    <Text fontSize={"10px"}>Free Shipping For Limited Period.</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='FREESHIP'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1.00</Text>
                                                    <Text fontSize={"16px"}>FREESHIP</Text>
                                                    <Text fontSize={"10px"}>Shipping on us for Your First Purchase.</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='!100'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹100.00</Text>
                                                    <Text fontSize={"16px"}>!100</Text>
                                                    <Text fontSize={"10px"}>Get 100Rs off</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='AJIOONE'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : 50%</Text>
                                                    <Text fontSize={"16px"}>AJIOONE</Text>
                                                    <Text fontSize={"10px"}>Buy 1 And Get One Free</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='SHOPNOW'>
                                                <Box>
                                                    <Text fontSize={"13px"}>Savings : ₹1500</Text>
                                                    <Text fontSize={"16px"}>SHOPNOW</Text>
                                                    <Text fontSize={"10px"}>Get 1500 Off On Order Above 5000</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>
                                    <CheckboxGroup colorScheme='green' defaultValue={""}>
                                        <Stack spacing={[1, 5]} direction={['row', 'column']}>
                                            <hr />
                                            <Checkbox value='BIGSAVINS'>
                                                <Box>

                                                    <Text fontSize={"16px"}>BIGSAVINS</Text>
                                                    <Text fontSize={"10px"}>Best Value For You</Text>
                                                </Box>
                                            </Checkbox>
                                            <hr />

                                        </Stack>
                                    </CheckboxGroup>

                                </Box>

                            </Box>


                            <Box textAlign={"left"} marginTop="50px" padding={"5px"}>
                                <Text color={"rgb(32, 32, 32)"} fontSize="14px" fontWeight={"700"}>Return/Refund policy</Text>
                                <Text color={"grey"}>In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee</Text>
                                <Text color={"rgb(38, 140, 185)"} fontWeight="700">Retun Policy</Text>
                            </Box>
                        </Box>
                    </Box>

                    {/* bottom bar form secure payments */}
                    <BottomBar />
                </Box>}


        </>
    )
}

export default Cart