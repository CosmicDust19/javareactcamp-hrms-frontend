import axios from "axios"

export default class SkillService {

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/skills/get/all");
    }

    add(skillName) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/skills/add?skillName=${skillName}`)
    }

}