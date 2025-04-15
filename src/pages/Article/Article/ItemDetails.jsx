// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ItemDetails = () => {
const cure = useLoaderData();
const {_id} =useParams();
const idInt =parseInt(_id);
const cures = cure.find(cures=>cures._id === idInt)
console.log(cures);




    return (
        <div>
            <h1>{cures.name}</h1>
        </div>
    );
};

export default ItemDetails;