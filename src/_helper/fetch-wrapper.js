import { employeeService } from "../_service/empolyee.service";
export const fetchWrapper = {
   post,
  get,
  put,
  delete: _delete,
//   authHeader,
};

function _delete(url) {
  const requestOptions = {
    method: "DELETE",
    // headers: authHeader(url),
  };
  return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body) {
  const requestOptions = {
    method: "POST",
    // headers: { "Content-Type": "application/json", ...authHeader(url) },
        headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  console.log("Request URL:", url);
  console.log("Request Options body:", requestOptions.body); 
  console.log("Request Options  :", requestOptions ); 

   return fetch(url, requestOptions).then(handleResponse);
   
    
}

function put(url, body) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  console.log("Request URL:", url);
  console.log("Request Options body:", requestOptions.body);  
  console.log("Request Options  :", requestOptions ); 

  return fetch(url, requestOptions).then(handleResponse);
}

function get(url) {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json"  },
  };
  return fetch(url, requestOptions).then(handleResponse);
}


// function getNoCors(url) {
//   const requestOptions = {
//     mode: "no-cors",
//     method: "GET",
//     headers: { "Content-Type": "application/json"},
//   };
//   return fetch(url, requestOptions).then(handleResponse);
// }

// helper functions
function handleResponse(response) {
    console.log("responseresponse0",response)
  return response.text().then((text) => {
    //console.log(response);
    let data="";
    try{
      data = text && JSON.parse(text);
    }
    catch(e)
    {
      console.log(e)
    }
    if (!response.ok) {
      if ([401, 403].includes(response.status) && employeeService.userValue) {
        console.log("ununauthorized access");
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        employeeService.logout();
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    else
    {

      
      return data;
    }

    
  });
}

// function authHeader(url) {
//   // return auth header with jwt if user is logged in and request is to the api url
//   const user = employeeService.userValue;
//   const isLoggedIn = user && user.jwtToken;
//   const isApiUrl = url.startsWith(process.env.REACT_APP_API_URL);
//   if (isLoggedIn && isApiUrl) {
//     //console.log(`auth token=${user.jwtToken}`)
//     return { Authorization: `Bearer ${user.jwtToken}`,
//              request_source: 'web' };
//   } else {
//     return {request_source: 'web'};
//   }
// }
