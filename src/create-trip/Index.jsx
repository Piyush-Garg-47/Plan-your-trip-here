import React, { useState } from "react";
import { Input } from "@/components/ui/input"

import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { SelectBudgetOptions } from "@/constants/Options";

const CreateTrip = () => {
  const [place, setPlace] = useState();
  return (
    <div className="sm:px-10 md:px-32 lg:56 xl:px-72 px-5 mt-10 ">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a <br /> customized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-10 text-left max-w-2/3">
        <div>
          <h2 className="text-xl my-3 font-medium">What is destination of choice ?</h2>

          <GooglePlacesAutocomplete 
           apiKey={import.meta.env.VITE_GEOAPIFY_API_KEY}

           selectProps={{
            place ,
            onChange:(v) => {setPlace(v) ; console.log(v);
            }
           }}
          />
        </div>

        <div>
        <h2 className="text-xl my-3 font-medium">How many days are you planning your trip ?</h2>

         <Input placeholder="Ex -3" type="number" />

        </div>

        <div>
        <h2 className="text-xl my-3 font-medium">What is Your Budget ?</h2>
         <div className='grid grid-cols-3 gap-5 mt-5 '>
          {SelectBudgetOptions.map((item , index) =>(
            <div key={index} className="p-4 border rounded-lg hover:shadow-lg">
                  <h2>{item.icons}</h2>
                  <h2>{item.title}</h2>
                  <h2>{item.desc}</h2>
            </div>
          ))}
         </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
