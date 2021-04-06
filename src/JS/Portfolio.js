import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/index.css';
import '../CSS/Portfolio.css';



export default class portfolio extends Component {
    render() {
        return (
            <div className="portfolio">
                <div className="page_controllers">
                    <Link to="/" activeClassName="active">
                        <div title="Vers la page d'accueil" className="prev">
                            <span>Home</span>
                            <em></em>
                        </div>
                    </Link>
                    <Link to="/contact" activeClassName="active">
                        <div title="Vers ma page de présentation" className="next">
                            <span>Contact</span>
                            <em></em>
                        </div>
                    </Link>
                </div>
                <div className="content_portfolio">
                    <header></header>
                    <div className="cards_list">
                        
                    <div className="cards_bg">
                            <div className="cards">
                                <a href="bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img img_new-app"></div>
                                    <div className="card_body">
                                        <h3>Nouveau site Perso</h3>
                                        <div className="tags">
                                            <p>ReactJs</p>
                                            <p>JS</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="before.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Ancien Site perso</h3>
                                        <div className="tags">
                                            <p>PHP</p>
                                            <p>JS</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="webagency.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Maquette Webagency</h3>
                                        <div className="tags">
                                            <p>Html</p>
                                            <p>Css</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="before.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>O Velo</h3>
                                        <div className="tags">
                                            <p>Html</p>
                                            <p>JS</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="before.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Ireki</h3>
                                        <div className="tags">
                                            <p>Wordpress</p>
                                            <p>Css</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="before.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Dice game</h3>
                                        <div className="tags">
                                            <p>Html</p>
                                            <p>JS</p>
                                            <p>Ionic</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="before.bessa-jonathan.com" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Jean Forteroche</h3>
                                        <div className="tags">
                                            <p>Php</p>
                                            <p>Sql</p>
                                            <p>CSS</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cards_bg">
                            <div className="cards">
                                <a href="https://tous-ensemble.bessa-jonathan.com/" title="Aller visiter le site">
                                    <div className="card_img"></div>
                                    <div className="card_body">
                                        <h3>Tous ensemble</h3>
                                        <div className="tags">
                                            <p>JS</p>
                                            <p>Bootstrap 4</p>
                                            <p>MobileFirst</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
