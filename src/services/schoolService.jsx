import axios from "axios"

export default class SchoolService {
    getSchools() {
        return axios.get("https://javareactcamp-hrms-frontend.herokuapp.com/api/schools/getAll");
    }
}