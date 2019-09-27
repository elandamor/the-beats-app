import React, { FC } from 'react';
import Chart from 'react-apexcharts';
import Box from '../Box';

interface ITotaliserProps {
  className?: string;
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

const Totaliser: FC<ITotaliserProps> = ({ series: dirtySeries, size }) => {
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
      amount: amount,
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
          colors: [amount > 0 ? color : 'rgba(0,0,0,0)'],
          opacity: 1,
        },
      },
      zIndex: dirtySeries.length - ++index,
    };

    previousValue = currentValue + angleDistance;

    return formattedSeries;
  });

  return (
    <Box>
      {cleanSeries.map((series, index) => (
        <Box key={index} position="absolute" zIndex={series.zIndex}>
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
