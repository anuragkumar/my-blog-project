import React from 'react';
import {Link} from "react-router-dom";

const HomeBlogs = () =>
    <div className="container-fluid">
        <div className='row bg-dark'>
            <div className="col" />
            <div className='col bg-dark text-info text-right'>
                <h1 className="display-1 d-inline-block">Blogs</h1>
                <Link to="/blogs" className="btn btn-dark d-inline-block blog-button">See More</Link>
                <hr/>
            </div>
        </div>
        <div className="row bg-dark">
            <div className="col-6 bg-dark text-left">
                <div className="row bg-dark">
                    <div className="col-12 padding-0 bg-dark">
                        <Link to="/blogs">
                            <div className="card border-0 bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1051/500/300" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Story of a boy</h5>
                                    <p className="card-text">Adventures of a boy through the world, fighting constantly
                                        with his inner self</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Fiction, Small Story</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blogs">
                            <div className="card border-0 bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1052/500/300" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">How to create Microservices in Java SpringBoot</h5>
                                    <p className="card-text">Demonstrates a simple web application and how microservices saves
                                    us from being trapped with no hope</p>
                                    <p className="card-text">10min read</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-6 text-left">
                <div className="row">
                    <div className="col-12 padding-0 bg-dark">
                        <Link to="/blogs">
                            <div className="card border-0 bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1054/500/200" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">How to understand Algorithms and Time Complexity</h5>
                                    <p className="card-text">Easier way to understand the myths of how good an algorithm is
                                    and how to visualize it</p>
                                    <p className="card-text">5min read</p>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blogs">
                            <div className="card border-0 bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/104/500/200" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Couple who went through time and time again</h5>
                                    <p className="card-text">A couple where they didn't chose each other but went through
                                    time again and again to stand together</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Fiction, Small Story</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                        <Link to="/blogs">
                            <div className="card border-0 bg-dark text-white blog-project-card">
                                <img className="card-img" src="https://picsum.photos/id/1063/500/200" alt="Card image" />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">Thoughts and never-ending Dilemmas</h5>
                                    <p className="card-text">A person's thoughts and choices put together in a single place</p>
                                    <footer className="blockquote-footer text-white">
                                        <cite title="Source Title">Random collection of thoughts</cite>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default HomeBlogs;
