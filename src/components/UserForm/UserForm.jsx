import React, { Component } from "react";
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import '../UserForm/UserForm.css';

export class UserForm extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
        filter: '',
    }

    deleteItem = (id) => {
        const updatedContacts = this.state.contacts.filter(contact => contact.id !== id);
    
        this.setState({ contacts: updatedContacts });
    };

    formSubmitData = data => {
        const existingContact = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

        if (existingContact) {
            alert(`${data.name} is already in contacts!`);
            return;
        }

        this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, data],
            };
        });
    }

    findContact = evt => {
        this.setState({ filter: evt.target.value });
    }

    render() {
        const usersContacts = this.state.contacts;
        const filter = this.state.filter;

        return(
            <div className="form-wrapper">
                <h2>Phonebook</h2>
                <Form onSubmit={this.formSubmitData}></Form>                
                <h2>Contacts</h2>
                <Filter filterName={this.findContact}></Filter>
                <Contacts contacts={usersContacts} filter={filter} deleteContact={this.deleteItem}></Contacts>
            </div>
        );
    }  
}
