import React from 'react'
import {Tab} from 'semantic-ui-react'
import EmployerList from "../pages/EmployerList";
import CandidateList from "../pages/CandidateList";
import SystemEmployeeList from "../pages/SystemEmployeeList";
import {Route} from "react-router-dom";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";

const panes = [
    {
        menuItem: 'Employers',
        render: () =>
            <Tab.Pane attached={false}>
                <EmployerList/>
            </Tab.Pane>,
    },
    {
        menuItem: 'Candidates',
        render: () =>
            <Tab.Pane attached={false}>
                <CandidateList/>
            </Tab.Pane>,
    },
    {
        menuItem: 'System Employees',
        render: () =>
            <Tab.Pane attached={false}>
                <SystemEmployeeList/>
            </Tab.Pane>,
    },
]

const UsersTable = () => (
    <Tab menu={{secondary: true, pointing: true}} panes={panes}/>
)

export default function Dashboard() {
    return (
        <div>
            <Route exact path = "/" component = {JobAdvertisementList}/>
            <Route exact path = "/jobAdvertisements" component = {JobAdvertisementList}/>
            <Route exact path = "/jobAdvertisements/:id" component = {JobAdvertisementDetail}/>
            <Route exact path = "/postJobAdvertisement" component = {JobAdvertisementAdd}/>
            <Route exact path = "/users" component = {UsersTable}/>
        </div>

    )
}

/*<div className="ui segment active tab">
            <Divider horizontal> </Divider>
            <Segment placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <Form>
                            <Form.Input
                                icon='mail'
                                iconPosition='left'
                                placeholder='Email'
                            />
                            <Form.Input
                                icon='lock'
                                iconPosition='left'
                                type='password'
                                placeholder='Password'
                            />
                            <Button content='Login' primary/>
                        </Form>
                    </Grid.Column>
                    <Grid.Column verticalAlign='middle'>
                        <Button content='Sign up' icon='signup' size='big'/>
                    </Grid.Column>
                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>

        </div>*/
