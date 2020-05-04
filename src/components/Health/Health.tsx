import React from 'react';

import classes from './Health.module.scss';

const Health: React.FC<{ health: number }> = ({ health }) => {
  const damage = 100 - health;
  return (
    <div className={classes.container}>
      <div className={classes.healthData}><b>{health}</b> / 100</div>
      <div className={classes.healthBar} style={{ width: `${health}%` }}></div>
      <div className={classes.damageBar} style={{ width: `${damage}%` }}>{damage > 0 ? <div>-</div> : ''}</div>
    </div>
  );
}

export default Health;
