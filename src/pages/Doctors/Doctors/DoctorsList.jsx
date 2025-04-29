// import React from 'react';

const DoctorsList = ({items}) => {
    const{name ,specialty,education,experience,image,visiting_hours,location}=items
    return (
        <div className="bg-white shadow-lg rounded-xl p-5 w-full mb-6" >
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full object-cover border border-gray-300 mb-4 md:mb-0 md:mr-6"
      />
      <div>
        <h3 className="text-xl font-bold text-blue-800">{name}</h3>
        <p className="text-sm text-gray-700">{education}</p>
        <p className="text-sm text-gray-600 mt-2"><strong>Specialties:</strong> {specialty}</p>
        <p className="text-sm text-gray-600"><strong>Working in:</strong> {experience}</p>
        <p className="text-sm text-gray-600"><strong>Visit</strong> {visiting_hours}</p>
        <p className="text-sm text-gray-600"><strong>Working Area:</strong> {location}</p>
      </div>
    </div>
  </div>
    );
};

export default DoctorsList;