import React, { FC, useState } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { Navigation, Track, Tracks } from './styles';
import Button from '../Button';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('MultiStep');

interface IProps {
  className?: string;
  doneText?: string;
  onDone?: () => void;
  showNavigation?: boolean;
  showNavigationTop?: boolean;
  steps: {
    name: string;
    component: React.ReactNode;
  }[];
  verticalTrack?: boolean;
}

/**
 * @render react
 * @name MultiStep component
 * @description MultiStep component.
 * @todo Make code more readable
 * @example
 * <MultiStep
 *    steps={[
 *      { name: 'Name', component: <Step /> },
 *      { name: 'Email', component: <Step /> }
 *    ]}
 * />
 */

const MultiStep: FC<IProps> = ({
  className,
  doneText,
  onDone: handleDone,
  showNavigation,
  showNavigationTop,
  steps,
  verticalTrack = false,
}) => {
  const [styles, setStyles] = useState(getNavStyles(0, steps.length));
  const [compState, setComp] = useState(0);
  const [buttonsState, setButtons] = useState(getButtonsState(0, steps.length));

  const setStepState = (index: number) => {
    setStyles(getNavStyles(index, steps.length));
    setComp(index < steps.length ? index : compState);
    setButtons(getButtonsState(index, steps.length));
  };

  const next = () => setStepState(compState + 1);

  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const handleClick = (event: React.BaseSyntheticEvent) => {
    if (
      event.currentTarget.value === steps.length - 1 &&
      compState === steps.length - 1
    ) {
      setStepState(steps.length);
    } else {
      setStepState(event.currentTarget.value);
    }
  };

  const renderTracks = () => {
    return (
      <Tracks verticalTrack={verticalTrack}>
        {steps.map((_: any, index: number) => (
          <Track
            className={styles[index]}
            onClick={handleClick}
            key={index}
            value={index}
            verticalTrack={verticalTrack}
          >
            <div className="side-nav__wrap">
              <div className="side-nav__circle">
                <div className="side-nav__circle-inner" />
                <div className="side-nav__line" />
              </div>
              <span className="side-nav__page">{steps[index].name}</span>
            </div>
          </Track>
        ))}
      </Tracks>
    );
  };

  const renderNavigation = () => {
    return (
      showNavigation && (
        <Navigation>
          {buttonsState.showPreviousBtn && (
            <Button onClick={() => previous()} text="Previous" />
          )}
          {buttonsState.showNextBtn && (
            <Button onClick={() => next()} text="Next" />
          )}
          {buttonsState.showDoneBtn && (
            <Button
              onClick={() => handleDone && handleDone()}
              text={doneText}
            />
          )}
        </Navigation>
      )
    );
  };

  return (
    <Wrapper className={classNames('c-multiStep', className)}>
      {renderTracks()}
      {showNavigationTop && renderNavigation()}
      {steps[compState].component}
      {!showNavigationTop && renderNavigation()}
    </Wrapper>
  );
};

MultiStep.defaultProps = {
  doneText: 'Done',
  onDone: () => null,
  showNavigation: true,
  showNavigationTop: false,
  verticalTrack: false,
};

const getNavStyles = (index: number, length: number) => {
  let styles = [];

  for (let i = 0; i < length; i++) {
    if (i < index) {
      styles.push('-done');
    } else if (i === index) {
      styles.push('-doing');
    } else {
      styles.push('-todo');
    }
  }

  return styles;
};

const getButtonsState = (index: number, length: number) => {
  if (index > 0 && index < length - 1) {
    return {
      showDoneBtn: false,
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } else if (index === 0) {
    return {
      showDoneBtn: false,
      showPreviousBtn: false,
      showNextBtn: true,
    };
  } else {
    return {
      showDoneBtn: true,
      showPreviousBtn: true,
      showNextBtn: false,
    };
  }
};

export default MultiStep;
