import classNames from 'classnames';
import React, { FC } from 'react';
// @ts-ignore
import { ArcSeries, XYPlot } from 'react-vis';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Totaliser');

interface ITotaliserProps {
  className?: string;
}

/**
 * @render react
 * @name Totaliser component
 * @description Totaliser component.
 * @example
 * <Totaliser />
 */

const Totaliser: FC<ITotaliserProps> = ({ className }) => {
  const PI = Math.PI;

  const series = [4, 3, 2, 1];
  const total = series.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );

  function updateData() {
    const computeRadian = (value: number) => {
      return ((value / total) * 6 * PI) / 4;
    };

    const newData = [
      {
        angle0: 0,
        angle: computeRadian(series[0]),
        radius: 1,
        radius0: 0.75,
        color: 'red',
      },
      {
        angle0: computeRadian(series[0]),
        angle: computeRadian(series[0] + series[1]),
        radius: 1,
        radius0: 0.75,
        color: 'yellow',
      },
      {
        angle0: computeRadian(series[0] + series[1]),
        angle: computeRadian(series[0] + series[1] + series[2]),
        radius: 1,
        radius0: 0.75,
        color: 'blue',
      },
      {
        angle0: computeRadian(series[0] + series[1] + series[2]),
        angle: (6 * PI) / 4,
        radius: 1,
        radius0: 0.75,
        color: 'green',
      },
    ];

    return newData;
  }

  const data = updateData();

  return (
    <Wrapper className={classNames('', className)}>
      <XYPlot xDomain={[-2, 2]} yDomain={[-2, 2]} width={320} height={320}>
        <ArcSeries
          animation
          radiusDomain={[0, 1.25]}
          data={data}
          colorType="literal"
        />
      </XYPlot>
    </Wrapper>
  );
};

export default Totaliser;
