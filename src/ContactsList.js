import React, { Component } from 'react';
import ContactsTable from './ContactsTable'
import ContactsEdit from './ContactsEdit';

export default class ContactList extends Component {
  state = {
    selectedContact: this.getEmptyContact(),
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

  saveContact = (contact) => {
    if(contact.id) {
      this.updateContact(contact)
    } else {
      this.createContact(contact)
    }
  }

  updateContact = (contact) => {
    this.setState({
      contacts: this.state.contacts.map(item => item.id === contact.id ? contact : item)
    })
  }

  createContact = (contact) => {
    contact.id = Date.now();
    this.setState({
      contacts: [...this.state.contacts, contact],
      selectedContact: contact
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

  getEmptyContact() {
    return {
      "age": "",
      "name": "",
      "surname": ""
    }
  }
  
  editSelectedContact = (contact) => {
    this.setState({
      selectedContact: contact
    })
  }
  
  addNewContactBtn = (e) => {
    this.setState({
      selectedContact: this.getEmptyContact()
    })
  }

  render() {
    return (
      <div className="contacts-main">
        <div className="contacts-list">
          <ContactsTable 
          deleteItemFromList={this.deleteItemFromList}
          editSelectedContact={this.editSelectedContact} 
          contacts={this.state.contacts} />
          <button onClick={this.addNewContactBtn} className="btn-add-New-Contact">Add new</button>
        </div>
        <ContactsEdit 
        key={this.state.selectedContact.id}
        contact={this.state.selectedContact} 
        saveContact={this.saveContact} />        
      </div>
    )
  }
}
