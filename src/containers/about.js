import React from 'react';
import CloudPractitioner from "./cloud-practitioner-tag_270x24.png";
import DeveloperAssociate from "./developer-associate-tag_270x24.png";
import SFIA from "./sfia_siteLogo.png"
import "./about.css"

var sixtyWidthStyle = {
    width: "60%"
};
var seventyWidthStyle = {
    width: "70%"
};
var eightyWidthStyle = {
    width: "80%"
};
var nintyWidthStyle = {
    width: "90%"
};

class About extends React.Component {
    render() {
        return (
            <section id="about" className="about-section">
                <div className="container">
                    <header className="text-center">
                        <h2 data-animate="fadeInDown" className="title animated fadeInDown">About me</h2>
                    </header>
                    <div className="row">
                        <div data-animate="fadeInUp" className="col-lg-6 animated fadeInUp">
                            <p>A leader in software development, with years of experience in advising, supporting, managing and
                                providing leadership to internal and external Development teams.</p>
                            <p>Proven record of the management and completion of large, multi-team software development projects,
                                with experience in scheduling, deployment, team leadership and application of new technologies.</p>
                            <p>Results-driven professional with a positive attitude, leveraging analytical processes, and exceptional
                                technical skills to create software and IT solutions aimed at improving efficiency, and to meet company
                                strategic challenges.</p>
                        </div>
                        <div data-animate="fadeInUp" className="col-lg-6 animated fadeInUp">
                            <div className="skill-item">
                                <div className="progress-title">JAVA</div>
                                <div className="progress">
                                    <div role="progressbar" style={ nintyWidthStyle } aria-valuenow="90" aria-valuemin="0"
                                         aria-valuemax="100" className="progress-bar progress-bar-skill4"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="progress-title">Javascript / NodeJS / ReactJS</div>
                                <div className="progress">
                                    <div role="progressbar" style={ seventyWidthStyle } aria-valuenow="70" aria-valuemin="60"
                                         aria-valuemax="100" className="progress-bar progress-bar-skill2"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="progress-title">HTML / CSS</div>
                                <div className="progress">
                                    <div role="progressbar" style={ eightyWidthStyle } aria-valuenow="80" aria-valuemin="0"
                                         aria-valuemax="100" className="progress-bar progress-bar-skill3"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="progress-title">PHP</div>
                                <div className="progress">
                                    <div role="progressbar" style={ sixtyWidthStyle } aria-valuenow="0" aria-valuemin="60"
                                         aria-valuemax="100" className="progress-bar progress-bar-skill1"></div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="progress-title">PERL</div>
                                <div className="progress">
                                    <div role="progressbar" style={ seventyWidthStyle } aria-valuenow="70" aria-valuemin="0"
                                         aria-valuemax="100" className="progress-bar progress-bar-skill5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div data-animate="fadeInUp" className="col-sm-12 animated fadeInUp"><h4 className="certs">Certifications</h4></div>
                    </div>
                    <div className="row">
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <div className="aws-logo-container">
                                <img alt="Amazon Web Services (AWS)" id="ember587" className="aws-logo"
                                 src="https://media.licdn.com/dms/image/C4D0BAQGzuSBRRRuphw/company-logo_400_400/0?e=1579737600&amp;v=beta&amp;t=X4dtvccSj7vj-EX6dfQmEU8HnlLbLo2PCOVqgpeRWFk" />
                            </div>
                            <div className="aws-detail-container">
                                <h3 className="t-16 t-bold">AWS Certified Developer - Associate</h3>
                                <p className="t-14"><span>Amazon Web Services (AWS)</span></p>
                                <p><img src={DeveloperAssociate} className="" alt="" /></p>
                            </div>
                        </div>
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <div className="aws-logo-container">
                                <img alt="Amazon Web Services (AWS)" id="ember587" className="aws-logo"
                                     src="https://media.licdn.com/dms/image/C4D0BAQGzuSBRRRuphw/company-logo_400_400/0?e=1579737600&amp;v=beta&amp;t=X4dtvccSj7vj-EX6dfQmEU8HnlLbLo2PCOVqgpeRWFk" />
                            </div>
                            <div className="aws-detail-container">
                                <h3 className="t-16 t-bold">AWS Certified Cloud Practitioner</h3>
                                <p className="t-14"><span>Amazon Web Services (AWS)</span></p>
                                <p><img src={CloudPractitioner} className="" alt="" /></p>
                            </div>
                        </div>
                        <div data-animate="fadeInUp" className="col-lg-4 animated fadeInUp">
                            <p><img src={SFIA} className="" alt="" /></p>
                            <h3 className="t-16 t-bold">Skills Framework for the Information Age</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;