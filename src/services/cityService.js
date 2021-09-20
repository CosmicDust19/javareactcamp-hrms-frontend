import axios from "axios"

export default class CityService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/cities/get/all");
    }

    add(cityName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/cities/add?cityName=${cityName}`)
    }

}