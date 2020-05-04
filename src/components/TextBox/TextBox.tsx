import React from 'react';

import classes from './TextBox.module.scss';

const TextBox: React.FC<{ styles: string }> = ({ children, styles }) => {
  return (
    <div className={`${classes.textbox} ${styles}`}>{children}</div>
  );
}

export default TextBox;
