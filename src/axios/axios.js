import axios from 'axios'; 


const instance = axios.create({
    
    //baseURL: 'http://localhost:80/api/Edara/'
});

let token = window.localStorage.getItem("token");
let lang = window.localStorage.getItem("lang") || "ar";

instance.defaults.headers.common["Authorization"] = token;
instance.defaults.headers.common["lang"] = lang;
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;