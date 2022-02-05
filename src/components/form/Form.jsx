import { Component } from "react";
import { customAlphabet } from "nanoid";
import PropTypes from "prop-types";
import { ContactForm } from "../form/Form.styled";

const nanoid = customAlphabet("1234567890abcdef", 6);

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  createContact = () => {
    const { name, number } = this.state;
    return {
      id: nanoid(),
      name,
      number,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.createContact());
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            autoComplete="off"
            placeholder="Name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="tell"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            autoComplete="off"
            placeholder="Number"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit"> Add contact 💬</button>
      </ContactForm>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
