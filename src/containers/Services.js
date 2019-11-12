import React from "react";
import "./Services.css"

class Services extends React.Component {
    render() {
        return (
            <section id="services" className="bg-gradient services-section">
                <div className="container">
                    <header className="text-center">
                        <h2 data-animate="fadeInDown" className="title animated fadeInDown">Services</h2>
                    </header>
                    <div className="row services text-center">
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <div className="icon"><i className="fa fa-search"></i></div>
                            <h3 className="heading mb-3 text-400">Consulting</h3>
                            <p className="text-left description">On on produce colonel pointed. Just four sold need over
                                how any. In to september suspicion determine he prevailed admitting. On adapted an as
                                affixed limited on. Giving cousin warmly things no spring mr be abroad. Relation
                                breeding be as repeated strictly followed margaret. One gravity son brought shyness
                                waiting regular led ham.</p>
                        </div>
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <div className="icon"><i className="fa fa-html5"></i></div>
                            <h3 className="heading mb-3 text-400">Web Development</h3>
                            <p className="text-left description">Manor we shall merit by chief wound no or would. Oh
                                towards between subject passage sending mention or it. Sight happy do burst fruit to
                                woody begin at. Assurance perpetual he in oh determine as.</p>
                        </div>
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <div className="icon"><i className="fa fa-tachometer"></i></div>
                            <h3 className="heading mb-3 text-400">Cloud Solutions</h3>
                            <p className="text-left description">Flexibility and scalability are the future of businesses. I can help enterprises build
                                Cloud-native applications from scratch as well as optimising/migrating existing applications to Cloud-native platforms. I
                                combine mobile-first design techniques with rich database functionality to create high-performance enterprise cloud apps.
                                I can deploy cloud apps in public, private or hybrid environments.</p>
                        </div>
                    </div>
                    <hr data-animate="fadeInUp" className="animated fadeInUp"/>
                    <div data-animate="fadeInUp" className="text-center animated fadeInUp">
                        <p className="lead">Would you like to know more or just discuss something?</p>
                        <p><a href="/contact" className="btn btn-outline-light link-scroll">Contact me</a></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;