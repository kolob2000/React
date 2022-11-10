import {useState} from "react";
import {NavLink} from "react-router-dom";

export default ({chatItem, roomId}) => {

    return <NavLink to={`/messanger/${roomId}`} className="chat_item">
        <div className="chat_photo">
            <img src={chatItem.img} alt="" className="chat_img"/>
            <div className={`status_light status_${chatItem.status}`}></div>
        </div>
        <div className="chat_info">
            <div className="chat_info_top">
                <div className="info_status">{chatItem.status}</div>
                <div className="last_message">{chatItem.lastMessageTime}</div>
            </div>
            <p className="chat_name">{chatItem.chatName}</p>
            <p className="last_message_text">{chatItem.lastMessageText}</p>
        </div>
    </NavLink>
}
