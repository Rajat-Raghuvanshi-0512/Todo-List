import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import pic from '../Me.jpeg'


export default function About() {
    const history = useHistory();
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <div className="about-wrapper">
                <div className="about-left">
                    <div className="about-left-content">
                        <div>
                            <div className="shadow">
                                <div className="about-img">
                                    <img src={pic} alt="about" />
                                </div>
                            </div>

                            <h2 className="text-light">Rajat<br />Raghuvanshi</h2>
                            <h3 className="text-light">Web Developer</h3>
                        </div>

                        <ul className="icons">
                            <a href="https://www.facebook.com/profile.php?id=100007970417452" rel="noreferrer" target="_blank"><li><i className="fab fa-facebook-f"></i></li></a>
                            <a href="https://twitter.com/_rajat_0512" rel="noreferrer" target="_blank"><li><i className="fab fa-twitter"></i></li></a>
                            <a href="/" rel="noreferrer" target="_blank"><li><i className="fab fa-linkedin"></i></li></a>
                            <a href="https://www.instagram.com/_rajat_0512/" rel="noreferrer" target="_blank"><li><i className="fab fa-instagram"></i></li></a>
                        </ul>
                    </div>
                </div>

                <div className="about-right">
                    <h1>hi<span>!</span></h1>
                    <h2>Here's who I am & what I do</h2>
                    <div className="about-btns">
                        <button type="button" className="btnnn btnnn-pink">resume</button>
                        <button type="button" className="btnnn btnnn-white">projects</button>
                    </div>

                    <div className="about-para">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-dark active " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link text-dark" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Details</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque praesentium quidem, expedita laborum, eligendi, eum cumque quia est beatae dolor obcaecati ipsa ipsum quasi provident incidunt voluptates recusandae neque maxime veritatis. In, non. Ab deserunt labore possimus modi enim? Lorem ipsum dolor sit amet consectetur
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae itaque praesentium quidem, expedita laborum, eligendi, eum cumque quia est beatae dolor obcaecati ipsa ipsum quasi provident incidunt voluptates recusandae neque maxime veritatis. In, non. Ab deserunt labore possimus modi enim? Lorem ipsum dolor sit amet consectetur
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
