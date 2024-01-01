import React, { useContext, useState } from "react";
import { createService } from "../services/allApi";
import { createServiceContext } from "../services/ContextShare";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Service = () => {
//context api
const{addedService, setAddedService}=useContext(createServiceContext)
const navigate=useNavigate()
  const [input, setInput] = useState({
    title: "",
    image: "",
    description: "",
  });
  const handlechange = (e) => {
    e.preventDefault();
    const {name,value}=e.target
    setInput({...input,[name]:value})
  };
const handleAdd=async(e)=>{
  const{title,image,description}=input
  e.preventDefault()
  if(!title || !image || !description){
    alert("please fill all datas")
  }
  else{
    const reqHeader={
      "Content-Type":"multipart/form-data"
    }
    const reqBody=new FormData()
    reqBody.append("title",title)
    reqBody.append("image",image)
    reqBody.append("description",description)

    const result=await createService(reqBody,reqHeader)
    if(result.status==200){
      toast.success("service Successfully created!");
      setAddedService(!addedService)

setTimeout(() => {
   navigate("/home");
}, 1200);     
    }
    else{
      toast.error("service creation failed!");
    }
  }
}
  return (
    <div className="flex justify-center">
      <div className="md:px-24 w-3/4 ">
        <Toaster></Toaster>
        <h1 className=" text-zinc-500 text-4xl font-bold">Create Service</h1>

        <div className="flex flex-col mt-14 gap-3">
          <label className="text-zinc-600 font-medium" htmlFor="">
            Title
          </label>
          <input
            onChange={(e) => handlechange(e)}
            name="title"
            className="border border-zinc-400 rounded-lg outline-none p-2"
            type="text"
          />
          <label className="text-zinc-600 font-medium" htmlFor="">
            image
          </label>
          <input
            type="file"
            onChange={(e) =>
              setInput({ ...input, ["image"]: e.target.files[0] })
            }
            name="title"
            className="border border-zinc-400 rounded-lg p-2 "
          />
          <label className="text-zinc-600 font-medium" htmlFor="">
            Description
          </label>
          <input
            onChange={(e) => handlechange(e)}
            name="description"
            className="border border-zinc-400 rounded-lg outline-none p-2"
            type="text"
          />
          <div
            onClick={(e) => handleAdd(e)}
            className=" p-3 text-center bg-cyan-700 rounded-[12px] mt-4 cursor-pointer"
          >
            <button className="text-slate-50  font-semibold">
              Create service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
