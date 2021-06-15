import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function JobAdvertisementDetail() {

    let {id} = useParams()

    const [jobAdvertisement, setJobAdvertisement] = useState({});

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getByJobAdvertisementId(id).then((result) => setJobAdvertisement(result.data.data));
    }, [id]);

    return (
        <div>
            Job: {jobAdvertisement.id}
        </div>
    );
}