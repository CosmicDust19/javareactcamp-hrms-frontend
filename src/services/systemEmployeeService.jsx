import axios from "axios"

export default class SystemEmployeeService {
    existsByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/existsByEmailAndPassword?email=" + email + "&password=" + password)
    }

    getSystemEmployees(){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getAll");
    }

    getById(id){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getById?id=" + id);
    }

    getByEmailAndPassword(email, password){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getByEmailAndPassword?email=" + email +  "&password=" + password)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/add",values)
    }
}