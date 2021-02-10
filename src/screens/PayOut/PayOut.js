import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import paypal from "../../assets/images/logos/paypal.svg";




class PayOut extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div className="container page__heading-container" style={{marginTop: "130px"}}>
                    <div className="page__heading d-flex align-items-center justify-content-between">

                        <h1 className="m-0">Payout</h1>
                    </div>
                </div>


                <div className="container page__container">
                    <div className="card card-form">
                        <div className="row no-gutters">
                            <div className="col-lg-4 card-body">
                                <p><strong className="headings-color">Payout Account</strong></p>
                                <p className="text-muted mb-0">Where we will send you the money.</p>
                            </div>
                            <div className="col-lg-8 card-form__body card-body">
                                <div className="form-group d-flex flex-column">
                                    <img alt="PayPal Logo" src={paypal} width="140" />
                                    <div>
                                        contact@frontted.com
                                </div>
                                </div>

                                <div className="form-group m-0">
                                    <a href="#" className="btn btn-success">Change</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-form">
                        <div className="row no-gutters">
                            <div className="col-lg-4 card-body">
                                <p><strong className="headings-color">Account</strong></p>
                                <p className="text-muted mb-0">Set your account type &amp; details.</p>
                            </div>
                            <div className="col-lg-8 card-form__body card-body">
                                <div className="form-group">

                                    <label htmlFor="fname">Account Type</label><br />
                                    <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                        <label className="btn btn-light active">
                                            <input type="radio" name="options" id="option1" defaultChecked /> Individual
                                    </label>
                                        <label className="btn btn-light">
                                            <input type="radio" name="options" id="option2" /> Company
                                    </label>
                                    </div>
                                </div>
                                <hr />

                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="fname">First name</label>
                                            <input id="fname" type="text" className="form-control" placeholder="First name" value="Adrian" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="lname">Last name</label>
                                            <input id="lname" type="text" className="form-control" placeholder="Last name" value="Demian" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="desc">Address</label>
                                    <textarea id="desc" rows="4" className="form-control" placeholder="Enter invoice address"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country</label><br />
                                    <select id="country" className="custom-select w-auto">
                                        <option value="usa">United States</option>
                                        <option value="usa">Canada</option>
                                    </select>
                                    <small className="form-text text-muted">The country is not visible to other users.</small>
                                </div>
                                <div className="form-group m-0">
                                    <a href="#" className="btn btn-outline-primary">Update</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}


export default withRouter(PayOut);