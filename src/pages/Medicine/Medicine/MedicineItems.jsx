// import React from 'react';

import { Link } from "react-router-dom";

const MedicineItems = ({items}) => {
    const{ id,brand_name,manufacturer,price,image}=items
    return (
        <div className="card bg-gray-200 w-96 shadow-sm mt-5 ">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{manufacturer}</p>
          <p className="font-medium text-gray-900">{price}</p>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
               <Link to={`/item/${id}`}>
               <button className="btn btn-soft btn-accent">View details</button>
               </Link>
               <button className="btn btn-soft btn-accent">Buy now</button>
               </div>
        </div>
      </div>
    );
};

export default MedicineItems;