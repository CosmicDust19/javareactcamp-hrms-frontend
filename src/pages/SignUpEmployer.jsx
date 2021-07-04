import {useDispatch} from "react-redux";
import {login} from "../store/actions/userActions";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {Link, useHistory} from "react-router-dom";
import {useFormik} from "formik";
import {toast} from "react-toastify";
import {Button, Form, Grid, Header, Icon, Input, Message, Popup, Segment} from "semantic-ui-react";
import EmployerService from "../services/employerService";
import UserService from "../services/userService";

const userService = new UserService()
const employerService = new EmployerService()

const errorPopUpStyle = {
    borderRadius: 0,
    opacity: 0.7,
    color: "rgb(201,201,201)"
}

export function SignUpEmployer() {

    const dispatch = useDispatch();

    let timeout;

    const [cNState, setCNState] = useState({isCNOpen: false})
    const [eMState, setEMState] = useState({isEMOpen: false})
    const [pWState, setPWState] = useState({isPWOpen: false})
    const [pWRState, setPWRState] = useState({isPWROpen: false})
    const [wSState, setWSState] = useState({isWSOpen: false})
    const [pNState, setPNState] = useState({isPNOpen: false})

    const handleCNOpen = () => {
        setCNState({isCNOpen: true})
        timeout = setTimeout(() => {
            setCNState({isCNOpen: false})
        }, 6300)
    }
    const handleCNClose = () => {
        setCNState({isCNOpen: false})
        clearTimeout(timeout)
    }

    const handleEMOpen = () => {
        setEMState({isEMOpen: true})
        timeout = setTimeout(() => {
            setEMState({isEMOpen: false})
        }, 6400)
    }
    const handleEMClose = () => {
        setEMState({isEMOpen: false})
        clearTimeout(timeout)
    }

    const handlePWOpen = () => {
        setPWState({isPWOpen: true})
        timeout = setTimeout(() => {
            setPWState({isPWOpen: false})
        }, 6500)
    }
    const handlePWClose = () => {
        setPWState({isPWOpen: false})
        clearTimeout(timeout)
    }

    const handlePWROpen = () => {
        setPWRState({isPWROpen: true})
        timeout = setTimeout(() => {
            setPWRState({isPWROpen: false})
        }, 6600)
    }
    const handlePWRClose = () => {
        setPWRState({isPWROpen: false})
        clearTimeout(timeout)
    }

    const handleWSOpen = () => {
        setWSState({isWSOpen: true})
        timeout = setTimeout(() => {
            setWSState({isWSOpen: false})
        }, 6700)
    }
    const handleWSClose = () => {
        setWSState({isWSOpen: false})
        clearTimeout(timeout)
    }

    const handlePNOpen = () => {
        setPNState({isPNOpen: true})
        timeout = setTimeout(() => {
            setPNState({isPNOpen: false})
        }, 6800)
    }
    const handlePNClose = () => {
        setPNState({isPNOpen: false})
        clearTimeout(timeout)
    }

    const employerSignUpSchema = Yup.object().shape({
        companyName: Yup.string().required("required").min(2, "too short").max(50, "too long"),
        email: Yup.string().required("required").matches(/\w+(\.\w+)*@[a-zA-Z]+(\.\w{2,6})+/, "not a valid e-mail format"),
        password: Yup.string().required("required").min(6, "min 6 characters"),
        passwordRepeat: Yup.string().oneOf([Yup.ref("password"), null], "not matching").required("required"),
        website: Yup.string().required("required").matches(/[\w\d-_?%$+#!^><|`é]+(\.[\w\d-_?%$+#!^><|`é]+)+/, "not a valid web site format"),
        phoneNumber: Yup.string().required("required").matches(/((\+\d{1,3})?0?[\s-]?)?\(?0?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/, "not a valid phone number format"),
    });

    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            companyName: "", email: "", password: "", passwordRepeat: "",
            website: "", phoneNumber: ""
        },
        validationSchema: employerSignUpSchema,
        onSubmit: (values) => {
            let counter = 0
            if (isEmailInUse) {
                toast.warning("This email in use!")
                counter++
            }
            if (isCompanyNameInUse) {
                toast.warning("This company name in use!")
                counter++
            }
            if (isWebsiteInUse) {
                toast.warning("This website in use!")
                counter++
            }
            if (!values.website.includes(values.email.substring(values.email.indexOf("@") + 1, values.email.length))) {
                toast.warning("Your website and email are incompatible, They should have the same domain!", {
                    autoClose: 5000,

                })
                counter++
            }
            if(counter === 0 ){
                employerService.add(values).then((result) => {
                    console.log(result)
                    employerService.getByEmailAndPassword(values.email, values.password).then(r => {
                        dispatch(login(r.data.data, "employer"))
                        toast("Welcome")
                    }).catch(reason => {
                        console.log(reason)
                        toast.warning("A problem has occurred, you can try to login")
                    }).finally(() => {
                        history.push("/")
                    })
                }).catch(reason => {
                    console.log(reason)
                    toast.warning("A problem has occurred")
                })
            }
        }
    });

    const [isEmailInUse, setIsEmailInUse] = useState([]);

    useEffect(() => {
        userService.existsByEmail(formik.values.email).then((result) => setIsEmailInUse(result.data.data));
    }, [formik.values.email]);

    const [isCompanyNameInUse, setIsCompanyNameInUse] = useState([]);

    useEffect(() => {
        employerService.existsByCompanyName(formik.values.companyName).then((result) => setIsCompanyNameInUse(result.data.data));
    }, [formik.values.companyName]);

    const [isWebsiteInUse, setIsWebsiteInUse] = useState([]);

    useEffect(() => {
        employerService.existsByWebsite(formik.values.website).then((result) => setIsWebsiteInUse(result.data.data));
    }, [formik.values.website]);

    const handleChangeSemantic = (fieldName, value) => {
        formik.setFieldValue(fieldName, value);
    }

    const triggerAllErrorPopUps = () => {
        if (formik.errors.companyName) handleCNOpen()
        if (formik.errors.email) handleEMOpen()
        if (formik.errors.password) handlePWOpen()
        if (formik.errors.passwordRepeat) handlePWROpen()
        if (formik.errors.website) handleWSOpen()
        if (formik.errors.phoneNumber) handlePNOpen()
    }

    return (
        <div>
            <Header color="purple" textAlign="center">
                Sign Up
            </Header>
            <Grid centered stackable padded>
                <Grid.Column width={6}>
                    <Segment placeholder color={"purple"} padded textAlign={"center"}>
                        <Form size="large" onSubmit={formik.handleSubmit} inverted>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="building outline" iconPosition="left"
                                                   placeholder="Company Name"
                                                   type="text"
                                                   value={formik.values.companyName} name="companyName"
                                                   onChange={(event, data) =>
                                                       handleChangeSemantic("companyName", data.value)}
                                                   onBlur={formik.handleBlur}/>
                                        }
                                        content={(formik.errors.companyName) ?
                                            formik.errors.companyName :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle} on='hover' open={cNState.isCNOpen}
                                        onClose={handleCNClose} onOpen={handleCNOpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="mail" iconPosition="left" placeholder="E-mail"
                                                   type="email"
                                                   value={formik.values.email} onChange={(event, data) =>
                                                handleChangeSemantic("email", data.value)}
                                                   onBlur={formik.handleBlur} name="email"/>
                                        }
                                        content={(formik.errors.email) ?
                                            formik.errors.email :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle} on='hover' open={eMState.isEMOpen}
                                        onClose={handleEMClose} onOpen={handleEMOpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="lock" iconPosition="left" placeholder="Password"
                                                   type="password"
                                                   value={formik.values.password} onChange={(event, data) =>
                                                handleChangeSemantic("password", data.value)}
                                                   onBlur={formik.handleBlur}
                                                   name="password"/>
                                        }
                                        content={(formik.errors.password) ?
                                            formik.errors.password :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle} on='hover' open={pWState.isPWOpen}
                                        onClose={handlePWClose} onOpen={handlePWOpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="lock" iconPosition="left" placeholder="Password Repeat"
                                                   type="password"
                                                   value={formik.values.passwordRepeat} onChange={(event, data) =>
                                                handleChangeSemantic("passwordRepeat", data.value)}
                                                   onBlur={formik.handleBlur}
                                                   name="passwordRepeat"/>
                                        }
                                        content={(formik.errors.passwordRepeat) ?
                                            formik.errors.passwordRepeat :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle} on='hover' open={pWRState.isPWROpen}
                                        onClose={handlePWRClose} onOpen={handlePWROpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="world"
                                                   iconPosition="left"
                                                   placeholder="Web Site"
                                                   type="text"
                                                   value={formik.values.website} name="website"
                                                   onChange={(event, data) =>
                                                       handleChangeSemantic("website", data.value)}
                                                   onBlur={formik.handleBlur}/>
                                        }
                                        content={(formik.errors.website) ?
                                            formik.errors.website :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle} on='hover' open={wSState.isWSOpen}
                                        onClose={handleWSClose} onOpen={handleWSOpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Grid padded>
                                <Grid.Column>
                                    {<Popup
                                        trigger={
                                            <Input icon="phone"
                                                   iconPosition="left"
                                                   placeholder="Phone Number"
                                                   type="text"
                                                   value={formik.values.phoneNumber}
                                                   name="phoneNumber"
                                                   onChange={(event, data) => {
                                                       handleChangeSemantic("phoneNumber", data.value)
                                                   }}
                                                   onBlur={formik.handleBlur}/>
                                        }
                                        content={(formik.errors.phoneNumber) ? formik.errors.phoneNumber :
                                            <Icon name="checkmark"/>}
                                        style={errorPopUpStyle}
                                        on='hover' open={pNState.isPNOpen}
                                        onClose={handlePNClose} onOpen={handlePNOpen} position='right center' inverted
                                        mouseEnterDelay={100} mouseLeaveDelay={100}
                                    />}
                                </Grid.Column>
                            </Grid>

                            <Segment textAlign="center" basic>
                                <Button animated="fade" type="submit" size="big" color="purple"
                                        onClick={() => {
                                            triggerAllErrorPopUps()
                                        }}>
                                    <Button.Content hidden><Icon name='signup'/></Button.Content>
                                    <Button.Content visible>Sign Up</Button.Content>
                                </Button>
                            </Segment>

                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

            <Grid textAlign="center">
                <Grid.Column width={10}>
                    <Message attached='bottom' warning>
                        <Icon name='help'/>
                        Already signed up?&nbsp;<Link to={"/login"}>Login Here</Link>&nbsp;instead.
                    </Message>
                </Grid.Column>
            </Grid>

        </div>
    );
}