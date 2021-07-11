import axios from "axios"

export default class JobAdvertisementService {
    getAllJobAdvertisements() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getAll");
    }

    getJobAdvertisements() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getPublicJobs");
    }

    getEmployerJobs(id) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getPublicEmployerJobs?employerId=${id}`);
    }

    getById(id) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/getById?jobAdvertisementId=${id}`);
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/add",values)
    }

    updatePosition(id, positionId){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updatePosition?id=${id}&positionId=${positionId}`)
    }

    updateCity(id, cityId){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateCity?cityId=${cityId}&id=${id}`)
    }

    updateWorkModel(id, workModel){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateWorkModel?id=${id}&workModel=${workModel}`)
    }

    updateWorkTime(id, workTime){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateWorkTime?id=${id}&workTime=${workTime}`)
    }

    updateMinSalary(id, minSalary){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateMinSalary?id=${id}&minSalary=${minSalary}`)
    }

    updateMaxSalary(id, maxSalary){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateMaxSalary?id=${id}&maxSalary=${maxSalary}`)
    }

    updateJobDesc(id, description){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateJobDescription?id=${id}&jobDescription=${description}`)
    }

    updateSystemVerificationStatus(id, status){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/updateSystemVerificationStatus?id=${id}&systemVerificationStatus=${status}`)
    }

}