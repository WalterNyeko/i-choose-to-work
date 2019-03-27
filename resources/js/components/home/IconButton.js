import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { deleteIcon, editIcon } from '../../assets/images';

class IconButtons extends Component {

  /**
   * Fires an event when the text on a reusable button changes
   *
   * @param {string} text
   *
   * @returns {string}
   */
  onButtonTextChange(text){
    let buttonText;
    if (text === 'Delete') {
      buttonText = <img src="" alt="Delete" />;
    } else if (text === 'Edit') {
      buttonText = <img src="" alt="Edit" />;
    } else {
      buttonText = text;
    }
    return buttonText;
  };
  render() {
    const { buttonText, modalButtonClassName, disabled } = this.props;
    return (
      <button
        id="modal-button"
        className={modalButtonClassName}
        onClick={this.props.openModal}
        disabled={disabled}
      >
        {this.onButtonTextChange(buttonText)}
      </button>
    );
  }
}
IconButtons.propTypes = {
    buttonText: PropTypes.string.isRequired,
    modalButtonClassName: PropTypes.string,
    openModal: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
  };
  
IconButtons.defaultProps = {
    modalButtonClassName: 'button',
    disabled: false,
  };
export default IconButtons;
