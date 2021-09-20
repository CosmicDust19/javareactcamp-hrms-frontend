import axios from "axios"

export default class JobAdvertisementService {

    getAll(propName, sortDirection) {
        const params = propName && sortDirection ? `propName=${propName}&sortDirection=${sortDirection}` : undefined
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/get/all?${params ? params : undefined}`);
    }

    getAllByEmployerId(employerId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/get/byEmployer?employerId=${employerId}`);
    }

    getPublic(propName, sortDirection) {
        const params = propName && sortDirection ? `propName=${propName}&sortDirection=${sortDirection}` : undefined
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/get/public?${params ? params : undefined}`);
    }

    getPublicByEmployerId(employerId, propName, sortDirection) {
        const params = propName && sortDirection ? `propName=${propName}&sortDirection=${sortDirection}` : undefined
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/get/publicByEmployer?employerId=${employerId}&${params ? params : undefined}`);
    }

    getById(jobAdvId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/get/byId?jobAdvId=${jobAdvId}`);
    }

    deleteById(jobAdvId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/delete/byId?jobAdvId=${jobAdvId}`);
    }

    add(values) {
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/add", values);
    }

    update(values) {
        return axios.put("https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update", values);
    }

    updatePosition(jobAdvId, positionId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/position?jobAdvId=${jobAdvId}&positionId=${positionId}`);
    }

    updateCity(jobAdvId, cityId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/city?cityId=${cityId}&jobAdvId=${jobAdvId}`);
    }

    updateWorkModel(jobAdvId, workModel) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/workModel?jobAdvId=${jobAdvId}&workModel=${workModel}`);
    }

    updateWorkTime(jobAdvId, workTime) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/workTime?jobAdvId=${jobAdvId}&workTime=${workTime}`);
    }

    updateMinSalary(jobAdvId, minSalary) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/minSalary?jobAdvId=${jobAdvId}&minSalary=${minSalary}`);
    }

    updateMaxSalary(jobAdvId, maxSalary) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/maxSalary?jobAdvId=${jobAdvId}&maxSalary=${maxSalary}`);
    }

    updateJobDesc(jobAdvId, description) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/jobDesc?jobAdvId=${jobAdvId}&jobDescription=${description}`);
    }

    updateDeadline(jobAdvId, deadline) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/deadLine?deadLine=${deadline}&jobAdvId=${jobAdvId}`);
    }

    updateOpenPositions(jobAdvId, number) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/openPositions?jobAdvId=${jobAdvId}&number=${number}`);
    }

    applyChanges(jobAdvId) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/applyChanges?jobAdvId=${jobAdvId}`);
    }

    updateVerification(id, status) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/verification?jobAdvId=${id}&status=${status}`);
    }

    updateActivation(id, status) {
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements/update/activation?jobAdvId=${id}&status=${status}`);
    }

}