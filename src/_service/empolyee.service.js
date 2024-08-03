import { BehaviorSubject } from "rxjs";
import { fetchWrapper } from "../_helper/fetch-wrapper"; 
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

// const userSubject = new BehaviorSubject(null);

const userSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("userInfo"))
);




const baseUrl = `${apiUrl}/user`;

export const employeeService = {
  login,
  logout,
    register,
   
  user: userSubject.asObservable(),
   get userValue() {
    return userSubject.value;
  },
   
};


 

function login(username, password) {
    console.log("loginData",username, password)
  return fetchWrapper
    .post(`${baseUrl}/login`, { username, password})
    .then((userinfo) => {
        console.log("user",userinfo)
        const {user} = userinfo;
        console.log(user)
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem("userInfo", JSON.stringify(user));
      // console.log(user);
      // publish user to subscribers and start timer to refresh token
      userSubject.next(user);
      // startRefreshTokenTimer();
      return user;
    });
}

function logout() {
  // revoke token, stop refresh timer, publish null to user subscribers and redirect to login page
   localStorage.removeItem("userInfo");
   userSubject.next(null);
//    history.push("/employee/login");
}

 
function register(params) {
  return fetchWrapper.post(`${baseUrl}/register`, params);
}

 

 
 

 
 
 
 
 

 
