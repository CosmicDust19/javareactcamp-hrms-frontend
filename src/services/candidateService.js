import axios from "axios"

export default class CandidateService {

    existsByNationalityId(nationalityId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/exists/byNatId?nationalityId=${nationalityId}`)
    }

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/get/all")
    }

    getById(candId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/get/byId?candId=${candId}`)
    }

    getByEmailAndPassword(email, password) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/get/byEmailAndPW?email=${email}&password=${password}`)
    }

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/add", values)
    }

    updateGithubAccount(candId, link) {
        if (!link) return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/githubAccount?candId=${candId}`)
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/githubAccount?candId=${candId}&githubAccount=${link}`)
    }

    updateLinkedinAccount(candId, link) {
        if (!link) return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/linkedinAccount?candId=${candId}`)
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/linkedinAccount?candId=${candId}&linkedinAccount=${link}`)
    }

    addJobAdvToFavorites(candId, jobAdvertisementId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/favoriteJobAdvs/add?candId=${candId}&jobAdvId=${jobAdvertisementId}`)
    }

    removeJobAdvFromFavorites(candId, jobAdvertisementId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/candidates/update/favoriteJobAdvs/remove?candId=${candId}&jobAdvId=${jobAdvertisementId}`)
    }

}