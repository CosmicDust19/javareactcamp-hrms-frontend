import axios from "axios"

export default class CityService {

    getCities() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/cities/get/all");
    }

    addCity(cityName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/cities/add?cityName=${cityName}`)
    }

}