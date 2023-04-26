import React, { useState } from 'react';
import style from './Notifications.module.scss';
import { Link } from 'react-router-dom';

function NotificationDetails({ title, description, id, image}) {
  return (
    <div className={style.notification}>
      <div className={style.notificationDetails}>
        <Link to={`notification/${id}`}>
          <h2>{title}</h2>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default NotificationDetails;
