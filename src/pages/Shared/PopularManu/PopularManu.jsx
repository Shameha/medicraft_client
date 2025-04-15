// import React from 'react';

import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import image1 from "../../../assets/category/emergency2.jpg"
import "./PopularManu.css"


const PopularManu = () => {
    return (
      <div >
         <SectionTitle
        heading={"Learning"}
        subHeading={"here you can learn about our project"}
        >
        </SectionTitle>
        <div className="featued-item bg-fixed text-black pt-10 my-20">
        <div className="md:flex justify-center items-center pb-20 pt-16 px-36">
            <div>
                <img src={image1} height={600} width={800} alt="" />
            </div>
            <div className="md:ml-10 text-white">
                <p className="uppercase font-bold">Emergency case</p>
                <p >In an emergency, stay calm and move to a safe place. Call emergency services, provide basic help if you are trained, and follow official instructions. Always keep emergency contacts and a kit ready.</p>
               <p>Emergency number:</p>
            
            </div>
        </div>
        </div>
      </div>
    );
};

export default PopularManu;