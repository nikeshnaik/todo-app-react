import { useState } from "react"
import styles from "./App.module.css"
import ToDoLayout from '../TodoApp/layout/TodoLayout'

function ToDoApp() {

    const [state, setState] = useState(
        {
            theme: 'light',
            todolist: [
                {
                    status: 'active/completed',
                    description: 'jog for 10mins'
                },
                {
                    status: 'active/completed',
                    description: 'pick up groceries'
                }

            ],
            filter: 'all/active/completed',
        }
    )


    return (
        <div className={`${styles.app} ${state.theme === 'dark' ? styles.dark_theme : styles.light_theme}`}>
            <ToDoLayout state={state} setState={setState}>
            </ToDoLayout>
        </div>
    )
}

export default ToDoApp