import React from 'react'
import {Container} from 'semantic-ui-react'
import {Route} from "react-router-dom";
import JobAdvertisementList from "../pages/JobAdvertisementList";
import JobAdvertisementDetail from "../pages/JobAdvertisementDetail";
import JobAdvertisementAdd from "../pages/JobAdvertisementAdd";
import EmployerDetail from "../pages/EmployerDetail";
import Navi from "./Navi";
import Footer from "./Footer";
import UserList from "../pages/UserList";
import Login from "../pages/Login";
import {CandidateSignUp, EmployerSignUp} from "../pages/SignUp";
import CandidateDetail from "../pages/CandidateDetail";
import {ToastContainer} from "react-toastify";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navi/>
            <ToastContainer position = {"top-right"}/>
            <Container className="main container">
                <Route exact path="/" component={JobAdvertisementList}/>
                <Route exact path="/jobAdvertisements" component={JobAdvertisementList}/>
                <Route path="/jobAdvertisements/:id" component={JobAdvertisementDetail}/>
                <Route path="/postJobAdvertisement" component={JobAdvertisementAdd}/>
                <Route path="/employers/:id" component={EmployerDetail}/>
                <Route path="/candidates/:id" component={CandidateDetail}/>
                <Route path="/users" component={UserList}/>
                <Route path="/login" component={Login}/>
                <Route exact path="/candidateSignUp" component={CandidateSignUp}/>
                <Route exact path="/employerSignUp" component={EmployerSignUp}/>
            </Container>
            <Footer/>
        </div>
    )
}

