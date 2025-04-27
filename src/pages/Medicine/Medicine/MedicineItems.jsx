// import React from 'react';

import { Link } from "react-router-dom";

const MedicineItems = ({items}) => {
    const{ _id,brand_name,manufacturer,price,image}=items
    return (
      <div className="card bg-gray-100 mt-10 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brand_name}</h2>
        <p>{manufacturer}</p>
        <p>{price}</p>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
               <Link to={`/medi/${_id}`}>
               <button className="btn btn-soft btn-accent">View details</button>
               </Link>
               <button className="btn btn-soft btn-accent">Buy now</button>
               </div>
      </div>
    </div>
    );
};

export default MedicineItems;