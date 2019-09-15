import classNames from 'classnames';
import React, { FC } from 'react';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('Chart');

interface IChartProps {
  className?: string;
  size: number;
}

/**
 * @render react
 * @name Chart component
 * @description Chart component.
 * @example
 * <Chart />
 */

const Chart: FC<IChartProps> = ({ className, size }) => {
  const strokeWidth = 1;

  return (
    <Wrapper className={classNames('', className)}>
      <svg width={size} height={size}>
        <defs>
          {/* <!-- cuts hole in centre of graph --> */}
          <mask id="centrehole">
            <rect x="-100%" y="-100%" width="200%" height="200%" fill="white" />
            <circle cx="0" cy="0" r="195" fill="black" />
          </mask>
        </defs>

        {/* <!-- Graph is drawn centred at (0,0). The transform moves it into middle of SVG. --> */}
        {/* <!-- The mask forms the hole in the centre. --> */}
        <g
          transform={`translate(${size / 2},${size / 2})`}
          mask="url(#centrehole)"
        >
          {/* <!-- inner bevel - same as above but with different colours and is masked --> */}
          <g mask="url(#innerbevel)">
            <circle cx="0" cy="-235" r="40" fill="#5bc8b7" />
            {/* <!-- light blue segment --> */}
            <path d="M0 0 0 -275 A 275 275 0 0 1 0 275" fill="#5bc8b7" />
            {/* <!-- red segment --> */}
            <path d="M0 0 0 275 A 275 275 0 0 1 -275 0" fill="#ef6974" />

            {/* <!-- light blue rounded end --> */}
            <circle cx="0" cy="235" r="40" fill="#5bc8b7" />
            {/* <!-- red rounded end --> */}
            <circle cx="-235" cy="0" r="40" fill="#ef6974" />
          </g>
        </g>
      </svg>
    </Wrapper>
  );
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
