import React from 'react'
import { Show, Hide } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Input, Stack, Checkbox, } from '@chakra-ui/react'

const Mobilesidebar = ({ brandFilter, onPriceFilterChange,categoryfilter }) => {
    const category = localStorage.getItem("category");
    const [priceFilter, setPriceFilter] = React.useState([]);

    const handlePriceFilterChange = (event) => {
        const value = parseInt(event.target.value);
        let newPriceFilter = [...priceFilter];
        if (event.target.checked) {
            newPriceFilter.push(value);
        } else {
            newPriceFilter = newPriceFilter.filter((price) => price !== value);
        }
        setPriceFilter(newPriceFilter);
        onPriceFilterChange(newPriceFilter);
    };
    React.useEffect(() => {

    }, [category]);
    return (
        <>{category === "men" ?
            <Accordion display={"flex"} fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)' border="1px solid rgb(240,240,240)" padding={"10px"} justifyContent="center" allowMultiple>
                {/* category */}
                <AccordionItem marginTop="20px" >
                    <h2>
                        <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                            <Box as="span" flex='1' textAlign='left'>
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox value={"viewall"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"DENNISLINGO PREMIUM ATTIRE"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                DENNISLINGO
                            </Checkbox>
                            <Checkbox value={"Puma"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Puma
                            </Checkbox>
                            <Checkbox value={"PERFORMAX"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                PERFORMAX
                            </Checkbox>
                            <Checkbox value={"NIKE"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                NIKE
                            </Checkbox>
                            <Checkbox value={"Mabish By Sonal Jain"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Mabish By Sonal Jain
                            </Checkbox>

                            <Checkbox value={"womens-shoes"}
                                onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Kun Faya KUN
                            </Checkbox>
                        </Stack>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            :
            <Accordion display={"flex"} fontSize="10px" fontWeight={400} lineHeight='24px' color=' rgb(102, 102, 102)' border="1px solid rgb(240,240,240)" padding={"10px"} justifyContent="center" allowMultiple>
                 {/* category */}
                 <AccordionItem marginTop="20px" >
                        <h2>
                            <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                                <Box as="span" flex='1' textAlign='left'>
                                   Category
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Stack spacing={5} direction='column'>
                                <Checkbox value={"viewall"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    VIEW ALL
                                </Checkbox>
                                <Checkbox value={"Saree"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Saree
                                </Checkbox>
                                <Checkbox value={"Jeans"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Jeans
                                </Checkbox>
                                <Checkbox value={"Kurta"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Kurta
                                </Checkbox>
                                <Checkbox value={"Top"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Tops
                                </Checkbox>
                                <Checkbox value={"Dress"}
                                    onChange={categoryfilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Dresses
                                </Checkbox>

                              
                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
                    {/* brand */}
                    <AccordionItem marginTop="20px" >
                        <h2>
                            <AccordionButton fontSize="18px" fontWeight={600} lineHeight='24px' color=' rgb(26, 32, 44)' >
                                <Box as="span" flex='1' textAlign='left'>
                                    Brand
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <Stack spacing={5} direction='column'>
                                <Checkbox value={"viewall"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    VIEW ALL
                                </Checkbox>
                                <Checkbox value={"DJ & C"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    DJ & C
                                </Checkbox>
                                <Checkbox value={"DNMX"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    DNMX
                                </Checkbox>
                                <Checkbox value={"FIG"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    FIG
                                </Checkbox>
                                <Checkbox value={"KORAM'S DESIGN"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    KORAM'S DESIGN
                                </Checkbox>
                                <Checkbox value={"Teamspirit"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Teamspirit
                                </Checkbox>

                                <Checkbox value={"Wedani"}
                                    onChange={brandFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                    Wedani
                                </Checkbox>


                            </Stack>
                        </AccordionPanel>
                    </AccordionItem>
            </Accordion>
        }
        </>
    )
}

export default Mobilesidebar
// ok