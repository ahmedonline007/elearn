import React, { Component } from "react";



class Enrollment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="register">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8 col-md-9">
                            <div className="section-title">
                                <h4 className="sub-title">
                                    Signup To Enter
                    </h4>
                                <h2>Create a free account</h2>
                                <p>Get probable winning tips from professional betting tipsters across  all sports<br />
                      and offers from leading bookmakers! See how it works!</p>
                            </div>
                        </div>
                    </div>
                    <div className="reg-body">
                        <form>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6">
                                    <h4 className="sub-title">Personal Information</h4>
                                    <input type="text" placeholder="First Name*" />
                                    <input type="text" placeholder="Last Name*" />
                                    <input type="email" placeholder="Email*" />
                                    <input type="text" placeholder="Phone No:*" />
                                    <input type="text" placeholder="Choose Your Referral ID*" />
                                    <input type="text" placeholder="Parent ID*" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 additional-info">
                                    <h4 className="sub-title">Additional Information</h4>
                                    <input type="text" placeholder="Business Name*" />
                                    <input type="text" placeholder="Website URL (where applicable)*" />
                                    <input type="email" placeholder="Country*" />
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <input type="text" placeholder="City*" />
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <input type="text" placeholder="Postal Code*" />
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Street Address*" />
                                    <input type="text" placeholder="Fax*" />
                                </div>
                            </div>
                            <div className="term-condition">
                                <h4 className="title">Terms and Conditions</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ipsum dolor sit
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            <br />
                                    <br />
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" name="exampleRadios" id="exampleRadios5" value="option2" />
                                        <label className="form-check-label" for="exampleRadios5">
                                            I agree to the terms &amp; conditions.
                                </label>
                                        <p>(*) We will never share your personal information with third parties.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <button className="def-btn btn-form">Secure Sign Up <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}


export default Enrollment;