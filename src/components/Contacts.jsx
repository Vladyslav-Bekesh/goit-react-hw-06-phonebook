import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../redux/store';

function Contacts({ contacts }) {
  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul>
        {contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <span>
                {name}: {number}
              </span>
              <button
                type="button"
                onClick={() => {
                  handleClick(id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contacts;
