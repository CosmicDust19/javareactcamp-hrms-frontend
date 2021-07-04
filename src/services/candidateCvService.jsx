import axios from "axios"

export default class CandidateCvService {
    getById(id){
        return axios.get(`https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/getById?id=${id}`)
    }

    add(values){
        return axios.post("https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/add",values)
    }

    delete(cvId){
        return axios.delete(`https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/deleteById?id=${cvId}`)
    }

    updateTitle(id, title){
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/updateTitle?id=${id}&title=${title}`)
    }

    updateCoverLetter(id, coverLetter){
        if(!coverLetter) return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/updateCoverLetter?id=${id}`)
        return axios.put(`https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/updateCoverLetter?coverLetter=${coverLetter}&id=${id}`)
    }

    updateJobExperiences(id, jobExperienceIds, updateType){
        let updateExp
        updateType === "delete" ? updateExp = "deleteFromCandidateCv": updateExp = "addToCandidateCv"
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/${updateExp}/JobExperiences?candidateCvId=${id}`
        jobExperienceIds.forEach((jobExperienceId) => request += `&candidateJobExperienceIds=${jobExperienceId}`)
        return axios.put(request)
    }

    updateLanguages(id, languageIds, updateType){
        let updateExp
        updateType === "delete" ? updateExp = "deleteFromCandidateCv": updateExp = "addToCandidateCv"
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/${updateExp}/Languages?candidateCvId=${id}`
        languageIds.forEach((languageId) => request += `&candidateLanguageIds=${languageId}`)
        return axios.put(request)
    }

    updateSchools(id, schoolIds, updateType){
        let updateExp
        updateType === "delete" ? updateExp = "deleteFromCandidateCv": updateExp = "addToCandidateCv"
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/${updateExp}/Schools?candidateCvId=${id}`
        schoolIds.forEach((schoolId) => request += `&candidateSchoolIds=${schoolId}`)
        return axios.put(request)
    }

    updateSkills(id, skillIds, updateType){
        let updateExp
        updateType === "delete" ? updateExp = "deleteFromCandidateCv": updateExp = "addToCandidateCv"
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/${updateExp}/Skills?candidateCvId=${id}`
        skillIds.forEach((skillId) => request += `&candidateSkillIds=${skillId}`)
        return axios.put(request)
    }

    /*syncJobExperiences(id, jobExperienceIds){
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/syncJobExperiencesInCandidateCv?candidateCvId=${id}`
        jobExperienceIds.forEach((jobExperienceId) => request += `&candidateJobExperienceIds=${jobExperienceId}`)
        return axios.put(request)
    }

    syncLanguages(id, languageIds){
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/syncLanguagesInCandidateCv?candidateCvId=${id}`
        languageIds.forEach((languageId) => request += `&candidateLanguageIds=${languageId}`)
        return axios.put(request)
    }

    syncSchools(id, schoolIds){
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/syncSchoolsInCandidateCv?candidateCvId=${id}`
        schoolIds.forEach((schoolId) => request += `&candidateSchoolIds=${schoolId}`)
        return axios.put(request)
    }

    syncSkills(id, skillIds){
        let request = `https://javareactcamp-hrms-backend.herokuapp.com/api/cvs/syncSkillsInCandidateCv?candidateCvId=${id}`
        skillIds.forEach((skillId) => request += `&candidateSkillIds=${skillId}`)
        return axios.put(request)
    }*/

}
