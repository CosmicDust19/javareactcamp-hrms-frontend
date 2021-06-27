import axios from "axios"

export default class EmployerService {
    existsByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/existsByEmailAndPassword?email=" + email + "&password=" + password)
    }

    getEmployers(){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/getAll");
    }

    getById(id){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/getById?id=" + id);
    }

    getByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/getByEmailAndPassword?email=" + email +  "&password=" + password)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/add",values)
    }
}