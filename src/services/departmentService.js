import axios from "axios"

export default class DepartmentService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/departments/get/all");
    }

    add(departmentName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/departments/add?departmentName=${departmentName}`)
    }

}