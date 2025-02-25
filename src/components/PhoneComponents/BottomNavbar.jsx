import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserFriends, faPlus, faMessage, fa9, faUser } from '@fortawesome/free-solid-svg-icons';

function BottomNavbar() {
  return (
      <div className="bottom-navbar">
        <div className="nav-item">
          <FontAwesomeIcon icon={faHouse} className="icon active" />
          <span className="item-name active">Home page</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUserFriends} className="icon" />
          <span className="item-name">Friend</span>
        </div>
        <div className="nav-item-home">
          <FontAwesomeIcon icon={faPlus} className="plus" />
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={fa9} className="notification" />
          <FontAwesomeIcon icon={faMessage} className="icon" />
          <span className="item-name">Mailbox</span>
        </div>
        <div className="nav-item">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="item-name">File</span>
        </div>
      </div>
  );
}

export default BottomNavbar;
