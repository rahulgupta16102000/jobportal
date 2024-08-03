import { fetchWrapper } from "../_helper/fetch-wrapper"; 
 
const apiUrl = process.env.REACT_APP_API_URL;

 




const baseUrl = `${apiUrl}/jobpost`;

export const jobPostService = {
 getData,
 postJob,
 getByPostNumber,
 recentPosts,
 handleJobRole
};


 

 

 
 
function getData(params) {
  return fetchWrapper.get(`${baseUrl}`, params);
}
function postJob(params) {
    return fetchWrapper.post(`${baseUrl}/postJob`, params);
  }

  function getByPostNumber(id) {
    return fetchWrapper.get(`${baseUrl}/${id}`);
  }
  function recentPosts() {
    return fetchWrapper.get(`${baseUrl}/recentposts`);
  }
  function handleJobRole(params) {
    console.log("params job role",params)
    return fetchWrapper.post(`${baseUrl}/jobroles`,params);
  }

 
 

 
 
 
 
 

 
