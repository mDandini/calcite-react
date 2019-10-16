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

import React from 'react';
import PropTypes from 'prop-types';

import { TabsContext } from './Tabs';

import { StyledTabNav } from './Tab-styled';

const TabNav = ({ children, ...other }) => {
  // const childrenWithProps = Children.map(children, (child, itemIndex) => {
  //   switch (getChildType(child)) {
  //     case 'TabTitle':
  //       return React.cloneElement(child, {
  //         key: itemIndex,
  //         index: itemIndex,
  //         activeTabIndex,
  //         setActiveTabIndex: (e, itemIndex) => onTabChange(itemIndex),
  //         gray,
  //         transparent,
  //         translucent,
  //         dark
  //       });
  //     default:
  //       return child;
  //   }
  // });

  return (
    <TabsContext.Consumer>
      {({ tabsContext }) => (
        <StyledTabNav
          gray={tabsContext.gray}
          transparent={tabsContext.transparent}
          translucent={tabsContext.translucent}
          dark={tabsContext.dark}
          {...other}
        >
          {children}
        </StyledTabNav>
      )}
    </TabsContext.Consumer>
  );
};

TabNav.propTypes = {
  /** The content of the component; should be a number of TabTitles. */
  children: PropTypes.node
};

TabNav.defaultProps = {
  onTabChange: () => {}
};

TabNav.displayName = 'TabNav';

export default TabNav;
