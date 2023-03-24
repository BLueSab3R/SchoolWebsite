import { useParams } from 'react-router-dom';
import { newsList } from './NotificationData';
import style from './Notifications.module.scss';


function NotificationsElem (){
    const Params = useParams(); 
    const notification = (newsList[Params.id - 1]);
    console.log(notification);
    return(
        <div className={style.notificationDetails}>
            <h1>
                {Params.id}
            </h1>
            <h2>
                {notification.content}
            </h2>
        </div>
    )
} 

export default NotificationsElem