import React, { useEffect, useRef } from 'react';

import { ApiItem } from '../../Engine/Items';

import classes from './NewItem.module.scss';

const NewItem: React.FC<{ item: ApiItem, onAnimationEnd: () => void }> = ({ item, onAnimationEnd }) => {
  const container = useRef<HTMLDivElement>(null);

  const onAnimationEndHandler = (e: any) => {
    if (e.currentTarget.classList.contains(classes.leave)) {
      onAnimationEnd();
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const containerElement = container.current;

    // if (containerElement !== null) {
    //   containerElement.addEventListener("animationend", onAnimationEndHandler);

    //   timer = setTimeout(() => {
    //     if (container && container.current !== null) {
    //       containerElement.classList.add(classes.leave);
    //     }
    //   }, 7500);
    // }

    return () => {
      if (containerElement !== null) {
        containerElement.removeEventListener("animationend", onAnimationEndHandler);
      }
      clearTimeout(timer);
    }
  })

  return (
    <div className={classes.newItem} ref={container} onClick={(e) => e.currentTarget.classList.add(classes.leave)}>
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