import React from 'react';
import Card from '@material-ui/core/Card';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { flexbox } from '@material-ui/system';

class Header extends React.Component {
  render() {
    return (
      <Card style={{width: '80%', height: '60px',backgroundColor: "white",margin:'50px'}}>
        <div style={{display: "flex",float: 'right',marginTop:'10px',marginRight: '10px'}}>
        <NotificationsIcon style={{color: '#5e7d31', marginRight: '80px',marginTop:'5px'}}/>
        <span style={{color: "#b4b4b4", marginTop: '10px', marginRight: '10px'}}>
          Abdul kowasi
        </span>
        <Avatar style={{border: "flex"}}alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
      </Card>
    );

  }
}

export default Header;