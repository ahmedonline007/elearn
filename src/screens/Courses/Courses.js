import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import img1 from "../../assets/images/img-2.jpg";
import img2 from "../../assets/images/img-1.jpg";
import img3 from "../../assets/images/img-7.jpg";
import img4 from "../../assets/images/img-3.jpg";
import img5 from "../../assets/images/img-4.jpg";


class Courses extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div style={{ marginTop: "100px" }}>
                    <div className="uk-container">
                        <div className="flex gap-12">
                            <div>
                                <div className="md:flex justify-between items-center mb-5">
                                    <div>
                                        <h2> Web Development Courses </h2>
                                        <p className=" uk-visible@m"> choose from +10.000 courses with new
                                additions published every months </p>
                                    </div>
                                    {/* <div className="flex"> 
                                        <div
                                            className="bg-white border border-gray-300 divide-gray-300 divide-x flex mr-3 rounded-md align-self-center">
                                            <a href="courses.html" className="px-4 py-2 text-lg text-gray-600"
                                                data-tippy-placement="top" title="Course list">
                                                <i className="icon-feather-grid"></i></a>
                                            <a href="courses-list.html" className="px-4 py-2 text-lg text-gray-400"
                                                data-tippy-placement="top" title="Course Grid">
                                                <i className="icon-feather-list"></i></a>
                                        </div>
                                        <div className="w-40">
                                            <select className="selectpicker ml-3" data-size="7">
                                                <option value=""> Newest </option>
                                                <option value="1">Popular</option>
                                                <option value="2">Free</option>
                                                <option value="3">Premium</option>
                                            </select>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img1} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $14.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">

                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img2} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $12.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">

                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img3} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $16.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img4} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $12.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img5} alt="" />
                                            </div>
                                            <span className="play-btn-trigger"></span>
                                        </div>
                                        <div className="course-card-content">
                                            <h3> Become a Web Developer from Scratch to Advanced</h3>
                                            <span className="instructor"> Stella Johnson </span>
                                            <ul className="course-info">
                                                <li> 13 total hours </li>
                                                <span className="middot">·</span>
                                                <li> 151 lectures </li>
                                            </ul>
                                        </div>
                                        <div className="course-card-foot">
                                            <div className="star-rating leading-4">
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $11.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img1} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $14.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img2} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $12.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img3} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $12.99
                                </span>
                                        </div>
                                    </a>
                                    <a href="course-intro.html" className="course-card">
                                        <div className="course-card-thumbnail">
                                            <div className="course-card-thumbnail-inner">
                                                <img src={img4} alt="" />
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
                                                <span className="star"></span> <span className="star"></span> <span className="star"></span>
                                                <span className="star"></span>
                                                <span className="star half"></span>
                                            </div>
                                            <span className="pricing">
                                                $12.99
                                </span>
                                        </div>
                                    </a>
                                </div>


                                <ul className="uk-pagination uk-flex-center uk-margin-medium">
                                    <li className="uk-active">
                                        <span>1</span>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}>2</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}>3</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}>4</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}>5</a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}><i className="icon-feather-chevron-right uk-margin-small-top"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" style={{ background: "white" }}>12</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>

        );
    }
}


export default withRouter(Courses);