import React, { Component } from 'react'

export default class ContactsEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.contact
        }
    }
    
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.saveContact(this.state)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="contacts-edit">
                <input value={this.state.name} onChange={this.onChange} name="name" type="text"/>
                <input value={this.state.surname} onChange={this.onChange} name="surname" type="text"/>
                <input value={this.state.age} onChange={this.onChange} name="age" type="number"/>
                <button>Save</button>
            </form>
        )
    }
}
