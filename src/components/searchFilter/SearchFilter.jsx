import PropTypes from "prop-types";
import { Label } from "./SearchFilter.styled";
const SearchFilter = ({ value, filterChange }) => {
  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        autoComplete="off"
        placeholder="Name"
        onChange={filterChange}
      />
    </Label>
  );
};
export default SearchFilter;

SearchFilter.propTypes = {
  value: PropTypes.string.isRequired,
  filterChange: PropTypes.func.isRequired,
};
