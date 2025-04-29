// import React from 'react';

import { Helmet} from 'react-helmet-async';
import SectionTitle from '../../../Componants/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import DoctorsList from './DoctorsList';



const Doctors = () => {
    const[menu,setMenu]=useState([])
useEffect (()=>{
fetch('http://localhost:5000/doctor')
.then(res=>res.json())
.then(data=> setMenu(data))
},[])

    return (
      <div>
          <SectionTitle heading="About Doctors"
        subHeading="Here we can find Doctors"
        >
      
        </SectionTitle>
        <Helmet>
                <title>Medicraft | Article</title>
              </Helmet>
        
    <div className='grid md:grid-cols-2 items-center'>
    {
        menu.map(items =><DoctorsList
        
            key={items._id}
            items={items}
        >

        </DoctorsList>)
    }
 </div>
      </div>
    );
};

export default Doctors;