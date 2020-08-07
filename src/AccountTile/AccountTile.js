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

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  StyledAccountTile,
  StyledContentWrapper,
  StyledAvatarContainer,
  StyledIconWrapper,
  StyledTextWrapper,
  StyledP
} from './AccountTile-styled';

import Avatar from '../Avatar';
import Tooltip from '../Tooltip';
import { MenuItem } from '../Menu';
import Popover from '../Popover';
import Menu from '../Menu';

import HandleVerticalIcon from 'calcite-ui-icons-react/HandleVerticalIcon';
import CheckCircleIcon from 'calcite-ui-icons-react/CheckCircleIcon';
import ExclamationMarkTriangleIcon from 'calcite-ui-icons-react/ExclamationMarkTriangleIcon';

const AccountTile = ({
  actions,
  user,
  isAuthenticated, // accountmanagerstate object does account have token
  orgName, // from same object
  userThumbnail, // object {url: null, fallBack: 'JH'}
  orgThumbnail,
  width,
  expiredText,
  authenticatedText
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const fullName = `${user.firstName} ${user.lastName}`;
  const close = () => {
    isOpen && setIsOpen(false);
  };

  const toggleIsOpen = event => {
    if (event.key === 'Enter' || event.key == null) {
      setIsOpen(!isOpen);
    }
  };

  const menuItemHandler = (func, event = null) => {
    if (event && event.key) {
      if (event.key === 'Enter') {
        func();
      } else {
        return;
      }
    } else {
      func();
    }
    setIsOpen(!isOpen);
  };

  const menuItems = actions.map(item => (
    <MenuItem
      key={item.label}
      tabIndex="0"
      onClick={() => {
        menuItemHandler(item.onClick);
      }}
      onKeyPress={event => {
        menuItemHandler(item.onClick, event);
      }}
    >
      {item.label}
    </MenuItem>
  ));

  let authStatusIndicator;
  switch (isAuthenticated) {
    case true:
      authStatusIndicator = (
        <Tooltip
          title={authenticatedText}
          placement="top"
          targetWrapperStyle={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <CheckCircleIcon color="green" size={16} alt={authenticatedText} />
        </Tooltip>
      );
      break;
    default:
      authStatusIndicator = (
        <Tooltip
          title={expiredText}
          placement="top"
          targetWrapperStyle={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <ExclamationMarkTriangleIcon size={16} alt={expiredText} />
        </Tooltip>
      );
  }

  return (
    <Popover
      open={isOpen}
      onRequestClose={close}
      targetContainerStyles={{
        width: width,
        display: 'block'
      }}
      placement="bottom-end"
      targetEl={
        // ---------- Account Tile ----------
        <StyledAccountTile
          onClick={toggleIsOpen}
          onKeyPress={toggleIsOpen}
          open={isOpen}
          tabIndex="0"
        >
          <StyledContentWrapper>
            <StyledAvatarContainer>
              <Avatar src={userThumbnail.url} style={{ width: 60, height: 60 }}>
                {!userThumbnail.url && userThumbnail.letters}
              </Avatar>
              {orgName && orgThumbnail && (
                <Avatar
                  src={orgThumbnail.url}
                  style={{ width: 30, height: 30 }}
                >
                  {!orgThumbnail.url && orgThumbnail.letters}
                </Avatar>
              )}
            </StyledAvatarContainer>
            <StyledTextWrapper>
              {orgName && (
                <StyledP title={orgName} demi>
                  {orgName}
                </StyledP>
              )}
              <StyledP title={user.fullName || fullName}>
                {user.fullName || fullName}
              </StyledP>
              <StyledP title={user.username} small>
                {user.username}
              </StyledP>
            </StyledTextWrapper>
          </StyledContentWrapper>
          <StyledIconWrapper>
            {authStatusIndicator}
            {actions.length !== 0 && <HandleVerticalIcon scale={16} />}
          </StyledIconWrapper>
        </StyledAccountTile>
      }
    >
      {/* Account item dropdown menu */}
      <Menu>{actions.length !== 0 && menuItems}</Menu>
    </Popover>
  );
};

AccountTile.propTypes = {
  /** Actions to be included in the dropdown. Each action should describe a label and an onClick method. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  /** The ArcGIS user object.*/
  user: PropTypes.object.isRequired,
  /** Is the user currently logged in or has their authentication expired? */
  isAuthenticated: PropTypes.bool,
  /** Name of the user's organization. */
  orgName: PropTypes.string,
  /** Style prop to define the width of the tile.*/
  width: PropTypes.string,
  /** Text to show when the account is authenticated.*/
  authenticatedText: PropTypes.string,
  /** Text to show when the account has expired (is not authenticated).*/
  expiredText: PropTypes.string,
  /** Object containing thumbnail url and fallback letters for the avatar. If url is falsy, the avatar will show letters instead.*/
  userThumbnail: PropTypes.shape({
    url: PropTypes.string,
    letters: PropTypes.string
  }).isRequired,
  /** Object containing thumbnail url and fallback letters for the avatar. If url is falsy, the avatar will show letters instead. If orgThumbnail or orgName are not given, no org avatar will be shown.*/
  orgThumbnail: PropTypes.shape({
    url: PropTypes.string,
    letters: PropTypes.string
  })
};

AccountTile.defaultProps = {
  actions: [],
  isAuthenticated: false,
  width: '100%',
  authenticatedText: 'Signed in',
  expiredText: 'Session expired'
};

AccountTile.displayName = 'AccountTile';

export default AccountTile;
