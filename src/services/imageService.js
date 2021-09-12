import axios from "axios";

export default class ImageService {

    getById(imgId) {
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/images/get/byId?imgId=${imgId}`)
    }

    upload(userId, multipart) {
        return axios.post(`https://javareactcamp-hrms-backend.herokuapp.com/api/images/upload?userId=${userId}`, multipart)
    }

    deleteById(imgId) {
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/images/delete/byId?imgId=${imgId}`)
    }

}