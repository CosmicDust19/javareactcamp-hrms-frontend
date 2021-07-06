import axios from "axios"

export default class SkillService {
    getSkills() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/skills/getAll");
    }
}