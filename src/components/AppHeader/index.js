import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Button from '@momentum-ui/react/es/Button';
import List from '@momentum-ui/react/es/List';
import ListItem from '@momentum-ui/react/es/ListItem';
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

AppHeader.propTypes = {
  actions: PropTypes.object.isRequired,
};




export default AppHeader;
