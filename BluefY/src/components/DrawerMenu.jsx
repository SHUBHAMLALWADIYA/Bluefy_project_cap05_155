import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button 
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import "../componentsCSS/drawer.css";
import AccordionOuter from "./accordianOuter";
import TabList from "./accordianTabList";


function DrawerLeft() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const CloathingData=["Shop All","Activerwear","Coats & Jackets","Dresses","Jeans & Denim","Jumpsuit & Rompers","Lingerie & Hosiery","Loungewear & Sleepwear","Pants & Leggings","Shorts","Skirts","Sweaters","Sweatshirts & Hoodies","Swimwear & Coverups","Tops & Tees"]

  return (
    <>
      <Button ref={btnRef} colorScheme="black" onClick={onOpen}>
        <p className="drawerPtag">. . .</p>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Wardrobe</DrawerHeader>

          <DrawerBody>
            {/* //accordian from chakraui */}
               <AccordionOuter title={"CLOATHING"}>
                     <AccordionOuter title={"Women's Cloathing"}> 
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Men's Cloathing"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"SHOES"}>
                     <AccordionOuter title={"Women's Shoes"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Women's Designers"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Men's Shoes"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Men's Designers"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"HANDBAGS"}>
               <AccordionOuter title={"All Handbags"}>
               <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Top Designers"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Pre-Owned"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"DESIGNERS"}>
                     <AccordionOuter title={"Featured Designers"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     
               </AccordionOuter>

               <AccordionOuter title={"SUNGLASSES"}>
                     <AccordionOuter title={"Women's Sunglasses"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Men's Sunglasses"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"JEWELRY & WATCHES"}>
                     <AccordionOuter title={"Jewelry"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Featured Designer Watches"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"ACCESSORIES"}>
                     <AccordionOuter title={"Women's Accessories"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <a href=""> <h2>Men's Accessories</h2></a>
                     <a href=""> <h2>Shop All</h2></a>
               </AccordionOuter>

               <AccordionOuter title={"UNDER $50"}>
                     <AccordionOuter title={"Shop By Pricepoint"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Shop By Category"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>

               <AccordionOuter title={"CLEARANCE"}>
                     <AccordionOuter title={"Women's"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
                     <AccordionOuter title={"Men's"}>
                     <TabList data={CloathingData}/>
                     </AccordionOuter>
               </AccordionOuter>
              
              
              <p style={{ fontSize:"15px",fontWeight:"400" ,marginLeft:"17px"}}><a>Log-In</a></p>
            
            {/* //accordian from chakraui */}


            
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerLeft;
