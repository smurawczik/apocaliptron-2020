import React, { useState } from 'react';
import moment from 'moment';

import Health from './components/Health/Health';
import Choose from './components/Choose/Choose';
import Items from './components/Items/Items';
import GameDate from './components/GameDate/GameDate';

import ItemsApi, { ApiItem } from './Engine/Items';
import { GameTree, GameApi, Option, unexpectedGameEnd } from './Engine/Tree';
import HealthApi from './Engine/Health';

import classes from './App.module.scss';
import NewItem from './components/NewItem/NewItem';

const App = () => {
  const [node, setSelectedNode] = useState(GameApi.getInitialNode(GameTree));
  const [date, setDate] = useState(moment().format("DD-MM-YYYY HH:mm:ss A"));
  const [health, setHealth] = useState(HealthApi.getHealth());
  const [items, setItems] = useState(ItemsApi.getUserItems());

  const onOptionSelect = (option: Option) => {
    const newNode = GameApi.searchTree(GameApi.getInitialNode(GameTree), option.id);
    if (newNode === null) {
      setSelectedNode(unexpectedGameEnd)
    } else {
      setSelectedNode(newNode);
    }

    if (newNode?.health) {
      setHealth(HealthApi.setHealth(newNode.health));
    }
  }

  const useItem = (item: ApiItem) => {
    try {
      if (item.HEAL) {
        setHealth(HealthApi.setHealth(item.HEAL));
      }
      if (!item.DAMAGE) {
        setItems(ItemsApi.removeItem(item));
        return true;
      }
      return false;
    } catch (e) {
      console.warn(e.message);
      return false;
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.healthDateContainer}>
        <div className={classes.healthContainer}>
          <Health health={health} />
        </div>
        <div className={classes.gameDateContainer}>
          <GameDate date={date} />
        </div>
      </div>
      <Items items={items} onItemUse={useItem} />
      <Choose Node={node} onOptionSelect={onOptionSelect} />
      <NewItem item={items[0]} />
    </div>
  );
}

export default App;
