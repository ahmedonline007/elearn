import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Loading from '../screens/loadingPage/loadingPage';

//LayoutHome
const LayoutHome = lazy(() => import("../screens/LayoutHome/LayoutHome"));

// pages
const Home = lazy(() => import("../screens/Home/Home"));
const PayOut = lazy(() => import("../screens/PayOut/PayOut"));
const Invoices = lazy(() => import("../screens/Invoices/Invoices"));
const Courses = lazy(() => import("../screens/Courses/Courses"));
const CoursesDetails = lazy(() => import("../screens/CoursesDetails/CoursesDetails"));
const About = lazy(() => import("../screens/About/About"));
const Enrollment = lazy(() => import("../screens/Enrollment/Enrollment"));
const Login = lazy(() => import("../screens/Login/Login"));


const RouterDocument = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Router basename="/">
                <Switch>
                    {/*   <Route path="*" component={NotFoundPage} /> */}
                    <Route path="/Login" exact component={Login} />

                    {/* StudentRoute */}
                    {/* <Route path='/Student/:path?' exact>
                        <LayOut>
                            <Switch>
                                <Route path="/Student/PayOut" exact component={PayOut} />
                            </Switch>
                        </LayOut>
                    </Route> */}

                    {/* InstructorRoute */}
                    {/* <Route path='/Instructor/:path?' exact>
                        <LayOut>
                            <Switch>
                                <Route path="/Instructor/PayOut" exact component={PayOut} />
                                <Route path="/Instructor/Courses" component={Courses} />
                            </Switch>
                        </LayOut>
                    </Route> */}

                    {/* homePages */}
                    <Route>
                        <LayoutHome>
                            <Switch>
                                <Route path="/" component={Home} exact />
                                <Route path="/PayOut" component={PayOut} />
                                <Route path="/Invoices" component={Invoices} />
                                <Route path="/Courses" component={Courses} />
                                <Route path="/CoursesDetails" component={CoursesDetails} />
                                <Route path="/About" component={About} />
                                <Route path="/Enrollment" component={Enrollment} />
                            </Switch>
                        </LayoutHome>
                    </Route>
                </Switch>

            </Router>
        </Suspense >
    );
};

export default RouterDocument;