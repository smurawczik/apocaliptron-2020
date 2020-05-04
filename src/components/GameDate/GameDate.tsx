import React from 'react';

import classes from './GameDate.module.scss';

const GameDate: React.FC<{ date: string }> = ({ date }) => {
  return (
    <div className={classes.container}>
      {date}
    </div>
  );
}

export default GameDate;
