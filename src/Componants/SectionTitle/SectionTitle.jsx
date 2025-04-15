// import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8 ">
            <h3 className="text-4xl uppercase mb-2 font-bold">{heading}</h3>
            <p className="text-2xl">{subHeading}</p>
        </div>
    );
};

export default SectionTitle;