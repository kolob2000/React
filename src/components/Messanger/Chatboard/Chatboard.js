import './chatboard.scss'

export default () => {
    return <div className="chats">
        <div className="search_wrapper">
            <label htmlFor="message_search">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
                          fill="#C3CAD9"/>
                </svg>
            </label>
            <input type="search" className="message_search" placeholder="Найти в Сообщении" id="message_search"/>

        </div>
        <div className="chats_list">
            <div className="chat_item">
                <div className="chat_photo">
                    <img src="/img/AvatarImage.png" alt="" className="chat_img"/>
                        <div className="status_light status_online"></div>
                </div>
                <div className="chat_info">
                    <div className="chat_info_top">
                        <div className="info_status">online</div>
                        <div className="last_message">12:45</div>
                    </div>
                    <p className="chat_name">name surname</p>
                    <p className="last_message_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="chat_item">
                <div className="chat_photo">
                    <img src="/img/AvatarImage.png" alt="" className="chat_img"/>
                        <div className="status_light status_recently"></div>
                </div>
                <div className="chat_info">
                    <div className="chat_info_top">
                        <div className="info_status">recently</div>
                        <div className="last_message">12:45</div>
                    </div>
                    <p className="chat_name">name surname</p>
                    <p className="last_message_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="chat_item">
                <div className="chat_photo">
                    <img src="/img/AvatarImage.png" alt="" className="chat_img"/>
                        <div className="status_light status_online"></div>
                </div>
                <div className="chat_info">
                    <div className="chat_info_top">
                        <div className="info_status">online</div>
                        <div className="last_message">12:45</div>
                    </div>
                    <p className="chat_name">name surname</p>
                    <p className="last_message_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
            <div className="chat_item">
                <div className="chat_photo">
                    <img src="/img/AvatarImage.png" alt="" className="chat_img"/>
                        <div className="status_light status_offline"></div>
                </div>
                <div className="chat_info">
                    <div className="chat_info_top">
                        <div className="info_status">offline</div>
                        <div className="last_message">12:45</div>
                    </div>
                    <p className="chat_name">name surname</p>
                    <p className="last_message_text">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </div>
            </div>
        </div>
        <div className="chat_menu">
            <button className="chat_menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14" fill="">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M15 6C16.66 6 17.99 4.66 17.99 3C17.99 1.34 16.66 0 15 0C13.34 0 12 1.34 12 3C12 4.66 13.34 6 15 6ZM7 6C8.66 6 9.99 4.66 9.99 3C9.99 1.34 8.66 0 7 0C5.34 0 4 1.34 4 3C4 4.66 5.34 6 7 6ZM7 8C4.67 8 0 9.17 0 11.5V13C0 13.55 0.45 14 1 14H13C13.55 14 14 13.55 14 13V11.5C14 9.17 9.33 8 7 8ZM15 8C14.71 8 14.38 8.02 14.03 8.05C14.05 8.06 14.06 8.08 14.07 8.09C15.21 8.92 16 10.03 16 11.5V13C16 13.35 15.93 13.69 15.82 14H21C21.55 14 22 13.55 22 13V11.5C22 9.17 17.33 8 15 8Z"
                          fill=""/>
                </svg>
            </button>
            <button className="chat_menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM15 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H15C15.55 10 16 10.45 16 11C16 11.55 15.55 12 15 12ZM15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                          fill=""/>
                </svg>
            </button>
            <button className="chat_menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M16.2037 12.25L13.6637 11.96C13.0537 11.89 12.4537 12.1 12.0237 12.53L10.1837 14.37C7.35367 12.93 5.03367 10.62 3.59367 7.78L5.44367 5.93C5.87367 5.5 6.08367 4.9 6.01367 4.29L5.72367 1.77C5.60367 0.76 4.75367 0 3.73367 0H2.00367C0.873674 0 -0.0663265 0.94 0.00367348 2.07C0.533673 10.61 7.36367 17.43 15.8937 17.96C17.0237 18.03 17.9637 17.09 17.9637 15.96V14.23C17.9737 13.22 17.2137 12.37 16.2037 12.25Z"
                          fill=""/>
                </svg>
            </button>
            <button className="chat_menu__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M17.1593 10.98C17.1993 10.66 17.2293 10.34 17.2293 10C17.2293 9.66 17.1993 9.34 17.1593 9.02L19.2693 7.37C19.4593 7.22 19.5093 6.95 19.3893 6.73L17.3893 3.27C17.2693 3.05 16.9993 2.97 16.7793 3.05L14.2893 4.05C13.7693 3.65 13.2093 3.32 12.5993 3.07L12.2193 0.42C12.1893 0.18 11.9793 0 11.7293 0H7.72933C7.47933 0 7.26933 0.18 7.23933 0.42L6.85933 3.07C6.24933 3.32 5.68933 3.66 5.16933 4.05L2.67933 3.05C2.44933 2.96 2.18933 3.05 2.06933 3.27L0.0693316 6.73C-0.0606684 6.95 -0.000668394 7.22 0.189332 7.37L2.29933 9.02C2.25933 9.34 2.22933 9.67 2.22933 10C2.22933 10.33 2.25933 10.66 2.29933 10.98L0.189332 12.63C-0.000668394 12.78 -0.0506684 13.05 0.0693316 13.27L2.06933 16.73C2.18933 16.95 2.45933 17.03 2.67933 16.95L5.16933 15.95C5.68933 16.35 6.24933 16.68 6.85933 16.93L7.23933 19.58C7.26933 19.82 7.47933 20 7.72933 20H11.7293C11.9793 20 12.1893 19.82 12.2193 19.58L12.5993 16.93C13.2093 16.68 13.7693 16.34 14.2893 15.95L16.7793 16.95C17.0093 17.04 17.2693 16.95 17.3893 16.73L19.3893 13.27C19.5093 13.05 19.4593 12.78 19.2693 12.63L17.1593 10.98ZM9.72933 13.5C7.79933 13.5 6.22933 11.93 6.22933 10C6.22933 8.07 7.79933 6.5 9.72933 6.5C11.6593 6.5 13.2293 8.07 13.2293 10C13.2293 11.93 11.6593 13.5 9.72933 13.5Z"
                          fill=""/>
                </svg>
            </button>
        </div>
    </div>
}
