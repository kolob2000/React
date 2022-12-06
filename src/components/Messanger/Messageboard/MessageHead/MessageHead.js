import styles from './messagehead.module.scss'
import { useSelector } from 'react-redux'

export default () => {
    const name = useSelector((state) => state.profiler.name)
    const handleFullScreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen().catch((e) => console.log(e?.message))
        } else {
            document.documentElement
                .requestFullscreen()
                .catch((e) => console.log(e?.message))
        }
    }
    return (
        <div className={styles.message_head}>
            <div className={styles.head_calls}>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill=""
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22.2037 18.25L19.6637 17.96C19.0537 17.89 18.4537 18.1 18.0237 18.53L16.1837 20.37C13.3537 18.93 11.0337 16.62 9.59367 13.78L11.4437 11.93C11.8737 11.5 12.0837 10.9 12.0137 10.29L11.7237 7.77C11.6037 6.76 10.7537 6 9.73367 6H8.00367C6.87367 6 5.93367 6.94 6.00367 8.07C6.53367 16.61 13.3637 23.43 21.8937 23.96C23.0237 24.03 23.9637 23.09 23.9637 21.96V20.23C23.9737 19.22 23.2137 18.37 22.2037 18.25Z"
                            fill=""
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill=""
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 13.5V10C20 9.45 19.55 9 19 9H7C6.45 9 6 9.45 6 10V20C6 20.55 6.45 21 7 21H19C19.55 21 20 20.55 20 20V16.5L22.29 18.79C22.92 19.42 24 18.97 24 18.08V11.91C24 11.02 22.92 10.57 22.29 11.2L20 13.5Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            <div className={styles.head_name}>
                <button>
                    <span></span>
                    {name}
                </button>
            </div>
            <div className={styles.head_menu}>
                <button onClick={handleFullScreen}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill=""
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8 2H8.48528L5.77817 4.70711L4.70711 5.77817L4.70652 5.77877L2 8.48528V8C2 7.45 1.55 7 1 7C0.45 7 0 7.45 0 8V11C0 11.55 0.45 12 1 12H4C4.55 12 5 11.55 5 11C5 10.45 4.55 10 4 10H3.31371L6.12132 7.19239L7.19239 6.12132L7.19266 6.12105L10 3.31371V4C10 4.55 10.45 5 11 5C11.55 5 12 4.55 12 4V1C12 0.45 11.55 0 11 0H8C7.45 0 7 0.45 7 1C7 1.55 7.45 2 8 2Z"
                            fill=""
                        />
                    </svg>
                </button>
                <button>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill=""
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 11C16.1 11 17 10.1 17 9C17 7.9 16.1 7 15 7C13.9 7 13 7.9 13 9C13 10.1 13.9 11 15 11ZM15 13C13.9 13 13 13.9 13 15C13 16.1 13.9 17 15 17C16.1 17 17 16.1 17 15C17 13.9 16.1 13 15 13ZM15 19C13.9 19 13 19.9 13 21C13 22.1 13.9 23 15 23C16.1 23 17 22.1 17 21C17 19.9 16.1 19 15 19Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
