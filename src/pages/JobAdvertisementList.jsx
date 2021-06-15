import React from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import {Table} from "semantic-ui-react";
import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisement] = useState([]);
    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then((result) => setJobAdvertisement(result.data.data));
    }, []);

    let history = useHistory();

    const handleRowClick = jobAdvertisementId => {
        history.push(`/jobAdvertisements/${jobAdvertisementId}`);
    };

    return (
        <div>
            <Table celled selectable>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Employer</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Release Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {jobAdvertisements.map((jobAdvertisement) => (
                        <Table.Row key={jobAdvertisement.id} onClick={() => {handleRowClick(jobAdvertisement.id);}}>
                            <Table.Cell>{jobAdvertisement.position.title}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.city.name}</Table.Cell>
                            <Table.Cell>{jobAdvertisement.createdAt}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

            </Table>
        </div>
    );
}