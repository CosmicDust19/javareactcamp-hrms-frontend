import axios from "axios"

export default class CityService {
    getCities() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/cities/getAll");
    }
}