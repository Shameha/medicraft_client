// import React from 'react';

import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import MedicineItems from "./MedicineItems";


const Medicine = () => {
    //    const[gData,setMenu]=useState([])
    // useEffect (()=>{
    // fetch('http://localhost:5000/medicine')
    // .then(res=>res.json())
    // .then(data=> setMenu(data))
    // },[])
    

    const [search, setSearch] = useState('');
    const [gData, setMenu] = useState([]);
    
    useEffect(() => {
      fetch(`http://localhost:5000/medicine?search=${search}`)
        .then(res => res.json())
        .then(data => setMenu(data));
    }, [search]);

// const [keyword,setKeyword] = useState({keyword:""})
// const [gData,setData] = useState([])
// function handleClick(){

//     const searchBos = document.getElementById("search")
//     let data ={
//         keyword:searchBos.value
//     }
//     setKeyword(data);
// }

// async function getData( ) {
//     const video = await fetch("http://localhost:5000/medicine",{
//         method: 'POST' ,
//         headers:{
//             'Content-Type' : 'application/json'
//         },
//         body:JSON.stringify(keyword)
//     })
//     setData(await video.json())
// }

// useEffect(()=>{
//     getData()
// },[keyword])

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
  {/* <button className="btn btn-accent" 
//   onClick={()=>{handleClick()}}
  >
    Search</button> */}

<input 
  type="text" 
  className="input" 
  placeholder="Type here" 
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
  </div>
</fieldset>

     <div className='grid items-center  md:grid-cols-3'>
        {
            gData.map((items) =><MedicineItems
                key={items._id}
                items={items}
            ></MedicineItems>)
        }
   
        </div>
        </div>
    );
};

export default Medicine;