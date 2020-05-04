import React, { useState } from 'react';

import Button from '../Button/Button';
import { ApiItem } from '../../Engine/Items';

import classes from './Items.module.scss';

const Items: React.FC<{ items: ApiItem[], onItemUse: (item: ApiItem) => boolean }> = ({ items, onItemUse }) => {
  const [inventory, seeInventory] = useState(false);
  return (
    <div className={classes.container}>
      <Button onClick={() => seeInventory(true)}>Inventario</Button>
      {
        inventory && <div className={`${classes.itemsBackdrop} ${items.length === 0 ? classes.noItemsBackdrop : ''}`}><div className={classes.items}>
          {
            items && items.map((item, index) => <div onClick={() => {
              if (onItemUse(item)) {
                seeInventory(false);
              }
            }} className={classes.item} key={index}><span className={classes.itemName}>{item.NAME}</span><small>{item.DESCRIPTION}</small></div>)
          }
          {
            items.length === 0 && <div className={classes.noItems}>No tienes items</div>
          }
          <div className={classes.closeInventory} onClick={() => seeInventory(false)}>&times;</div>
        </div></div>
      }
    </div>
  );
}

export default Items;
