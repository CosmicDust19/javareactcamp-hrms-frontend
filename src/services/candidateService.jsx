import axios from "axios"

export default class CandidateService {

    existsByEmailAndPassword(email, password){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/existsByEmailAndPassword?email=${email}&password=${password}`)
    }

    existsByNationalityId(nationalityId){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/existsByNationalityId?nationalityId=${nationalityId}`)
    }

    getCandidates() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getAll")
    }

    getById(id){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getById?id=${id}`)
    }

    getByEmailAndPassword(email, password){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/getByEmailAndPassword?email=${email}&password=${password}`)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/add",values)
    }

    updateEmail(id, email){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updateEmail?email=${email}&id=${id}`)
    }

    updatePassword(id, password, oldPassword){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updatePassword?id=${id}&oldPassword=${oldPassword}&password=${password}`)
    }

    updateGithubAccountLink(id, link){
        if(!link) return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updateGithubAccountLink?id=${id}`)
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updateGithubAccountLink?githubAccountLink=${link}&id=${id}`)
    }

    updateLinkedinAccount(id, link){
        if(!link) return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updateLinkedinAccountLink?id=${id}`)
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/updateLinkedinAccountLink?id=${id}&linkedinAccountLink=${link}`)
    }

    addJobAdvertisementToFavorites(id, jobAdvertisementId){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/addJobAdvertisementToFavorites?id=${id}&jobAdvertisementId=${jobAdvertisementId}`)
    }

    deleteJobAdvertisementToFavorites(id, jobAdvertisementId){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/deleteJobAdvertisementFromFavorites?id=${id}&jobAdvertisementId=${jobAdvertisementId}`)
    }

    deleteAccount(id){
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/deleteById?id=${id}`)
    }
}