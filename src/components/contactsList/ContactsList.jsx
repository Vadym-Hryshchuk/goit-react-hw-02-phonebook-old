import PropTypes from "prop-types";
import ContactItem from "../contactItem/ContactItem";
import Notification from "../notification/Notification";
import { List } from "./ContactsList.styled";

const ContactsList = ({ filterContacts, removeContact }) => {
  return (
    <>
      {filterContacts.length > 0 ? (
        <List>
          {filterContacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              onClick={() => removeContact({ id, name })}
            />
          ))}
        </List>
      ) : (
        <Notification />
      )}
    </>
  );
};
export default ContactsList;

ContactsList.propTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object),
  removeContact: PropTypes.func.isRequired,
};
