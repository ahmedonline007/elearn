import img1 from '../../assets/images/macbook.png';
import img2 from '../../assets/images/1280_work-station-straight-on-view.jpg';


export default function HomeHeaderComponent() {
    return (
        <div style={{ top: '65px' }}
            className="mdk-box mdk-box--bg-gradient-primary bg-dark js-mdk-box position-relative overflow-hidden mb-0"
            data-effects="parallax-background blend-background">
            <div className="mdk-box__bg">
                <div
                    className="mdk-box__bg-front"
                    style={{ backgroundImage: `url(${img2})` }}></div>
            </div>
            <div className="mdk-box__content">
                <div className="container page__container py-64pt py-md-112pt">
                    <div className="row align-items-center text-center text-md-left">
                        <div className="col-md-6 col-lg-5 order-1 order-md-0">
                            <h1 className="text-white">
                                Learn{' '}
                                <span className="d-block d-md-inline-block text-scramble js-text-scramble">
                                    Development
                    </span>
                            </h1>
                            <p className="lead mb-32pt mb-lg-48pt text-white">
                                Business, Technology and Creative Skills taught by industry
                                experts. Explore a wide range of skills with our
                                professional tutorials.
                  </p>
                            <a
                                href="library.html"
                                className="btn btn-lg btn-white btn--raised mb-16pt">
                                Browse Courses
                  </a>
                            <p className="mb-0">
                                <a href="#" className="text-white-70 text-underline">
                                    <strong>Are you a teacher?</strong>
                                </a>
                            </p>
                        </div>
                        <div className="col-md-6 col-lg-7 order-0 order-md-1 text-center mb-32pt mb-md-0">
                            <img src={img1} alt="macbook" className="home-macbook" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}