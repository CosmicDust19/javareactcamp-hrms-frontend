import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid } from "semantic-ui-react";
import CityService from "../services/cityService";
import PositionService from "../services/positionService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { useHistory } from "react-router-dom";

export default function JobAdvertisementAdd() {
    let jobAdvertisementService = new JobAdvertisementService();
    const JobAdvertisementAddSchema = Yup.object().shape({
        applicationDeadline: Yup.date().nullable(),
        jobDescription: Yup.string().required("This field cannot be empty"),
        positionId: Yup.string().required("This field cannot be empty"),
        workTimeId: Yup.string().required("This field cannot be empty"),
        workModelId: Yup.string().required("This field cannot be empty"),
        numberOfPeopleToBeHired: Yup.string().required("This field cannot be empty").min(1,"This field cannot be less than 1"),
        cityId: Yup.string().required("This field cannot be empty"),
        minSalary: Yup.number().min(0,"Cannot be less than 0"),
        maxSalary: Yup.number().min(0,"Cannot be less than 0")
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            jobDescription: "",
            positionId: "",
            workTimeId: "",
            workModelId: "",
            numberOfPeopleToBeHired: "",
            cityId: "",
            minSalary: "",
            maxSalary: "",
            applicationDeadline: "",
        },
        validationSchema: JobAdvertisementAddSchema,
        onSubmit: (values) => {
            values.employerId = 2;
            jobAdvertisementService.add(values).then((result) => console.log(result.data.data));
            alert("Advertisement has been published");
            history.push("/jobAdvertisement");
        },
    });

    const [workTimes, setWorkTimes] = useState([]);
    const [workModals, setWorkModals] = useState([]);
    const [cities, setCities] = useState([]);
    const [positions, setPositions] = useState([]);

    useEffect(() => {
        let cityService = new CityService();
        let positionService = new PositionService();

        cityService.getCities().then((result) => setCities(result.data.data));
        positionService.getPositions().then((result) => setPositions(result.data.data));
    }, []);

    const workTimeOption = workTimes.map((workTime, index) => ({
        key: index,
        text: workTime.name,
        value: workTime.id,
    }));

    const workModalOption = workModals.map((workModal, index) => ({
        key: index,
        text: workModal.name,
        value: workModal.id,
    }));

    const cityOption = cities.map((city, index) => ({
        key: index,
        text: city.name,
        value: city.id,
    }));

    const positionOption = positions.map((position, index) => ({
        key: index,
        text: position.title,
        value: position.id,
    }));

    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
    }

    return (
        <div>
            <Card fluid>
                <Card.Content header='Post Job' />
                <Card.Content>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Field style={{marginBottom: "1rem"}}>
                            <label>Position</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Select a position"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "positionId")
                                }
                                onBlur={formik.handleBlur}
                                id="positionId"
                                value={formik.values.positionId}
                                options={positionOption}
                            />
                            {formik.errors.positionId && formik.touched.positionId &&(
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.positionId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>City</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Select a city"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "cityId")
                                }
                                onBlur={formik.handleBlur}
                                id="cityId"
                                value={formik.values.cityId}
                                options={cityOption}
                            />
                            {formik.errors.cityId && formik.touched.cityId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.cityId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Work Place</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Enter Work Model"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workModelId")
                                }
                                onBlur={formik.handleBlur}
                                id="workModelId"
                                value={formik.values.workModelId}
                                options={workModalOption}
                            />
                            {formik.errors.workModelId && formik.touched.workModelId && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.workModelId}
                                </div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <label>Work Time</label>
                            <Dropdown
                                clearable
                                item
                                placeholder="Work Time"
                                search
                                selection
                                onChange={(event, data) =>
                                    handleChangeSemantic(data.value, "workTimeId")
                                }
                                onBlur={formik.handleBlur}
                                id="workTimeId"
                                value={formik.values.workTimeId}
                                options={workTimeOption}
                            />
                            {formik.errors.workTimeId && formik.touched.workTimeId && (
                                <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
                            )}
                        </Form.Field>
                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{fontWeight: "bold"}}>Minimum Salary</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Enter Minimum Salary"
                                        value={formik.values.minSalary}
                                        name="minSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.minSalary && formik.touched.minSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.minSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{fontWeight: "bold"}}>Maximum Salary</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="number"
                                        placeholder="Enter Maximum Salary"
                                        value={formik.values.maxSalary}
                                        name="maxSalary"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                    </Input>
                                    {formik.errors.maxSalary && formik.touched.maxSalary && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.maxSalary}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <Grid stackable>
                                <Grid.Column width={8}>
                                    <label style={{fontWeight: "bold"}}>Number Of People To Be Hired</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        id="numberOfPeopleToBeHired"
                                        name="numberOfPeopleToBeHired"
                                        error={Boolean(formik.errors.numberOfPeopleToBeHired)}
                                        onChange={formik.handleChange}
                                        value={formik.values.numberOfPeopleToBeHired}
                                        onBlur={formik.handleBlur}
                                        type="number"
                                        placeholder="Enter the number of people to be hired"
                                    />
                                    {formik.errors.numberOfPeopleToBeHired && formik.touched.numberOfPeopleToBeHired && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.numberOfPeopleToBeHired}
                                        </div>
                                    )}
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <label style={{fontWeight: "bold"}}>Application Deadline</label>
                                    <Input
                                        style={{ width: "100%" }}
                                        type="date"
                                        error={Boolean(formik.errors.applicationDeadline)}
                                        onChange={(event, data) =>
                                            handleChangeSemantic(data.value, "applicationDeadline")
                                        }
                                        value={formik.values.applicationDeadline}
                                        onBlur={formik.handleBlur}
                                        name="applicationDeadline"
                                        placeholder="Enter Application Deadline"
                                    />
                                    {formik.errors.applicationDeadline && formik.touched.applicationDeadline && (
                                        <div className={"ui pointing red basic label"}>
                                            {formik.errors.applicationDeadline}
                                        </div>
                                    )}
                                </Grid.Column>
                            </Grid>
                        </Form.Field>

                        <Form.Field>
                            <label>Job Description</label>
                            <TextArea
                                placeholder="Enter Job Description"
                                style={{ minHeight: 100 }}
                                error={Boolean(formik.errors.jobDescription).toString()}
                                value={formik.values.jobDescription}
                                name="jobDescription"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.errors.jobDescription && formik.touched.jobDescription && (
                                <div className={"ui pointing red basic label"}>
                                    {formik.errors.jobDescription}
                                </div>
                            )}
                        </Form.Field>
                        <Button
                            content="Post"
                            labelPosition="right"
                            icon="add"
                            positive
                            type="submit"
                            style={{ marginLeft: "20px" }}
                        />
                    </Form>
                </Card.Content>
            </Card>
        </div>
    );
}