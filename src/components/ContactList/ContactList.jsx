import PropTypes from 'prop-types';
import s from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteClick }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li className={s.item} key={contact.id}>
          <p className={s.contactInfo}>
            {contact.name}: {contact.number}
          </p>
          <button
            className={s.deleteBtn}
            type="button"
            onClick={() => onDeleteClick(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
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
