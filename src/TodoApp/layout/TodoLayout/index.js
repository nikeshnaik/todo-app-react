import { ReactComponent as ThemeMoonIcon } from '../../../assets/icon-moon.svg'
import { ReactComponent as ThemeSunIcon } from '../../../assets/icon-sun.svg'
import TodoItem from '../../components/TodoItem'

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
                <input type="radio" className={styles.inputRadio} defaultChecked={false} />
                <input type="text" className={styles.inputText} placeholder="Create a new Todo.." />
            </div>

            <div className={styles.todoItemContainer}>

                {props.state.todolist.map((element, idx) => {
                    return <TodoItem key={idx} todoId={idx} status={element.status} description={element.description} edit={true} setState={props.setState} state={props.state} />
                })}

            </div>
        </div>
    )

}

export default ToDoLayout;


// todolist: [
//     {
//         status: 'active/completed',
//         description: 'jog for 10mins'
//     },
//     {
//         status: 'active/completed',
//         description: 'pick up groceries'
//     }

// ],