import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { FontSizeProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Chip from '../Chip';
import { KEYBOARD_CODE } from '../../constants';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Chips');

interface IChipsProps extends FontSizeProps {
  className?: string;
  createChipKeys?: number[];
  getChipValue?: Function;
  onAdd?: Function;
  onChange?: Function;
  onRemove?: Function;
  uniqueChips?: boolean;
  value: string[];
}

/**
 * @render react
 * @name Chips component
 * @description Chips component.
 * @example
 * <Chips />
 */

const Chips: FC<IChipsProps> = (props) => {
  const { className, onAdd, onRemove } = props;
  const [state, setState] = useState({
    chips: props.value,
    value: '',
  });

  const addChip = (value: string) => {
    if (props.uniqueChips && state.chips.indexOf(value) !== -1) {
      setState({ ...state, value: '' });
      return;
    }
    const chips = [...state.chips, value];
    setState({ ...state, chips, value: '' });
    onAdd && onAdd(chips);
  };

  const removeChip = (idx: number) => () => {
    const left = state.chips.slice(0, idx);
    const right = state.chips.slice(idx + 1);
    const nextChips = [...left, ...right];
    setState({ ...state, chips: nextChips });
    onRemove && onRemove(nextChips);
  };

  const renderChip = (value: string) => <Chip text={value} />;

  const renderChips = () => {
    return state.chips.map((chip: any, idx: number) => {
      return React.cloneElement(renderChip(chip), {
        onRemove: removeChip(idx),
        fontSize: props.fontSize,
        index: idx,
        key: `chip${idx}`,
        showRemove: true,
      });
    });
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (
      value.indexOf(',') !== -1 &&
      props.createChipKeys &&
      props.createChipKeys.includes(9)
    ) {
      const chips = value
        .split(',')
        .map((val: string) => val.trim())
        .filter((val: string) => val !== '');

      chips.forEach((chip: string) => addChip(chip));
    } else {
      setState({ ...state, value });
    }
  };

  /**
   *
   * @param event Keyboard event
    console.log({
      key: event.key,
      keyCode: event.keyCode,
      altKey: event.altKey,
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
    });
   */
  const onKeyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === KEYBOARD_CODE.ENTER && state.value.trim()) {
      addChip(state.value);
    }

    if (event.keyCode === 8) {
      onBackspace();
    }
  };

  function onBackspace() {
    if (state.value === '' && state.chips.length > 0) {
      const lastChip = state.chips[state.chips.length - 1];
      const nextChips = state.chips.slice(0, -1);

      setState({ ...state, chips: nextChips, value: lastChip });
    }
  }

  const inputProps = {
    value: state.value,
    onChange,
    onKeyUp: onKeyUpHandler,
  };

  return (
    <Wrapper className={classNames('c-chips', className)}>
      {renderChips()}
      <input type="text" {...inputProps} />
    </Wrapper>
  );
};

Chips.defaultProps = {
  createChipKeys: [9],
  uniqueChips: true,
  value: [],
  getChipValue: (item: any) => item,
  onAdd: () => {},
  onChange: () => {},
  onRemove: () => {},
};

export default Chips;
