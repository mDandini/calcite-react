import styled, { css } from 'styled-components';
import { CalciteInput } from '../utils/commonElements';
import { fontSize, unitCalc, transition } from '../utils/helpers';
import CloseCircleIcon from '../icons/CloseCircleIcon';
import MagnifyIcon from '../icons/MagnifyIcon';

const StyledCloseCircleIcon = styled(CloseCircleIcon)`
  display: none;
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: 0.55em;
  width: 18px;
  height: 18px;
  fill: ${props => props.theme.palette.lightGray};
  cursor: pointer;

  &:hover {
    fill: ${props => props.theme.palette.darkGray};
  }
`;

const StyledMagnifyIcon = styled(MagnifyIcon)`
  position: absolute;
  bottom: 0.45em;
  left: 0.25em;
  width: 22px;
  height: 22px;
  fill: ${props => props.theme.palette.darkerGray};
`;

const StyledShortcutCharacter = styled.div`
  position: absolute;
  right: ${props => unitCalc(props.theme.baseline, 4, '/')};
  bottom: 0.5em;
  border: 1px solid ${props => props.theme.palette.lighterGray};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  color: ${props => props.theme.palette.lightGray};
  border-radius: 1px;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${StyledMagnifyIcon} {
    ${props =>
      props.minimal &&
      css`
        bottom: 0.55em;
        left: auto;
      `};
  }

  ${StyledCloseCircleIcon} {
    ${props =>
      props.minimal &&
      css`
        bottom: auto;
      `};
  }

  &:hover {
    ${StyledCloseCircleIcon} {
      display: block;
    }
  }

  &:active,
  &:focus,
  &:focus-within {
    ${StyledShortcutCharacter} {
      display: none;
    }
  }
`;

const StyledSearchInputWrapper = styled.div`
  position: relative;
  flex: 1 0 50px;
`;

const StyledSearch = CalciteInput.extend`
  padding-left: ${props => unitCalc(props.theme.baseline, 1.2, '*')};
  padding-right: ${props => props.theme.baseline};
  background: transparent;

  ${props =>
    props.minimal &&
    css`
      height: 2.35rem;
      border-bottom: 2px solid ${props => props.theme.palette.lighterGray};
      ${fontSize(0)};

      &:focus {
        box-shadow: none;
        border-bottom-color: ${props => props.theme.palette.blue};
      }
    `};
`;

const ManagerStyle = {
  width: '100%'
};

const PopperStyle = {
  transition: `opacity ${transition()}`,
  zIndex: 2000
};

export {
  StyledSearchContainer,
  StyledSearchInputWrapper,
  StyledSearch,
  StyledShortcutCharacter,
  StyledCloseCircleIcon,
  StyledMagnifyIcon,
  ManagerStyle,
  PopperStyle
};
