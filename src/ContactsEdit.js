import React, { Component } from 'react'

export default class ContactsEdit extends Component {
    state = {
        id: '',
        name: '',
        surname: '',
        age: ''
    }

    onChange = (e) => {
        this.setState({
            id: new Date(),
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.addNewContact(this.state)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="contacts-edit">
                <input onChange={this.onChange} name="name" type="text"/>
                <input onChange={this.onChange} name="surname" type="text"/>
                <input onChange={this.onChange} name="age" type="number"/>
                <button>Save</button>
            </form>
        )
    }
}
