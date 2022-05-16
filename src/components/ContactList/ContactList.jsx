import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ul className={s.list}>
      <ContactListItem contacts={contacts} onDeleteClick={onDeleteClick} />
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteClick: PropTypes.func.isRequired,
};
