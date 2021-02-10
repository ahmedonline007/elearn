import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


import HomeHeaderComponent from "./HomeHeaderComponent";
import HomeCursesComponent from "./HomeCursesComponent";
import HomeReviewsComponenet from "./HomeReviewsComponenet";
import HomeCompanyComponent from "./HomeCompanyComponent";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>

                <HomeHeaderComponent />

                <div className="container page__container" style={{ top: '50px', maxWidth: '1280px' }}>

                    <HomeCursesComponent />

                    <HomeReviewsComponenet />

                    <HomeCompanyComponent />
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Home);
