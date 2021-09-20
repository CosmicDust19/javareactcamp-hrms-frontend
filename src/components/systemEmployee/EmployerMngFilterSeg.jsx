import {Button, Dropdown, Icon, Loader, Message, Segment} from "semantic-ui-react";
import SDropdown from "../../utilities/customFormControls/SDropdown";
import {employerStatusOptions, getFilteredEmployers} from "../../utilities/EmployerUtils";
import {defDropdownStyle} from "../../utilities/Utils";
import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {changeEmployersFilters, changeFilteredEmployers} from "../../store/actions/listingActions";
import EmployerService from "../../services/employerService";
import {toast} from "react-toastify";

function EmployerMngFilterSeg() {

    const dispatch = useDispatch();
    const filterProps = useSelector(state => state?.listingReducer.listingProps.employers)
    const filters = filterProps.filters
    const firstFilter = filterProps.firstFilter
    const lastSynced = filterProps.lastSynced
    const now = new Date().getTime()

    const [loading, setLoading] = useState(false);
    const [allEmployers, setAllEmployers] = useState();

    useEffect(() => {
        return () => {
            setLoading(undefined)
            setAllEmployers(undefined)
        };
    }, []);

    useEffect(() => {
        setLoading(true)
        const employerService = new EmployerService()
        employerService.getAll()
            .then(r => {
                const data = r.data.data ? r.data.data : []
                setAllEmployers(r.data.data)
                if (firstFilter === true)
                    dispatch(changeFilteredEmployers(data, undefined,data.length === 0))
            })
            .catch(() => setTimeout(() => toast("Waiting for response 🕔 ... Thanks for your patience."), 2500))
            .finally(() => setLoading(false))
    }, [dispatch, firstFilter, filterProps.filteredEmployers]);

    useEffect(() => {
        if (now - lastSynced > 120000) {
            const employerService = new EmployerService()
            employerService.getAll().then(r => {
                const data = r.data.data ? r.data.data : []
                setAllEmployers(r.data.data)
                dispatch(changeFilteredEmployers(getFilteredEmployers(data, filters), true))
            })
        }
    }, [dispatch, filters, lastSynced, now]);

    const formik = useFormik({
        initialValues: {...filters}
    });

    if (!allEmployers) return <Loader active inline='centered' size={"large"} content={"Waiting for response..."}
                                      style={{marginTop: 100, marginBottom: 100}}/>

    if (allEmployers.length === 0)
        return (
            <Message warning compact as={Segment} raised style={{marginBottom: 50, marginLeft: -5}}>
                <Icon name={"wait"} size={"large"}/>
                <font style={{verticalAlign: "middle"}}>
                    No employer found. Please wait for employers to sign up. Employers listed if stored before.
                </font>
            </Message>
        )

    let key = 0
    let employerOption
    const employerCompanyNameOption = allEmployers.map((employer) => ({
        key: key++,
        text: employer.companyName,
        value: employer.id,
    }));

    const employerEmailOption = allEmployers.map((employer) => ({
        key: key++,
        text: employer.email,
        value: employer.id,
    }));

    const employersWebsiteOption = allEmployers.map((employer) => ({
        key: key++,
        text: employer.website,
        value: employer.id,
    }));

    const employersPhoneOption = allEmployers.map((employer) => ({
        key: key++,
        text: employer.phoneNumber,
        value: employer.id,
    }));

    employerOption = employerCompanyNameOption
        .concat(employersPhoneOption)
        .concat(employerEmailOption)
        .concat(employersWebsiteOption)

    const changeStatusFilter = (value) => {
        if (value.length !== 0) formik.values.employerId = ""
        formik.setFieldValue("statuses", value);
        formik.values.statuses = value
        handleFilter()
    }

    const search = (value) => {
        if (value !== 0) formik.values.statuses = []
        formik.setFieldValue("employerId", value);
        formik.values.employerId = value
        handleFilter()
    }

    const handleFilter = () => {
        setLoading(true)
        dispatch(changeEmployersFilters(formik.values))
        dispatch(changeFilteredEmployers(getFilteredEmployers(allEmployers, formik.values), true))
        setLoading(false)
    }

    return (
        <Segment basic textAlign={"center"} loading={loading}>
            <Dropdown placeholder="Search" search className="icon" selectOnBlur={false} button labeled
                      loading={employerOption.length === 0} icon="search" options={employerOption}
                      value={formik.values.employerId} basic onChange={(event, data) => search(data.value)}
                      style={{borderRadius: 5, height: 38, width: 196, marginLeft: 4}}/>
            {formik.values.employerId === "" ? null : <Button icon="x" circular onClick={() => search("")}/>}
            <SDropdown name={"statuses"} placeholder="Statuses" options={employerStatusOptions} formik={formik}
                       onChange={(event, data) => changeStatusFilter(data.value)}
                       style={{...defDropdownStyle}}/>
        </Segment>
    )
}

export default EmployerMngFilterSeg;