import React, { Component } from 'react';
import ContactsTable from './ContactsTable'
import ContactsEdit from './ContactsEdit';

export default class ContactList extends Component {
  state = {
    contacts: [
      {
        "id": 1,
        "age": 33,
        "name": "Leanne",
        "surname": "Graham",
      },
      {
        "id": 2,
        "age": 34,
        "name": "Ervin",
        "surname": "Howell",
      },
      {
        "id": 3,
        "age": 27,
        "name": "Clementine",
        "surname": "Bauch",
      },
      {
        "id": 4,
        "age": 33,
        "name": "Patricia",
        "surname": "Lebsack",
      },
      {
        "id": 5,
        "age": 33,
        "name": "Chelsey",
        "surname": "Dietrich",
      },
      {
        "id": 6,
        "age": 33,
        "name": "Dennis",
        "surname": "Schulist",
      },
      {
        "id": 7,
        "age": 33,
        "name": "Kurtis",
        "surname": "Weissnat",
      },
      {
        "id": 8,
        "age": 33,
        "name": "Nicholas",
        "surname": "Runolfsdottir V",
      },
      {
        "id": 9,
        "age": 33,
        "name": "Glenna",
        "surname": "Reichert",
      },
      {
        "id": 10,
        "age": 33,
        "name": "Clementina",
        "surname": "DuBuque",
      }
    ]
  };

  addNewContact = (changes) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        changes
      ]
    })
  }
  deleteItemFromList = (id) => {
    const newList = this.state.contacts.filter((item) => {
      return item.id !== id;
    })
    this.setState({
      contacts: 
        newList
    })
  }
  render() {
    return (
      <div className="contacts-main">
        <div className="contacts-list">
          <ContactsTable deleteItemFromList={this.deleteItemFromList} contacts={this.state.contacts} />
        </div>
        <ContactsEdit addNewContact={this.addNewContact} />        
      </div>
    )
  }
}
