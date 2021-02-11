import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

import img1 from "../../assets/images/course-prev.jpg";
import img2 from "../../assets/images/avatar-4.jpg";
import img3 from "../../assets/images/icon-play.svg";
import img4 from "../../assets/images/avatar-1.jpg";
import img5 from "../../assets/images/avatar-2.jpg";



class CoursesDetails extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Fragment>
                <div id="Wrapper" style={{ marginTop: "50px" }}>
                    <div className="py-16 bg-center bg-cover bg-no-repeat"
                        style={{ backgroundColor: "#1377c9" }} >
                        <div className="uk-container">
                            <div className="lg:w-8/12 text-white">
                                <h5 className="text-white"> WEB DEVELOPMENT </h5>
                                <h1 className="lg:leading-10 lg:text-4xl text-white text-2xl leading-8">The Complete JavaScript From beginning to advance</h1>
                                <p className="lg:text-lg"> Master JavaScript with the most complete course! Projects Excellent course. we explain the core concepts in javascript
                that are usually glossed over in other courses </p>

                                <ul className="flex text-gray-300 gap-4">
                                    <li className="flex items-center">
                                        <span className="avg bg-orange-400 mr-2 px-2 rounded text-white font-bold"> 4.9 </span>
                                        <div className="star-rating">
                                            <span className="star"></span><span className="star"></span>
                                            <span className="star"></span><span className="star">
                                            </span><span className="star"></span>
                                        </div>
                                    </li>
                                    <li> <i className="icon-feather-users"></i> 1200 Enerolled </li>
                                </ul>
                                <ul className="flex text-gray-300">
                                    <li> Created by <a href="#" className="text-white fond-bold"> Stella Johnson </a> </li>
                                    <span className="middot mx-3 text-2xl">·</span>
                                    <li> Last updated 10/2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="lg:mt-0 mt-6 pb-16">
                        <div className="uk-container">
                            <div className="flex gap-24">
                                <div className="lg:w-8/12">
                                    <div className="space-y-6">
                                        <div>
                                            <h3> Description </h3>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                                tincidunt ut
                                                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magna
                                                aliquam erat
                                                volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit
                                                lobortis
                                                nisl ut aliquip ex ea commodo consequat
                            </p>
                                        </div>
                                        <div>
                                            <h3> What You’ll Learn </h3>
                                            <ul className="grid md:grid-cols-2">
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Setting up the environment</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Advanced HTML Practices</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Build a portfolio website</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Responsive Designs</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Understand HTML Programming</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Code HTML</li>
                                                <li> <i className="uil-check text-xl font-bold mr-2"></i>Start building beautiful websites</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3> Requirements</h3>
                                            <ul className="list-disc ml-5">
                                                <li>Any computer will work: Windows, macOS or Linux</li>
                                                <li>Basic programming HTML and CSS.</li>
                                                <li>Basic/Minimal understanding of JavaScript</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3> Here is exactly what we cover in this course: </h3>
                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim laoreet
                                            dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
                                            <p> consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci</p>
                                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                            Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod
                                            mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                                            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                                aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>

                                    <h3 className="mb-8 mt-20" id="curriculum"> Course Curriculum </h3>
                                    <ul uk-accordion="true">
                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md uk-open">
                                            <a className="uk-accordion-title text-md" href="#"> Html Introduction </a>
                                            <div className="uk-accordion-content mt-3 -mx-6">
                                                <ul className="course-curriculum-list font-semibold">
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> Introduction <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> What is HTML <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        What is a Web page? <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Your First Web Page <a href="#trailer-modal"
                                                            className="bg-teal-100 border border-green-200 ml-2 px-3 rounded text-green-600 text-xs"
                                                            uk-toggle="true"> Preview </a>
                                                        <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Brain Streak <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>

                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title text-md" href="#"> Your First webpage </a>
                                            <div className="uk-accordion-content mt-3 -mx-6">

                                                <ul className="course-curriculum-list font-semibold">
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> Headings <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> Paragraphs <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Emphasis and Strong Tag <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Brain Streak <a href="#trailer-modal"
                                                            className="bg-teal-100 border border-green-200 ml-2 px-3 rounded text-green-600 text-xs"
                                                            uk-toggle="true"> Preview </a>
                                                        <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Live Preview Feature <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>

                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title text-md" href="#"> Your First webpage </a>
                                            <div className="uk-accordion-content mt-3 -mx-6">

                                                <ul className="course-curriculum-list font-semibold">
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> The paragraph tag <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> The break tag <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Headings in HTML <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Bold, Italics Underline <a href="#trailer-modal"
                                                            className="bg-teal-100 border border-green-200 ml-2 px-3 rounded text-green-600 text-xs"
                                                            uk-toggle="true"> Preview </a>
                                                        <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>

                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title text-md" href="#"> Your First webpage </a>
                                            <div className="uk-accordion-content mt-3 -mx-6">

                                                <ul className="course-curriculum-list font-semibold">
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> Something to Ponder <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg> Tables <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        HTML Entities <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        HTML Iframes <a href="#trailer-modal"
                                                            className="bg-teal-100 border border-green-200 ml-2 px-3 rounded text-green-600 text-xs"
                                                            uk-toggle="true"> Preview </a>
                                                        <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                    <li className="hover:bg-gray-200 px-6 py-2 flex">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                            className="w-6 mr-2">
                                                            <path fillRule="evenodd"
                                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                                clipRule="evenodd" />
                                                        </svg>
                                        Some important things
                                        <span className="text-sm ml-auto"> 23 min </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                    <div id="trailer-modal"  >
                                        <div className="uk-modal-dialog">
                                            <button className="uk-modal-close-default mt-2  mr-1" type="button"  ></button>
                                            <div className="uk-modal-header">
                                                <h4> Trailer video </h4>
                                            </div>
                                            <div className="w-full">
                                                <iframe src="https://www.youtube.com/embed/nOCXXHGMezU" className="w-full"
                                                    uk-video="automute: true" frameBorder="0" allowFullScreen  ></iframe>
                                            </div>

                                            <div className="uk-modal-body">
                                                <h3>Build Responsive Websites </h3>
                                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                                dolore
                                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                                proident,
                                                sunt
                                    in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mb-8 mt-20" id="faq"> Course Faq </h3>
                                    <ul uk-accordion="true">
                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md uk-open">
                                            <a className="uk-accordion-title" href="#"> Html Introduction </a>
                                            <div className="uk-accordion-content mt-3">
                                                <p> The primary goal of this quick start guide is to introduce you to
                                                Unreal
                                                Engine 4`s (UE4) development environment. By the end of this guide,
                                                you`ll
                                                know how to set up and develop C++ Projects in UE4. This guide shows
                                                you
                                                how
                                                to create a new Unreal Engine project, add a new C++ className to it,
                                                compile
                                                the project, and add an instance of a new className to your level. By
                                                the
                                                time
                                                you reach the end of this guide, you`ll be able to see your
                                                programmed
                                                Actor
                                    floating above a table in the level. </p>
                                            </div>
                                        </li>
                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title" href="#"> Your First webpage</a>
                                            <div className="uk-accordion-content mt-3">
                                                <p> The primary goal of this quick start guide is to introduce you to
                                                Unreal
                                                Engine 4`s (UE4) development environment. By the end of this guide,
                                                you`ll
                                                know how to set up and develop C++ Projects in UE4. This guide shows
                                                you
                                                how
                                                to create a new Unreal Engine project, add a new C++ className to it,
                                                compile
                                                the project, and add an instance of a new className to your level. By
                                                the
                                                time
                                                you reach the end of this guide, you`ll be able to see your
                                                programmed
                                                Actor
                                    floating above a table in the level. </p>
                                            </div>
                                        </li>
                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title" href="#"> Some Special Tags </a>
                                            <div className="uk-accordion-content mt-3">
                                                <p> The primary goal of this quick start guide is to introduce you to
                                                Unreal
                                                Engine 4`s (UE4) development environment. By the end of this guide,
                                                you`ll
                                                know how to set up and develop C++ Projects in UE4. This guide shows
                                                you
                                                how
                                                to create a new Unreal Engine project, add a new C++ className to it,
                                                compile
                                                the project, and add an instance of a new className to your level. By
                                                the
                                                time
                                                you reach the end of this guide, you`ll be able to see your
                                                programmed
                                                Actor
                                    floating above a table in the level. </p>
                                            </div>
                                        </li>
                                        <li className="bg-white px-6 py-4 rounded shadow hover:shadow-md">
                                            <a className="uk-accordion-title" href="#"> Html Introduction </a>
                                            <div className="uk-accordion-content mt-3">
                                                <p> The primary goal of this quick start guide is to introduce you to
                                                Unreal
                                                Engine 4`s (UE4) development environment. By the end of this guide,
                                                you`ll
                                                know how to set up and develop C++ Projects in UE4. This guide shows
                                                you
                                                how
                                                to create a new Unreal Engine project, add a new C++ className to it,
                                                compile
                                                the project, and add an instance of a new className to your level. By
                                                the
                                                time
                                                you reach the end of this guide, you`ll be able to see your
                                                programmed
                                                Actor
                                    floating above a table in the level. </p>
                                            </div>
                                        </li>
                                    </ul>

                                    <h3 className="mb-8 mt-20" id="announcement"> Announcement </h3>

                                    <div className="flex items-center gap-x-4 mb-5">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div>
                                            <h4 className="-mb-1 text-base"> Stella Johnson</h4>
                                            <span className="text-sm"> Instructor <span className="text-gray-500"> 1 year ago </span> </span>
                                        </div>
                                    </div>

                                    <h4 className="leading-8 text-xl"> Nam liber tempor cum soluta nobis eleifend option congue imperdiet
                        doming id quod mazim placerat facer possim assum.</h4>
                                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Nam
                                    liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
                                    placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                                    minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                        commodo consequat.</p>

                                    <div className="flex space-x-5 mb-8" id="reviews">
                                        <div className="lg:w-1/4 w-full">
                                            <div className="bg-blue-100 p-6 rounded-md border border-blue-200 text-center shadow-xs">
                                                <h1 className="leading-none text-6xl"> 4.8</h1>
                                                <div className="flex justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-gray-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                </div>
                                                <h5 className="text-lg mb-0 mt-2 text-blue-800"> Course Rating</h5>
                                            </div>
                                        </div>
                                        <div className="w-2/4 hidden lg:flex flex-col justify-center">

                                            <div className="space-y-5">
                                                <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                                    <div className="w-11/12 h-3 rounded-lg bg-gray-800"> </div>
                                                </div>
                                                <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                                    <div className="w-4/5 h-3 rounded-lg bg-gray-800"> </div>
                                                </div>
                                                <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                                    <div className="w-3/5 h-3 rounded-lg bg-gray-800"> </div>
                                                </div>
                                                <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                                    <div className="w-3/6 h-3 rounded-lg bg-gray-800"> </div>
                                                </div>
                                                <div className="w-full h-3 rounded-lg bg-gray-300 shadow-xs relative">
                                                    <div className="w-1/3 h-3 rounded-lg bg-gray-800"> </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="w-1/4 hidden lg:flex flex-col justify-center">
                                            <div className="space-y-1">
                                                <div className="flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-2"> 95 %</span>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-gray-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-2"> 85 %</span>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-gray-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-2"> 60 %</span>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-gray-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-2"> 50 %</span>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-orange-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                        className="w-5 h-5 text-gray-400">
                                                        <path
                                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="ml-2"> 35 %</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="mb-8 mt-20"> Reviews (4610) </h3>
                                    <div className="flex gap-x-4 mb-5 relative">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div>
                                            <h4 className="text-base m-0"> Stella Johnson</h4>
                                            <span className="text-gray-700 text-sm"> Student </span>
                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>

                                            <div className="flex justify-center items-center absolute right-0 top-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-gray-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex gap-x-4 mb-5 relative">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div>
                                            <h4 className="text-base m-0"> Stella Johnson</h4>
                                            <span className="text-gray-700 text-sm"> Student </span>
                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>

                                            <div className="flex justify-center items-center absolute right-0 top-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-gray-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex gap-x-4 mb-5 relative">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div>
                                            <h4 className="text-base m-0"> Stella Johnson</h4>
                                            <span className="text-gray-700 text-sm"> Student </span>
                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                            </p>

                                            <div className="flex justify-center items-center absolute right-0 top-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-gray-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="flex gap-x-4 mb-5 relative">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div>
                                            <h4 className="text-base m-0"> Stella Johnson</h4>
                                            <span className="text-gray-700 text-sm"> Student </span>
                                            <p className="mt-3">
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet dolore
                                                magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                                                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                                            </p>

                                            <div className="flex justify-center items-center absolute right-0 top-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-orange-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    className="w-5 h-5 text-gray-400">
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>

                                        </div>
                                    </div>

                                    <h3 className="mb-8 mt-20"> Add your comment </h3>
                                    <div className="flex gap-x-4 mb-5 relative">
                                        <img src={img2} alt="" className="rounded-full shadow w-12 h-12" />
                                        <div className="flex-1">
                                            <div className="grid grid-cols-2 gap-y-0 gap-x-4">
                                                <div>
                                                    <input type="text" placeholder="name" />
                                                </div>
                                                <div>
                                                    <input type="text" placeholder="Email" />
                                                </div>
                                                <div className="col-span-2">
                                                    <textarea name="" id="" cols="30" rows="6"></textarea>
                                                </div>
                                                <div className="col-span-2 flex justify-between py-4">
                                                    <p className="m-0 text-gray-600"> Some HTML is okay </p>
                                                    <input type="submit" value="Post Comment" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                                <div className="lg:w-4/12 -mt-32 uk-visible@m ">
                                    <div className="lg:ml-6 -mt-64">
                                        <div>
                                            <div className="bg-white overflow-hidden rounded-md shadow shadow-xl">
                                                <div className="relative w-full h-48">
                                                    <a href="#trailer-modal" uk-toggle="true">
                                                        <img src={img3} alt="" className="absolute h-16 object-cover w-16 z-10"
                                                            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)", }} />
                                                        <img src={img1} alt="" className="w-full h-full absolute object-cover top-0" />
                                                    </a>
                                                </div>
                                                <div className="p-6">

                                                    <div id='CoursesDetails-flex' className="justify-center items-center gap-x-2">
                                                        <div id="CoursesDetails-flex">
                                                            <img src={img4} alt="" className="border-4 border-solid border-white h-8 w-8 rounded-full" />
                                                            <img src={img5} alt="" className="border-4 border-solid border-white h-8 w-8 rounded-full -ml-2" />
                                                            <img src={img4} alt="" className="border-4 border-solid border-white h-8 w-8 rounded-full -ml-2" />
                                                            <img src={img4} alt="" className="border-4 border-solid border-white h-8 w-8 rounded-full -ml-2" />
                                                        </div>
                                                        <div>
                                                            <span> +19 Enrolled </span>
                                                        </div>
                                                    </div>

                                                    <div className="mb-2">
                                                        <a onClick={() => this.props.history.push("/Enrollment")} className="bg-orange-600 inline-block my-3 py-2 rounded-full text-center text-white hover:text-orange-100 w-full" style={{ backgroundColor: "#dd6b20", color: "white", cursor: "pointer" }}> Enroll </a>
                                                    </div>

                                                    <hr className="-mx-6 border-gray-200 mb-3" />

                                                    <h4 className="CoursesDetailsIncludes"> COURSE INCLUDES</h4>

                                                    <div className="flex gap-4 text-gray-600">
                                                        <div>
                                                            <div className="flex items-center">
                                                                <i className="uil-youtube-alt mr-1"></i> 28 hours video
                                    </div>
                                                            <div className="flex items-center">
                                                                <i className="uil-award mr-1"></i> Certificate
                                    </div>
                                                            <div className="flex items-center">
                                                                <i className="uil-clock-five mr-1"></i> Lifetime access
                                    </div>
                                                        </div>
                                                        <div>
                                                            <div className="flex items-center">
                                                                <i className="uil-file-alt mr-1"></i> 12 Topics
                                    </div>
                                                            <div className="flex items-center">
                                                                <i className="uil-question-circle mr-1"></i> 6 Quizzes
                                    </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div id="stucky-end-here"></div>

                </div>
            </Fragment>

        );
    }
}


export default withRouter(CoursesDetails);