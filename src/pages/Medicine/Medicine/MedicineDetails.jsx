// import React from 'react';

// import { useEffect } from "react";
import { useEffect } from "react";
import { useLoaderData,useLocation,useParams } from "react-router-dom";
import { GiMedicines } from "react-icons/gi";
import { TbCoinTaka } from "react-icons/tb";
import { FaHeartbeat } from "react-icons/fa";
import { GiOverdose } from "react-icons/gi";



const MedicineDetails = () => {
    const dose = useLoaderData();
    const {id} =useParams();
    const idInt =parseInt(id);
  
    const doses = dose.find(doses => doses.id === idInt);
    console.log(doses);
    
    // const { pathname } = useLocation();
    
    
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
  
  
        
    return (
<div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
   
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={doses.image}
          alt="Napa One Tablet"
          className="w-48 h-auto "
        />
        <div>
         <div className="flex">
         <GiMedicines />
         <h1 className="text-3xl font-bold mb-1">{doses.brand_name} <span className="text-base font-medium">{doses.dosage_form}</span></h1>
         </div>
          <button className="text-sm text-white bg-green-600 px-3 py-1 rounded mb-2">📦 Pack Image</button>

          <div className="space-y-1">
            <p><strong>Generic Name:</strong> {doses.generic_name}</p>
            <p><strong>Strength:</strong>  {doses.strength}</p>
            <p><strong>Manufacturer:</strong> {doses.manufacturer}</p>
          </div>
        </div>
      </div>

      {/* Prices */}
      <div className="mt-6 mb-4 space-y-1">
     <div className="flex gap-0.5">
     <TbCoinTaka />
     <p>{doses.price}</p>
     </div>
     
      </div>

      
      <div className="bg-gray-100 p-4 rounded">
       <div className="flex">
       <FaHeartbeat />
       <h2 className="text-xl font-semibold mb-2">Indications</h2>
       </div>
      
       
        <p>
        {doses.indications}
        </p>
    
      </div>
        
      <div className="bg-gray-100 p-4 rounded">
        <div className="flex">
        <h2 className="text-xl font-semibold mb-2">Doses</h2>
        <GiOverdose />
        </div>
        <p>
        {doses.dosage}
        </p>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold mb-2">side Effects</h2>
        <p>
        {doses.side_effects}
        </p>
      </div>
   
    </div>
    );
};

export default MedicineDetails;