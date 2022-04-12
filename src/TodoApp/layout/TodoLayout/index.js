import { ReactComponent as ThemeMoonIcon } from '../../../assets/icon-moon.svg'
import { ReactComponent as ThemeSunIcon } from '../../../assets/icon-sun.svg'

import styles from './style.module.css'

function ToDoLayout(props) {


    return (
        <div className={styles.container}>
            <div className={styles.layout_header}>
                <h2>TODO</h2>
                <div className={styles.theme_icon}>
                    {props.state.theme === "dark" ? <ThemeMoonIcon /> : <ThemeSunIcon />}
                </div>
            </div>
            <div className={styles.inputBox}>
                <input type="radio" className={styles.inputRadio} checked={false} />
                <input type="text" className={styles.inputText} placeholder="Currently typing" />
            </div>
        </div>
    )

}

export default ToDoLayout;