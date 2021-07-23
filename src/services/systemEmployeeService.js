import axios from "axios"

export default class SystemEmployeeService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/get/all");
    }

    getById(sysEmplId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/get/byId?sysEmplId=${sysEmplId}`);
    }

    getByEmailAndPassword(email, password) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/get/byEmailAndPW?email=${email}&password=${password}`)
    }

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/add", values)
    }

    updateFirstName(sysEmplId, firstName) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/update/firstName?firstName=${firstName}&sysEmplId=${sysEmplId}`)
    }

    updateLastName(sysEmplId, lastName) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/update/lastName?lastName=${lastName}&sysEmplId=${sysEmplId}`)
    }

}