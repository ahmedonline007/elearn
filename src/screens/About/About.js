import React, { Component } from "react";
import img1 from "../../assets/images/avatar-1.jpg";
import img2 from "../../assets/images/avatar-2.jpg";
import img3 from "../../assets/images/avatar-3.jpg";
import img4 from "../../assets/images/avatar-4.jpg";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="Wrapper" style={{ marginTop: "60px" }}>
        <div
          className="-mt-20 bg-center bg-cover"
          style={{ backgroundColor: "#1377c9" }}
          uk-img="true"
        >
          <div className="uk-container-small lg:pt-48 pt-32 pb-10 m-auto px-5">
            <div className="flex justify-center">
              <div className="lg:w-7/12 space-y-6 uk-light lg:text-left text-center">
                <h1 className="text-4xl leading-none"> Let's Work Together </h1>
                <p className="text-lg">
                  We are part of a global design Community. We are here to make
                  you succeed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="uk-container-small m-auto">
          <article className="uk-article pt-5 py-10 px-5">
            <p className="uk-text-lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 className="mt-4">Maecenas sit amet </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h4 className="mt-4">Etiam blandit lacus</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.Minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </article>
        </div>
        <div className="bg-gradient-to-l from-green-500 to-teal-500 py-20">
          <div className="container m-auto max-w-4xl ">
            <div className="text-center md:w-2/3 m-auto mb-12 text-white">
              <h1 className="font-bold lg:text-5xl mb-4 text-3xl text-white">
                Our customers speak
              </h1>
              <p className="lg:text-lg">
                {" "}
                Join thousands of satisfied customers learning our platform
                globally.{" "}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-md flex items-center bg-white py-2 px-4">
                <img
                  src={img1}
                  alt="image"
                  className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
                />
                <div className="text-dark mb-0 text-lg">
                  “Lorem ipsum dolor sit consectetur”{" "}
                </div>
              </div>
              <div className="rounded-md flex items-center bg-white py-2 px-4">
                <img
                  src={img2}
                  alt="image"
                  className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
                />
                <div className="text-dark mb-0 text-lg">
                  “Consectetur lorem sit dolor ipsum”
                </div>
              </div>
              <div className="rounded-md flex items-center bg-white py-2 px-4">
                <img
                  src={img3}
                  alt="image"
                  className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
                />
                <div className="text-dark mb-0 text-lg">
                  “Adipiscing elit, sed do incididunt ut labore.”{" "}
                </div>
              </div>
              <div className="rounded-md flex items-center bg-white py-2 px-4">
                <img
                  src={img4}
                  alt="image"
                  className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
                />
                <div className="text-dark mb-0 text-lg">
                  “Incididunt ut labore adipiscing elit, sed do .”{" "}
                </div>
              </div>
              <div className="rounded-md flex items-center bg-white py-2 px-4">
                <img
                  src={img1}
                  alt="image"
                  className="w-10 h-10 rounded-full flex-shrink-0 mr-3"
                />
                <div className="text-dark mb-0 text-lg">
                  “Tincidunt ut laoreet dolore magna aliquam”
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="uk-section bg-light uk-text-center uk-background-image@s uk-background-norepeat uk-background-bottom-center">
          <div className="uk-container-small uk-text-center m-auto">
            <small className="uk-text-bold block mb-3 text-sm">
              {" "}
              The Amazing Team{" "}
            </small>
            <h1> Meet the makers </h1>
            <p>
              We are part of a global design Community. We are here to make you
              succeed.
            </p>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 text-center mt-8">
              <div>
                <img
                  src={img2}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> Heather Wright </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img1}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> Monroe Parker </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img3}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> John Sullivan </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img4}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> James Lewis </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img1}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> Monroe Parker </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img2}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> James Lewis </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img3}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> Heather Wright </h3>
                  <p> CEO </p>
                </div>
              </div>
              <div>
                <img
                  src={img1}
                  alt=""
                  className="rounded-md shadow-lg transform hover:scale-100 duration-200 hover:-translate-y-2 m-auto"
                />
                <div className="my-3">
                  <h3 className="text-xl font-semibold"> Monroe Parker </h3>
                  <p> CEO </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
