import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Aboutme.css'

export default class Aboutme extends Component {
    render() {
        return (
            <div className="aboutme_wrapper">
                <div className="page_controllers">
                    <Link to="/" activeClassName="active">
                        <div title="Vers la page d'accueil" className="top">
                            <span>Home</span>
                            <em></em>
                        </div>
                    </Link>
                </div>
                <header></header>
                <div className="aboutme_navbar">
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                <section id="1" className="first-part">
                    <p className="heading-num">01</p>
                    <div className="section">
                        <div className="how about-me_title">
                            <h3>Qui suis-je ?</h3>
                        </div>
                        <div className="who-wrap">
                            <h2>Bessa Jonathan</h2>
                            <p>Halvah jelly lollipop jujubes donut jelly cheesecake sesame snaps. Macaroon cake marshmallow dessert tootsie roll. Fruitcake biscuit lollipop lemon drops wafer. Chocolate cheesecake sugar plum fruitcake.
                            Apple pie chupa chups carrot cake jelly beans gummi bears soufflé oat cake. Gingerbread donut danish tart biscuit dragée soufflé cookie topping. Cake chocolate bar donut bear claw macaroon.</p>
                            <div className="img-me-p1"></div>
                        </div>
                    </div>
                </section>
                <section id="2" className="second-part">
                    <p className="heading-num">02</p>
                    <div className="section passions">
                        <div className="how about-me_title">
                            <h3>Passions</h3>
                        </div>
                        <div className="passion_list">
                            <div className="box_1">
                                <div className="box_img"></div>
                                <h2>Voyager</h2>
                                <p>J'aime voyager, visiter et profiter pour savourer chaques details du lieu ou je me trouve, loin de chez moi je me sent libre j'ai l'impression d'être dans une nouvelle vie. Le voyage m'apporte l'excitation de l'inconnu et de la découverte, c'est un sentiment unique que j'apprécie.</p>
                            </div>
                            <div className="box_2">
                                <div className="box_img"></div>
                                <h2>Développer</h2>
                                <p>J'aime prendre du temps pour développer, pour le moment des sites internet et surement dans peu de temps je passerais a de l'automatisation programmée que ce soit via un site ou non, j'aime que les choses soit claires et bien ficelées.</p>
                            </div>
                            <div className="box_3">
                                <div className="box_img"></div>
                                <h2>Musique</h2>
                                <p>Je suis un grand fan de musique quel que soit le type même si j'ai mes préférences, la musique me motive, coupler la musique et le code.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="2" className="second-part">
                    <p className="heading-num">03</p>
                    <div className="section passions">
                        <div className="how about-me_title">
                            <h3>Skills</h3>
                        </div>
                        <div className="skill_list">
                            <div className="skill_list-left">
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                            </div>
                            <div className="skill_list-right">
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
