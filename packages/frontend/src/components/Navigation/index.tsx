import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { StyledSystemProps } from 'styled-system';
// Styles
import Wrapper from './styles';
import Flex from '../Flex';

type Link = {
  className?: string;
  exact?: boolean;
  href: string;
  icon?: React.ReactNode;
  label: string;
};

export interface INavigationProps extends StyledSystemProps {
  className?: string;
  links: Link[];
}

/**
 * @render react
 * @name Navigation component
 * @description Main navigation for an app.
 * @example
 * <Navigation
 *    links={[
 *      { exact: true, label: 'Home', href: '/' },
 *      { label: 'About', href: '/about' }
 *      { label: 'Contact', href: '/contact' },
 *    ]}
 * />
 */

const Navigation: FC<INavigationProps> = ({ className, height, links }) => (
  <Wrapper className={classNames('c-nav', className)}>
    <Flex as="ul" m="0" p="0" alignItems="center" height={height}>
      {links.map((link: Link, index: number) => (
        <Flex
          as="li"
          key={index}
          flex="1"
          height={height}
          alignItems="center"
          justifyContent="center"
        >
          <NavLink
            exact={link.exact}
            activeClassName="-active"
            className={classNames('a-nav-item', link.className)}
            to={link.href}
          >
            <Flex height={height} alignItems="center" justifyContent="center">
              {link.icon}
              {link.label}
            </Flex>
          </NavLink>
        </Flex>
      ))}
    </Flex>
  </Wrapper>
);

export default Navigation;
