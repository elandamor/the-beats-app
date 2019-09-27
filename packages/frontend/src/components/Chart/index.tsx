import theme from '@app/theme';
import React, { FC } from 'react';
import ReactApexChart from 'react-apexcharts';
import Box from '../Box';

interface IChartProps {
  className?: string;
  size?: number;
}

/**
 * @render react
 * @name Chart component
 * @description Chart component.
 * @example
 * <Chart />
 */

const Chart: FC<IChartProps> = ({ size }) => {
  const dirtySeries = [
    {
      amount: 2,
      color: theme.colors.intent.danger,
    },
    {
      amount: 1,
      color: theme.colors.intent.warning,
    },
    {
      amount: 1,
      color: theme.colors.intent.info,
    },
    {
      amount: 1,
      color: theme.colors.white,
    },
  ];

  const seriesTotal = dirtySeries.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.amount;
  }, 0);

  let previousValue = 0;

  const cleanSeries = dirtySeries.map(({ amount, color }, index) => {
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

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

// const DEFAULT_COLOR = '#040404';
// class RadialChart extends Component {
//   state = {}

//   componentDidMount() {
//     // For initial animation
//     setTimeout(() => {
//       this.setState({ setStrokeLength: true });
//     });
//   }

//   render() {
//     const { setStrokeLength } = this.state;
//     const {
//       radius,
//       progress,
//       strokeWidth,
//       dimension,
//       color
//     } = this.props;
//     const circleRadius = Math.min(radius, 85);
//     const circumference = 2 * 3.14 * circleRadius;
//     const strokeLength = setStrokeLength ? circumference / 100 * progress : 0;

//     return (
//       <div
//         className={classNames('radial-chart', {
//           'no-progress': strokeLength === 0
//         })}
//       >
//         <svg viewBox="0 0 180 180" width={dimension} height={dimension}>
//           <circle
//             className="radial-chart-total"
//             stroke={color}
//             strokeWidth={strokeWidth}
//             fill="none"
//             cx="90"
//             cy="90"
//             r={circleRadius}
//           />
//           <circle
//             className="radial-chart-progress"
//             stroke={color}
//             strokeWidth={strokeWidth}
//             strokeDasharray={`${strokeLength},${circumference}`}
//             strokeLinecap="round"
//             fill="none"
//             cx="90"
//             cy="90"
//             r={circleRadius}
//           />
//         </svg>
//       </div>
//     );
//   }
// }

// RadialChart.defaultProps = {
//   radius: 80,
//   progress: 100,
//   strokeWidth: 10,
//   dimension: 180,
//   color: DEFAULT_COLOR
// };

// RadialChart.propTypes = {
//   className: PropTypes.string,
//   radius: PropTypes.number,
//   strokeWidth: PropTypes.number,
//   color: PropTypes.string,
//   progress: PropTypes.number,
//   dimension: PropTypes.number
// };

// export default RadialChart;

{
  /* <svg width="600" height="600">
    <defs>
        <!-- masks out the area outside and inside the inner bevel region -->
        <mask id="innerbevel">
            <rect width="100%" height="100%" fill="black"/>
            <circle cx="0" cy="0" r="235" fill="white"/>
        </mask>
        <!-- cuts hole in centre of graph -->
        <mask id="centrehole">
            <rect x="-100%" y="-100%" width="200%" height="200%" fill="white"/>
            <circle cx="0" cy="0" r="195" fill="black"/>
        </mask>
    </defs>

    <!-- Graph is drawn centred at (0,0). The transform moves it into middle of SVG. -->
    <!-- The mask forms the hole in the centre. -->
    <g transform="translate(300,300)" mask="url(#centrehole)">
        <!-- outer bevel -->
        <g>
            <!-- light blue segment -->
            <path d="M0 0 0 -275 A 275 275 0 0 1 0 275" fill="#89e4d2"/>
            <!-- red segment -->
            <path d="M0 0 0 275 A 275 275 0 0 1 -275 0" fill="#f394a2"/>
            <!-- blue segment -->
            <path d="M0 0 -275 0 A 275 275 0 0 1 0 -275" fill="#a3a4ff"/>

            <!-- light blue rounded end -->
            <circle cx="0" cy="235" r="40" fill="#89e4d2"/>
            <!-- red rounded end -->
            <circle cx="-235" cy="0" r="40" fill="#f394a2"/>
            <!-- blue rounded end -->
            <circle cx="0" cy="-235" r="40" fill="#a3a4ff"/>
        </g>
        <!-- inner bevel - same as above but with different colours and is masked -->
        <g mask="url(#innerbevel)">
            <!-- light blue segment -->
            <path d="M0 0 0 -275 A 275 275 0 0 1 0 275" fill="#5bc8b7"/>
            <!-- red segment -->
            <path d="M0 0 0 275 A 275 275 0 0 1 -275 0" fill="#ef6974"/>
            <!-- blue segment -->
            <path d="M0 0 -275 0 A 275 275 0 0 1 0 -275" fill="#6b5dff"/>

            <!-- light blue rounded end -->
            <circle cx="0" cy="235" r="40" fill="#5bc8b7"/>
            <!-- red rounded end -->
            <circle cx="-235" cy="0" r="40" fill="#ef6974"/>
            <!-- blue rounded end -->
            <circle cx="0" cy="-235" r="40" fill="#6b5dff"/>
        </g>
    </g>

</svg> */
}
