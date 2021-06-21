import axios from "axios"

export default class PositionService {
    getPositions() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/positions/getAll");
    }
}