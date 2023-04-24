import React from 'react'
import { Show, Hide } from '@chakra-ui/react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Input, Stack, Checkbox, } from '@chakra-ui/react'

const Mobilesidebar = ({ categoryFilter, onPriceFilterChange }) => {
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
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"DENNISLINGO PREMIUM ATTIRE"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                DENNISLINGO
                            </Checkbox>
                            <Checkbox value={"Puma"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Puma
                            </Checkbox>
                            <Checkbox value={"PERFORMAX"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                PERFORMAX
                            </Checkbox>
                            <Checkbox value={"NIKE"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                NIKE
                            </Checkbox>
                            <Checkbox value={"Mabish By Sonal Jain"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Mabish By Sonal Jain
                            </Checkbox>

                            <Checkbox value={"womens-shoes"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
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
                                Brand
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>

                        <Stack spacing={5} direction='column'>
                            <Checkbox value={"viewall"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                VIEW ALL
                            </Checkbox>
                            <Checkbox value={"Kasya"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Kasya
                            </Checkbox>
                            <Checkbox value={"Janasya"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Janasya
                            </Checkbox>
                            <Checkbox value={"Purvaja"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Purvaja
                            </Checkbox>
                            <Checkbox value={"MASAKALI.CO"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                MASAKALI.CO
                            </Checkbox>
                            <Checkbox value={"Mabish By Sonal Jain"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Mabish By Sonal Jain
                            </Checkbox>

                            <Checkbox value={"womens-shoes"}
                                onChange={categoryFilter} borderRadius={"15px"} mt="5px" padding="10px" fontSize={"17px"} border={"1px solid rgb(240,240,240)"} colorScheme='green' >
                                Kun Faya KUN
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