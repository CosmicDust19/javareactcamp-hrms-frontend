import axios from "axios"

export default class DepartmentService {
    getDepartments() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/departments/getAll");
    }
}