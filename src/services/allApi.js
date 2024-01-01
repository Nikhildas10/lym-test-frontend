import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

//create service
export const createService=async(body,headers)=>{
    return await commonApi("POST",`${BASE_URL}/services/add-service`,body,headers)
}

//get service
export const getServiceApi=async()=>{
    return await commonApi("GET",`${BASE_URL}/services/get-service`,{},"")
}