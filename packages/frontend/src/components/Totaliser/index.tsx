import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import Box, { IBoxProps } from '../Box';

interface ITotaliserProps extends IBoxProps {
  size?: number;
  series: {
    amount: number;
    color: string;
  }[];
}

/**
 * @render react
 * @name Totaliser component
 * @description Totaliser component.
 * @example
 * <Totaliser series={[{ amount: 4, color: '#000000' }]} />
 */

const Totaliser: FC<ITotaliserProps> = ({
  series: dirtySeries,
  size,
  ...rest
}) => {
  if (!dirtySeries) {
    return null;
  }

  const seriesTotal = dirtySeries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  // Sort the series by amount, highest to lowest
  const sortedSeries = dirtySeries.sort((a, b) => {
    return b.amount - a.amount;
  });

  let previousValue = 0;

  const cleanSeries = sortedSeries.map(({ amount, color }, index) => {
    const currentValue = previousValue;
    const lineCapOffset = 2.2; // Degrees added by rounded lineCap that have to be removed for accurate visual
    const maxTotaliserAngle = 270; // degrees - 75% of 360deg
    const angleDistance =
      (amount / seriesTotal) * maxTotaliserAngle - lineCapOffset;

    const startAngle = previousValue;
    const endAngle = startAngle + angleDistance;

    const formattedSeries = {
      amount,
      options: {
        plotOptions: {
          radialBar: {
            startAngle,
            endAngle,
            dataLabels: {
              show: false,
            },
            track: {
              background: 'rgba(0,0,0,0)',
            },
          },
        },
        stroke: {
          lineCap: 'round',
        },
        fill: {
          colors: [color],
          opacity: amount > 0 ? 1 : 0,
        },
      },
      zIndex: dirtySeries.length - ++index,
    };

    previousValue = currentValue + angleDistance;

    return formattedSeries;
  });

  return (
    <Box {...rest}>
      {cleanSeries.map((series, index) => (
        <Box
          key={index}
          position="absolute"
          zIndex={series.zIndex}
          width="100%"
        >
          <Chart
            options={series.options}
            // Set to 100% of the chart angle range
            series={[100]}
            type="radialBar"
            height={size}
          />
        </Box>
      ))}
    </Box>
  );
};

Totaliser.defaultProps = {
  size: 320,
};

export default Totaliser;
