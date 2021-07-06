import axios from "axios"

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getAllActives");
    }

    getById(id) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getById?jobAdvertisementId=${id}`);
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/add",values)
    }
}