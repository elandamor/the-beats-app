import React from 'react';
import styled from 'styled-components';
import ScrollView, { IScrollViewProps } from '../ScrollView';

interface IPageProps extends IScrollViewProps {
  children: React.ReactNode;
}

/**
 * @render react
 * @name Page component
 * @description Page component.
 * @example
 * <Page />
 */

const Page = styled(ScrollView)<IPageProps>``;

export default Page;
