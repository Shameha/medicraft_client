// import React from 'react';

// import { useEffect } from "react";
import { useLoaderData,useParams } from "react-router-dom";

const MedicineDetails = () => {
    const dose = useLoaderData();
    const {id} =useParams();
    const idInt =parseInt(id);
  
    const doses = dose.find(doses => doses.id === idInt);
    console.log(doses);
    
    // const { pathname } = useLocation();
    
    
           
        
    return (
        <div className="min-h-screen bg-gray-50">
      <h1>{id}</h1>

      </div>
    );
};

export default MedicineDetails;