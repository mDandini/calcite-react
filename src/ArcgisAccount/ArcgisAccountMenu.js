// Framework and third-party non-ui
import React from 'react';
import PropTypes from 'prop-types';

// Redux operations and local helpers/utils/modules

// Component specific modules (Component-styled, etc.)
import {
  StyledArcgisAccountMenu,
  StyledArcgisAccountContent,
  StyledArcgisAccountSignInMenu
} from './ArcgisAccount-styled';
import ArcgisAccountContentInfo from './ArcgisAccountContentInfo';
import ArcgisAccountContentMenu from './ArcgisAccountContentMenu';

// App components
import Button from '../Button';

// Third-party components (buttons, icons, etc.)

// JSON

// CSS

const ArcgisAccountMenu = ({
  children,
  user,
  portal,
  avatar,
  switchAccountLabel,
  signOutLabel,
  onRequestSwitchAccount,
  onRequestSignOut,
  ...other
}) => {
  return (
    <StyledArcgisAccountMenu {...other}>
      <StyledArcgisAccountContent>
        <ArcgisAccountContentInfo user={user} portal={portal} avatar={avatar} />
        <ArcgisAccountContentMenu>{children}</ArcgisAccountContentMenu>
      </StyledArcgisAccountContent>
      <StyledArcgisAccountSignInMenu>
        <Button grouped half extraLarge onClick={onRequestSwitchAccount}>
          {switchAccountLabel}
        </Button>
        <Button halo grouped half extraLarge onClick={onRequestSignOut}>
          {signOutLabel}
        </Button>
      </StyledArcgisAccountSignInMenu>
    </StyledArcgisAccountMenu>
  );
};

ArcgisAccountMenu.propTypes = {
  user: PropTypes.object,
  switchAccountLabel: PropTypes.string,
  signOutLabel: PropTypes.string
};

ArcgisAccountMenu.defaultProps = {
  switchAccountLabel: 'Switch Account',
  signOutLabel: 'Sign Out'
};

export default ArcgisAccountMenu;