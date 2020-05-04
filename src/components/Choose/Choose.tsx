import React from 'react';

import Button from '../Button/Button';
import { GameNode, Option } from '../../Engine/Tree';

import classes from './Choose.module.scss';
import TextBox from '../TextBox/TextBox';

const Health: React.FC<{ Node: GameNode, onOptionSelect: (option: Option) => void }> = ({ Node, onOptionSelect }) => {
  return (
    <div className={classes.container}>
      <div>
        <TextBox styles={classes.description}>{Node.description}</TextBox>
        <TextBox styles={classes.question}>{Node.question}</TextBox>
        <div className={classes.options}>
          {
            Node.options && Node.options.map(option => <Button key={option.id} onClick={() => onOptionSelect(option)}>{option.text}</Button>)
          }
        </div>
      </div>
    </div>
  );
}

export default Health;
