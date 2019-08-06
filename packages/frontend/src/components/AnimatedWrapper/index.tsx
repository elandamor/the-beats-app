import styled from 'styled-components';
import { animated } from 'react-spring';
import Box from '../Box';

interface IAnimatedWrapperProps {}

/**
 * @render react
 * @name AnimatedWrapper component
 * @description AnimatedWrapper component.
 * @example
 * <AnimatedWrapper />
 */

const AnimatedWrapper = styled(animated(Box))<IAnimatedWrapperProps>``;

export default AnimatedWrapper;
