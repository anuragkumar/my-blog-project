import React from 'react';
import { Link} from "react-router-dom";

const HomeProjects = () =>
    <div className="container-fluid mt-5">
        <div className='row'>
            <div className='col-6 bg-dark text-info text-left'>
                <h1 className="display-1 d-inline-block">Projects</h1>
                <Link to="/projects" className="btn btn-dark d-inline-block blog-button">See More</Link>
                <hr/>
            </div>
        </div>
        <div className="row">
            <div className="col-12 bg-dark">
                <div className="row bg-dark">
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/237/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Visual Common Sense and Object Detection in Computer Vision Web App
                                        <br/>
                                        <small className="text-muted">Machine Learning, Computer Vision, Python-Flask, Angular</small></h5>
                                    <p className="card-text d-none d-xl-block">PyTorch and OpenCV Selective Search on to implement Common Sense in Video Analysis
                                    <br/> Demonstrates how to setup an end-to-end Web Application for users to play</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed August 2020</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1003/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Fake Job Postings Prediction Web App
                                        <br/>
                                        <small className="text-muted">Supervised Machine Learning, Data Visualization, Angular, Python-Flask</small>
                                    </h5>
                                    <p className="card-text d-none d-xl-block">Categorical Classification Models and Random Forest to predict
                                        fake job postings on Career Websites
                                        <br/>
                                        Demonstrates how to setup end-to-end Web Application</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed May 2020</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1011/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Image Super Resolution using Deep Convolution Neural Network
                                        <br/>
                                        <small className="text-muted">Machine Learning, CNN, TensorFlow, Python, Jupyter-Notebook</small></h5>
                                    <p className="card-text d-none d-xl-block">TensorFlow and Python to convert low resolution patches into high resolution
                                        patches of an Image
                                        <br/> Demonstrates Patch Extraction, Non-Linear Mapping and Reconstruction to achieve high PSNR</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed April 2020</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1025/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Movie Recommend System Using k-means clustering
                                        <br/>
                                        <small className="text-muted">Unsupervised Machine Learning, Scikit-Learn, Python, Jupyter-Notebook</small></h5>
                                    <p className="card-text d-none d-xl-block">Convert Movie Reviews Ratings into CSR Matrix and k-means clustering to categorize reviews
                                        <br/> Analyzing optimal k-value using Silhoutte Score for personalized recommender system</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed April 2020</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1041/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Inventory Management Web Application in Angular and Express NodeJS with SKU Scanning
                                        <br/>
                                        <small className="text-muted">Angular 8, Typescript, Express, NodeJS, Mongoose, MongoDB, Rest API</small></h5>
                                    <p className="card-text d-none d-xl-block">Rest API services and Mongoose to manage data models integrated with MongoDB
                                        <br/> Front-end development in Angular 8 for proper component management</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed April 2019</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-6 padding-0">
                        <Link to="/projects">
                            <div className="card bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1047/500/300" alt="" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Course Editor Web Application in React, Redux and Java SpringBoot
                                        <br/>
                                        <small className="text-muted">ReactJS, Redux, Java, SpringBoot, Hibernate, MySQL</small></h5>
                                    <p className="card-text d-none d-xl-block">Single page web application for course management and student registration
                                        <br/> Demonstrates Rest APIs in SpringBoot to be consumed by clients</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Completed March 2019</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default HomeProjects;
