import axios from "axios"

export default class SchoolService {

    getSchools() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/schools/get/all");
    }

    addSchool(schoolName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/schools/add?schoolName=${schoolName}`)
    }

}