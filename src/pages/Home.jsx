import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { createServiceContext } from "../services/ContextShare";

const Home = () => {
  return (
    <div className="px-2 md:px-24 ">
      <h1 className="text-[60px] text-neutral-500 ml-2 md:ml-6">Services</h1>
      <Cards></Cards>
    </div>
  );
};

export default Home;
