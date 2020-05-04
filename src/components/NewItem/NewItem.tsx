import React from 'react';

import { ApiItem } from '../../Engine/Items';

import classes from './NewItem.module.scss';

const NewItem: React.FC<{ item: ApiItem }> = ({ item }) => {

  return (
    <div className={classes.newItem} onClick={(e) => e.currentTarget.classList.add(classes.leave)}>
      <div className={classes.newItemPinkLane}></div>
      <div className={classes.newItemYellowLane}></div>
      <div className={classes.newItemGreenLane}>
        <div>
          <span>Nuevo item:</span>
          <b>{item.NAME}</b>
        </div>
        <div>{item.DESCRIPTION}</div>
      </div>
    </div>
  );
}

export default NewItem;