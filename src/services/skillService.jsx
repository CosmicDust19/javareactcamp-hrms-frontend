import axios from "axios"

export default class SkillService {
    getSkills() {
        return axios.get("https://javareactcamp-hrms-frontend.herokuapp.com/api/skills/getAll");
    }
}