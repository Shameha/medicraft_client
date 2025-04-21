// import React from 'react';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MedicineItems from "./MedicineItems";

const Medicine = () => {
       const[menu,setMenu]=useState([])
    useEffect (()=>{
    fetch('medicine.json')
    .then(res=>res.json())
    .then(data=> setMenu(data))
    },[])
    
    return (
        <div className="items-center px-10">
                  
  <SectionTitle heading="About Medicine"
  subHeading="Here we can find various Medicine"
  >

  </SectionTitle>
  <Helmet>
        <title>Medicraft | Article</title>
      </Helmet>

      <fieldset className="fieldset items-center px-10">
  <legend className="fieldset-legend">Write your medicine</legend>
  <div className="flex">
  <input type="text" className="input" placeholder="Type here" />
  <button className="btn btn-accent">Accent</button>
  </div>
</fieldset>

     <div className='grid md:grid-cols-3'>
        {
            menu.map(items =><MedicineItems
                key={items._id}
                items={items}
            ></MedicineItems>)
        }
   
        </div>
        </div>
    );
};

export default Medicine;