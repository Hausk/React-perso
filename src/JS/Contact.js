import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../CSS/Contact.css'

function Field({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="input-form_text"></input>
    </div>
}
function Textarea({name, value, onChange, children}) {
    return <div className="form-group">
        <label htmlFor={name}>{children}</label>
        <textarea type="textarea" value={value} onChange={onChange} id={name} name={name} className="input-form_text"></textarea>
    </div>
    
}



export default class Contact extends Component {

    constructor (props) {
        super(props)
        this.state = {
            nom: '',
            objet: '',
            message: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (e) {
        const name = e.target.name
        const type = e.target.type
        const value = type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="contact_content">
                <div className="page_controllers">
                    <Link to="/portfolio" activeClassName="active">
                        <div title="Vers la page d'accueil" className="prev">
                            <span>Portfolio</span>
                            <em></em>
                        </div>
                    </Link>
                </div>
                <div className="contact_card">
                    <div className="contact_card-head"></div>
                    <div className="contact_card-body">
                        <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>
                        <Field name="objet" value={this.state.objet} onChange={this.handleChange}>e-Mail</Field>
                        <Field name="objet" value={this.state.objet} onChange={this.handleChange}>Objet</Field>
                        <Textarea name="message" value={this.state.message} onChange={this.handleChange}>Message</Textarea>
                    </div>
                </div>
            </div>
        )
    }
}
