import axios from "axios"

export default class PositionService {

    getPositions() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/positions/get/all");
    }

    addPosition(positionTitle) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/positions/add?positionTitle=${positionTitle}`)
    }

}