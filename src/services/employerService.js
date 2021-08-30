import axios from "axios"

export default class EmployerService {

    existsByCompanyName(companyName) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/exists/byCompanyName?companyName=${companyName}`)
    }

    existsByWebsite(website) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/exists/byWebsite?website=${website}`)
    }

    getAll() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/all");
    }

    getPublic() {
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/public");
    }

    getById(emplId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/byId?emplId=${emplId}`);
    }

    getByEmailAndPassword(email, password) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/get/byEmailAndPW?email=${email}&password=${password}`)
    }

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/employers/add", values)
    }

    updateCompanyName(emplId, companyName) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/update/companyName?companyName=${companyName}&emplId=${emplId}`)
    }

    updateEmailAndWebsite(emplId, email, website) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/update/emailAndWebsite?email=${email}&emplId=${emplId}&website=${website}`)
    }

    updatePhoneNumber(emplId, phoneNumber) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/update/phoneNumber?emplId=${emplId}&phoneNumber=${phoneNumber}`)
    }

    applyChanges(emplId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/update/applyChanges?emplId=${emplId}`)
    }

    updateVerification(id, status) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/employers/update/verification?emplId=${id}&status=${status}`)
    }

}