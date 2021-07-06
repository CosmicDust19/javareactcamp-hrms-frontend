import axios from "axios"

export default class PositionService {
    getPositions() {
        return axios.get("https://javareactcamp-hrms-frontend.herokuapp.com/api/positions/getAll");
    }
}