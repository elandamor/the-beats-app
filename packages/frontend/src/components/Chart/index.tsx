import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '../Box';

interface IChartProps {
  className?: string;
  size?: number;
  series: {
    amount: number;
    color: string;
  }[];
}

/**
 * @render react
 * @name Chart component
 * @description Chart component.
 * @example
 * <Chart />
 */

const Chart: FC<IChartProps> = ({ series: dirtySeries, size }) => {
  if (!dirtySeries) {
    return null;
  }

  const seriesTotal = dirtySeries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  let previousValue = 0;

  // Sort the series by amount, highest to lowest
  const sortedSeries = dirtySeries.sort((a, b) => {
    return b.amount - a.amount;
  });

  const cleanSeries = sortedSeries.map(({ amount, color }, index) => {
    const currentValue = previousValue;
    const lineCapOffset = 2.2; // Degrees added by rounded lineCap that have to be removed for accurate visual
    const angleDistance = (amount / seriesTotal) * 270 - lineCapOffset;

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
          <ReactApexChart
            options={series.options}
            series={[100]}
            type="radialBar"
            height={size}
          />
        </Box>
      ))}
    </Box>
  );
};

Chart.defaultProps = {
  size: 320,
};

export default Chart;
