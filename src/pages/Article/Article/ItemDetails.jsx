// import React from 'react';

import { useEffect } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
// import { AlertCircle, Pill, Stethoscope, Heart, BadgeAlert, ChevronFirst as FirstAid } from 'lucide-react';

const ItemDetails = () => {
const cure = useLoaderData();
const {_id} =useParams();
const idInt =parseInt(_id);
const cures = cure.find(cures=>cures._id === idInt)
console.log(cures);

const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);




    return (
        <div className="min-h-screen bg-gray-50">
      
  
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Article Header */}
            <div className="relative h-64 sm:h-96">
              <img
                src={cures.image_url}
                alt={cures.name}
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Article Content */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{cures.name}</h2>
              
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-2">
                   
                    Description
                  </h3>
                  <p className="text-gray-700">{cures.description}</p>
                </div>
  
                {/* Symptoms */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-2">
           
                    Symptoms
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {cures.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
  
                {/* Medicine */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-2">
                 
                    Recommended Medicines
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {cures.medicine.map((med, index) => (
                      <li key={index}>{med}</li>
                    ))}
                  </ul>
                </div>
  
                {/* Cure */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-2">
                      Treatment Approach
                  </h3>
                  <p className="text-gray-700">{cures.cure}</p>
                </div>
  
                {/* First Aid */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-2">
                   
                    First Aid
                  </h3>
                  <p className="text-gray-700">{cures.first_aid}</p>
                </div>
  
                {/* Emergency */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-xl font-semibold text-red-700 flex items-center mb-2">
                    
                    Emergency Instructions
                  </h3>
                  <p className="text-red-700">{cures.emergency}</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
};

export default ItemDetails;