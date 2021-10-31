import React, { Component, Fragment } from 'react';
import Topbar from '@momentum-ui/react/es/Topbar';
import TopbarMobile from '@momentum-ui/react/es/TopbarMobile';
import TopbarNav from '@momentum-ui/react/es/TopbarNav';
import TopbarRight from '@momentum-ui/react/es/TopbarRight';

class AppHeader extends Component {
  render() {
    const getAvatar = () => {
      const number = Math.floor(Math.random() * 101);
      const gender = Math.random() >= 0.5 ? 'women' : 'men';
      return `https://randomuser.me/api/portraits/${gender}/${number}.jpg`;
    };
    const navItems = (
      <Fragment>
        {/* <ListItem
          customRefProp="innerRef"
          customAnchorNode={
            <NavLink to="/team" activeClassName={'active'}>
              Team
            </NavLink>
          }
          style={{width: "100%"}}
        /> */}
      </Fragment>
    );

    const topbarRight = (
      <div className="md-top-bar__user">
        {/* <Popover
          direction="bottom-right"
          content={topBarPopoverContent}
          popoverTrigger="Click"
          closeOnClick> */}
          <button
            className="md-avatar md-button--none"
            aria-haspopup="true"
          >
            <img
              className="user-image"
              src={getAvatar()}
              alt="user"
            />
          </button>
        {/*</Popover> */}
      </div>
    );

    return (
      <Fragment>
        <Topbar
          title="ToDo"
          color="light"
          anchor="/"
          fixed>
          <TopbarNav>{navItems}</TopbarNav>
          <TopbarRight>{topbarRight}</TopbarRight>
          <TopbarMobile>
            {navItems}
            {/* <ListItemSeparator /> */}
          </TopbarMobile>
        </Topbar>
      </Fragment>
    );
  }
}




export default AppHeader;
