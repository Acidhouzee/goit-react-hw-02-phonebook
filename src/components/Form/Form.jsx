import React, { Component } from "react";
import { nanoid } from "nanoid";
import '../Form/Form.css';

export class Form extends Component {

    state = {
        name: '',
        number: '',
        id: '',
    };

    handleChangeName = evt => {
        const contactId = nanoid(5);
        this.setState({ name: evt.target.value });
        this.setState({ id: contactId });
    };

    handleChangeNumber = evt => {
        this.setState({ number: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state)

        this.reset();
    }

    reset = () => {
        this.setState({name: '', id: '', number: ''});
    }

    render() {
        const { name } = this.state;
        const { number } = this.state;

        return(
            <form className="user-form" onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChangeName}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChangeNumber}
                    />
                </label>

                <button type="submit">Add Contact</button>
            </form>
        );
    }
}