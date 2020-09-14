// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

// styled-components
import styled, { css } from 'styled-components';

// Utils, common elements
import { clearfix, fontSize } from '../utils/helpers';

// Calcite theme and Esri colors
import { CalciteTheme as theme } from '../CalciteThemeProvider';

// Calcite components
import { CalciteA } from '../Elements';

// Icons

// Third party libraries

const StyledTopNavContainer = styled.header`
  background-color: ${props => props.theme.palette.white};
  border-bottom: 1px solid ${props => props.theme.palette.lightestGray};
  position: relative;
  display: flex;
  width: 100%;
`;
StyledTopNavContainer.defaultProps = { theme };

const StyledTopNav = styled.header`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.palette.white};
  width: ${props => props.contentWidth || props.theme.contentWidth};
  max-width: ${props => props.contentMaxWidth || props.theme.contentMaxWidth};
  padding: 0 1rem;
  margin: 0 auto;
  z-index: 100;
  ${clearfix()};
`;
StyledTopNav.defaultProps = { theme };

const StyledTopNavActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding-left: ${props => props.theme.baseline};

  html[dir='rtl'] & {
    margin-left: initial;
    margin-right: auto;
    padding-left: initial;
    padding-right: ${props => props.theme.baseline};
  }

  > a,
  > button {
    margin-left: 0.75em;

    &:first-child {
      margin-left: 0;
    }
  }
`;
StyledTopNavActions.defaultProps = { theme };

const StyledTopNavBrandLink = styled.a`
  padding-right: ${props => props.theme.baseline};
  display: inline-flex;
  align-items: center;
  text-decoration: none;

  html[dir='rtl'] & {
    padding-right: initial;
    padding-left: ${props => props.theme.baseline};
  }
`;
StyledTopNavBrandLink.defaultProps = { theme };

const StyledTopNavBrandImg = styled.img`
  height: 30px;
`;
StyledTopNavBrandImg.defaultProps = { theme };

const StyledTopNavLink = styled(CalciteA)`
  ${fontSize(0)};
  color: ${props => props.theme.palette.darkGray};
  padding-top: 1.1625rem;
  padding-bottom: calc(1.1625rem - 4px);
  border-bottom: 4px solid transparent;
  line-height: 1.5rem;
  display: inline-flex;
  align-items: center;
  margin-left: 0.75em;
  font-weight: 300;

  html[dir='rtl'] & {
    margin-left: initial;
    margin-right: 0.75em;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.palette.blue};
    border-bottom-color: ${props => props.theme.palette.blue};
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  ${props =>
    props.active &&
    css`
      color: ${props => props.theme.palette.offBlack};
      border-bottom-color: ${props.theme.palette.blue};
    `};

  &.active,
  .active > & {
    color: ${props => props.theme.palette.offBlack};
    border-bottom-color: ${props => props.theme.palette.blue};
  }
`;
StyledTopNavLink.defaultProps = { theme };

const StyledTopNavList = styled.nav`
  padding: 0;
  flex: 1 0 auto;
  margin-left: -0.75em;

  html[dir='rtl'] & {
    margin-left: initial;
    margin-right: -0.75em;
  }

  ${props =>
    props.right &&
    css`
      float: right;

      html[dir='rtl'] & {
        float: left;
      }
    `};
`;
StyledTopNavList.defaultProps = { theme };

const StyledTopNavTitle = styled(CalciteA)`
  margin-right: 1.5rem;
  padding-top: 1.125rem;
  padding-bottom: 1.25rem;
  ${fontSize(1)};
  color: ${props => props.theme.palette.black};

  html[dir='rtl'] & {
    margin-right: initial;
    margin-left: 1.5rem;
  }

  &:hover {
    text-decoration: none;
  }
`;
StyledTopNavTitle.defaultProps = { theme };

export {
  StyledTopNavContainer,
  StyledTopNav,
  StyledTopNavActions,
  StyledTopNavBrandLink,
  StyledTopNavBrandImg,
  StyledTopNavLink,
  StyledTopNavList,
  StyledTopNavTitle
};
