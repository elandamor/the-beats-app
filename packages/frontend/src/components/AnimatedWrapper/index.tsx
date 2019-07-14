import styled from 'styled-components';
import { animated } from 'react-spring';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('AnimatedWrapper');

interface IAnimatedWrapperProps {}

/**
 * @render react
 * @name AnimatedWrapper component
 * @description AnimatedWrapper component.
 * @example
 * <AnimatedWrapper />
 */

const AnimatedWrapper = styled(animated.div)<IAnimatedWrapperProps>``;

export default AnimatedWrapper;
