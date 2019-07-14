import styled, { css } from 'styled-components';
import theme from '../../theme';

interface IWrapperProps {
  readonly?: boolean;
  type: string;
}

const Wrapper = styled.div<IWrapperProps>`
  margin-bottom: ${theme.space[2]}px;
  position: relative;

  .a-checkbox,
  .a-radio {
    border: ${theme.borders[2]} #969696;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 1.25rem;
    margin-right: ${theme.space[1]}px;
    position: relative;
    vertical-align: middle;
    width: 1.25rem;
  }

  .a-checkbox {
    ${({ type }) =>
      type === 'toggle' &&
      css`
        border: none;
        height: 1.25rem;
        width: 2rem;

        &::after,
        &::before {
          content: '';
          top: 0;
          left: 0;
          position: absolute;
        }

        &::before {
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
          background: #dbdbdb;
        }

        &::after {
          width: 1rem;
          height: 1rem;
          margin: 0.15rem;
          border-radius: 50%;
          background: #ffffff;
        }
      `}
  }

  input,
  textarea {
    background: transparent;
    border: ${theme.borders[1]} #aaaaaa;
    border-radius: ${theme.space[1] / 2}px;
    font-size: ${theme.fontSizes[2]}px;
    padding: ${theme.space[2]}px ${theme.space[1] + theme.space[1] / 2}px;
    position: relative;
    width: 100%;
    z-index: 1;

    ${({ type }) =>
      (type === 'checkbox' || type === 'radio') &&
      css`
        top: 0;
        left: 0;
        width: 0;
        height: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        position: absolute;
        visibility: hidden;
      `}

    &:focus,
    &:hover {
      border: ${theme.borders[1]} ${theme.colors.primary};
      outline: none;
    }

    &:focus {
      font-size: ${theme.fontSizes[4]}px;
    }

    &:hover ~ .a-checkbox {
      border-color: #4a4a4a;
    }

    &:hover ~ .a-radio {
      border: ${theme.borders[2]} #4a4a4a;
    }

    &:checked ~ .a-checkbox {
      border-color: ${theme.colors.primary};
      background: ${theme.colors.primary}
        url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=)
        center no-repeat;
      background-size: 75%;

      &::before {
        ${({ type }) =>
          type === 'toggle' &&
          css`
            background: ${theme.colors.success};
            border-color: ${theme.colors.success};
          `}
      }

      &::after {
        ${({ type }) =>
          type === 'toggle' &&
          css`
            left: auto;
            right: 0;
          `}
      }
    }

    &:checked ~ .a-radio {
      border: ${theme.borders[2]} #1785ff;

      &::after {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 40%;
        height: 40%;
        margin: auto;
        position: absolute;
        border-radius: 30%;
        background: #1785ff;
      }
    }
  }

  ${({ readonly }) =>
    readonly &&
    css`
      opacity: 0.38;
      pointer-events: none;
    `}

  &[type='checkbox'],
  &[type='radio'] {
    label {
      align-items: center;
      cursor: pointer;
      display: flex;
    }
  }
`;

export const HelperText = styled.span`
  color: ${({ theme }) =>
    theme.isDark ? theme.colors.whites[8] : theme.colors.blacks[8]};
  display: block;
  font-size: ${theme.fontSizes[0]}px;
  padding: ${theme.space[1] / 2}px ${theme.space[1] + theme.space[1] / 2}px 0
    ${theme.space[1] + theme.space[1] / 2}px;
`;

export default Wrapper;
