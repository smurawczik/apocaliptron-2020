import React from 'react';

import classes from './Button.module.scss';

const Button: React.FC<{ onClick: () => void }> = ({ onClick, children }) => {
  return (
    <button className={classes.button} onClick={onClick}><div className={classes.buttonPlaceholder}>{children}</div><span className={classes.buttonText}>{children}</span></button>
  );
}

export default Button;
