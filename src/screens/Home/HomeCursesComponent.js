import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom';

//image Path
import img3 from '../../assets/images/img-2.jpg';
import img4 from '../../assets/images/img-1.jpg';
import img5 from '../../assets/images/img-7.jpg';
import img6 from '../../assets/images/img-3.jpg';


class HomeCursesComponent extends Component {



    render() {
        return (
            <Fragment>
                <h2 className="bold m-4 text-center p-4">Recent Courses</h2>
                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                    <a className="course-card" onClick={() => this.props.history.push("/Courses")} style={{cursor:"pointer"}}>
                        <div className="course-card-thumbnail">
                            <div className="course-card-thumbnail-inner">
                                <img src={img3} alt="" />
                            </div>
                            <span className="play-btn-trigger"></span>
                        </div>

                        <div className="course-card-content">
                            <h3>Learn Angular Fundamentals From beginning to advance</h3>
                            <span className="instructor"> Stella Johnson </span>
                            <ul className="course-info">
                                <li> 13 total hours </li>
                                <span className="middot">·</span>
                                <li> 151 lectures </li>
                            </ul>
                        </div>
                        <div className="course-card-foot">
                            <div className="star-rating leading-4">
                                <span className="star"></span> <span className="star"></span>{' '}
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star half"></span>
                            </div>
                            <span className="pricing">$14.99</span>
                        </div>
                    </a>
                    <a   onClick={() => this.props.history.push("/Courses")} className="course-card" style={{cursor:"pointer"}}>
                        <div className="course-card-thumbnail">
                            <div className="course-card-thumbnail-inner">
                                <img src={img4} alt="" />
                            </div>
                            <span className="play-btn-trigger"></span>
                        </div>
                        <div className="course-card-content">
                            <h3>Bootstrap 4 From Scratch to Expert With 5 Real Projects</h3>
                            <span className="instructor"> Stella Johnson </span>
                            <ul className="course-info">
                                <li> 13 total hours </li>
                                <span className="middot">·</span>
                                <li> 151 lectures </li>
                            </ul>
                        </div>
                        <div className="course-card-foot">
                            <div className="star-rating leading-4">
                                <span className="star"></span> <span className="star"></span>{' '}
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star half"></span>
                            </div>
                            <span className="pricing">$12.99</span>
                        </div>
                    </a>
                    <a   onClick={() => this.props.history.push("/Courses")} className="course-card" style={{cursor:"pointer"}}>
                        <div className="course-card-thumbnail">
                            <div className="course-card-thumbnail-inner">
                                <img src={img5} alt="" />
                            </div>
                            <span className="play-btn-trigger"></span>
                        </div>
                        <div className="course-card-content">
                            <h3>Learn Modern Web Designer And Developer Course</h3>
                            <span className="instructor"> Stella Johnson </span>
                            <ul className="course-info">
                                <li> 13 total hours </li>
                                <span className="middot">·</span>
                                <li> 151 lectures </li>
                            </ul>
                        </div>
                        <div className="course-card-foot">
                            <div className="star-rating leading-4">
                                <span className="star"></span> <span className="star"></span>{' '}
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star half"></span>
                            </div>
                            <span className="pricing">$16.99</span>
                        </div>
                    </a>
                    <a  onClick={() => this.props.history.push("/Courses")} className="course-card" style={{cursor:"pointer"}}>
                        <div className="course-card-thumbnail">
                            <div className="course-card-thumbnail-inner">
                                <img src={img6} alt="" />
                            </div>
                            <span className="play-btn-trigger"></span>
                        </div>
                        <div className="course-card-content">
                            <h3>The Complete JavaScript From beginning to advance</h3>
                            <span className="instructor"> Stella Johnson </span>
                            <ul className="course-info">
                                <li> 13 total hours </li>
                                <span className="middot">·</span>
                                <li> 151 lectures </li>
                            </ul>
                        </div>
                        <div className="course-card-foot">
                            <div className="star-rating leading-4">
                                <span className="star"></span> <span className="star"></span>{' '}
                                <span className="star"></span>
                                <span className="star"></span>
                                <span className="star half"></span>
                            </div>
                            <span className="pricing">$12.99</span>
                        </div>
                    </a>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(HomeCursesComponent);