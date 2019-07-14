import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

type Link = {
  className?: string;
  exact?: boolean;
  href: string;
  label: string;
};

interface IProps {
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

const Navigation: FC<IProps> = ({ className, links }) => (
  <Wrapper className={classNames('c-nav', className)}>
    <ul>
      {links.map((link: Link, index: number) => (
        <li key={index}>
          <NavLink
            exact={link.exact}
            activeClassName="-active"
            className={classNames('a-nav-item', link.className)}
            to={link.href}
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </Wrapper>
);

export default Navigation;
