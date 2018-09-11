/* eslint-disable no-unused-vars*/
import React, { Component, PropTypes } from 'react';
import styles from './styles';
/* eslint-enable no-unused-vars*/
import GameButton from '../../components/GameButton/';

import Select from 'react-select';

const propTypes = {
  handleRedoButtonClick: PropTypes.func.isRequired,
  handleUndoButtonClick: PropTypes.func.isRequired,
  doWinAnimation: PropTypes.func.isRequired,
  handleDealButtonClick: PropTypes.func.isRequired,
  canUndo: PropTypes.bool,
  canRedo: PropTypes.bool
};
const options = [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ];
const ButtonsPanel = ({handleRedoButtonClick,
                       handleUndoButtonClick,
                       doWinAnimation,
                       canUndo,
                       canRedo,
                       handleDealButtonClick,
                       flipAtTimeValue,
                   	   flipAtTimeOnHandler}) => (
  <div>
    <GameButton className={'btn btn-sucess'}
                float={'left'}
                disabled={canRedo}
                onClick={handleRedoButtonClick}>
      {'Redo!'}
    </GameButton>
    <GameButton className={'btn btn-sucess'}
                float={'left'}
                disabled={canUndo}
                onClick={handleUndoButtonClick}>
      {'Undo!'}
    </GameButton>
    <div className="section">
      <Select
          options={options}
          clearable={false}
          onChange={flipAtTimeOnHandler}
          value={flipAtTimeValue}
          multi={false}
          matchPos= {'any'}
          matchValue={true}
          matchLabel={true}
          />
      </div>
    {/* <GameButton className={'btn btn-sucess'}
                float={'left'}
                onClick={doWinAnimation}>
      {'Win!'}
    </GameButton> */}
    <GameButton className={'btn btn-primary'}
                float={'right'}
                onClick={handleDealButtonClick}>
      {'Deal!'}
    </GameButton>
  </div>
);

ButtonsPanel.propTypes = propTypes;
export default ButtonsPanel;
