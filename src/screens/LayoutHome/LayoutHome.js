import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { bindActionCreators } from "redux";
import Header from './Header';
import Footer from './Footer';

class LayOut extends Component {

    constructor(props) {
        super(props);

        this.state = {
            viewModal: false,
            viewTimerText: ""
        }


    }

    render() {

        return (
            <Fragment>
                <div className="layout-fixed layout-sticky-subnav">
                    <div className="preloader"></div>
                    <div className="mdk-header-layout js-mdk-header-layout" style={{ zIndex: "99999999999999999999999999" }}>
                        <Header />
                    </div>
                    {this.props.children}
                    <Footer />
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    token: state.reduces.token
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LayOut);
