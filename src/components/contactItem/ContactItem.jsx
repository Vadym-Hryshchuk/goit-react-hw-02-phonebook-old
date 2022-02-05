import PropTypes from "prop-types";
import { ListItem, Name, Number, Button } from "./ContactItem.styled";

const ContactItem = ({ name, number, onClick }) => {
  return (
    <ListItem>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <Button type="button" onClick={onClick}>
        Remove
      </Button>
    </ListItem>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
