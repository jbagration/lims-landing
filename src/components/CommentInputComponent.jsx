import React from 'react';
import '../styles/InputStyles.scss';
import PropTypes from 'prop-types';

const CommentInputComponent = ({ value, onChange }) => {
  return (
    <div className="comment-input-container">
      <label className="comment-label" htmlFor="commentInput">
        Оставьте комментарий
      </label>
      <input
        id="commentInput"
        className="comment-input"
        placeholder="Комментарий..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

CommentInputComponent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CommentInputComponent;
