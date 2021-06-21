import axios from "axios"

export default class EmployerService {
    getEmployers(){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/getAll");
    }

    getById(id){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/getById?id=" + id);
    }
}