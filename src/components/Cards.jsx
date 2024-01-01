import React, { useEffect, useState } from "react";
import cardImg from "../assets/a13bc63d325a12624ddf0c498fa8f250 1.png";
import arrow from "../assets/thin_long_02_right.png";
import { getServiceApi } from "../services/allApi";
import { BASE_URL } from "../services/baseUrl";
import { createServiceContext } from "../services/ContextShare";
const Cards = () => {
  const [serviceData, setServiceData] = useState([]);
const{addedService, setAddedService}=useState(createServiceContext)
  const getServices = async () => {
    const result = await getServiceApi();
    setServiceData(result.data);
  };

  useEffect(() => {
    getServices();
  }, [addedService]);
  return (
    <div className="grid grid-cols-1 content-center place-items-center gap-y-12 my-5 md:grid-cols-3">
      {serviceData ? (
        serviceData.map((i) => (
          <div className="w-[386.84px] h-[275.82px] bg-zinc-100">
            <img
              className="h-20 w-full object-cover"
              src={`${BASE_URL}/uploads/${i.image}`}
              alt=""
            />
            <div className="px-8 py-4">
              <h2 className="text-[2rem] mb-[3px]">{i.title}</h2>
              <p className="mb-[8px] text-neutral-600">{i?.description}</p>
              <div className="flex items-center text-neutral-500">
                <a href=""> Learn more</a>{" "}
                <img src={arrow} className="mt-1" alt="" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1>no services found</h1>
      )}
    </div>
  );
};

export default Cards;
