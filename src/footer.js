import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () =>
    <footer className="page-footer font-small bg-dark">
        <div className="container-fluid bg-dark">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-1 py-3 d-flex justify-content-center">
                        <a href="https://www.facebook.com/anurag.kumar.18659/" target='_blank'>
                            <FontAwesomeIcon
                                className="blog-icons"
                                icon={['fab', 'facebook']}
                                color="#17a2b8"
                                size="2x"/>
                        </a>
                    </div>
                    <div className="col-1 py-3 d-flex justify-content-center">
                        <a href="https://twitter.com/edward_elric19" target='_blank'>
                            <FontAwesomeIcon
                                className="blog-icons"
                                icon={['fab', 'twitter']}
                                color="#17a2b8"
                                size="2x"/>
                        </a>
                    </div>
                    <div className="col-1 py-3 d-flex justify-content-center">
                        <a href="https://github.com/anuragkumar" target='_blank'>
                            <FontAwesomeIcon
                                className="blog-icons"
                                icon={['fab', 'github']}
                                color="#17a2b8"
                                size="2x"/>
                        </a>
                    </div>
                    <div className="col-1 py-3 d-flex justify-content-center">
                        <a href="https://www.linkedin.com/in/kumaranurag2/" target='_blank'>
                            <FontAwesomeIcon
                                className="blog-icons"
                                icon={['fab', 'linkedin-in']}
                                color="#17a2b8"
                                size="2x"/>
                        </a>
                    </div>
                    <div className="col-1 py-3 d-flex justify-content-center">
                        <a href="https://www.instagram.com/__hacked_ann/" target='_blank'>
                            <FontAwesomeIcon
                                className="blog-icons"
                                icon={['fab', 'instagram']}
                                color="#17a2b8"
                                size="2x"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">Created By:
            <a href="https://twitter.com/edward_elric19" className="text-info" target="_blank"> Anurag Kumar, Aspirant Coder
                <FontAwesomeIcon className="pl-2" color="#FA8072" icon="fire-alt" size="2x"/>
            </a>
        </div>

    </footer>

export default Footer;
