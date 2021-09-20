import axios from "axios"

export default class PositionService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/positions/get/all");
    }

    add(positionTitle) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/positions/add?positionTitle=${positionTitle}`)
    }

}