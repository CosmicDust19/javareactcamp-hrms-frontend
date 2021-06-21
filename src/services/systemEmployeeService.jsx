import axios from "axios"

export default class SystemEmployeeService {
    getSystemEmployees(){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getAll");
    }
}