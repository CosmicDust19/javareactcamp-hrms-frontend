import axios from "axios"

export default class SystemEmployeeService {
    getSystemEmployees(){
        return axios.get("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getAll");
    }

    getById(id){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getById?id=${id}`);
    }

    existsByEmailAndPassword(email, password){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/existsByEmailAndPassword?email=${email}&password=${password}`)
    }

    getByEmailAndPassword(email, password){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/getByEmailAndPassword?email=${email}&password=${password}`)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/add",values)
    }

    updateFirstName(id, firstName){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/updateFirstName?firstName=${firstName}&id=${id}`)
    }

    updateLastName(id, lastName){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/updateLastName?id=${id}&lastName=${lastName}`)
    }

    updateEmail(id, email){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/updateEmail?email=${email}&id=${id}`)
    }

    updatePassword(id, password, oldPassword){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/updatePassword?id=${id}&oldPassword=${oldPassword}&password=${password}`)
    }

    deleteAccount(id){
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/systemEmployees/deleteById?id=${id}`)
    }
}