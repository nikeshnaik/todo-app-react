import { useState } from "react"
import styles from "./App.module.css"
import ToDoLayout from '../TodoApp/layout/TodoLayout'

function ToDoApp() {

    const [state, setState] = useState(
        {
            theme: 'light',
            todolist: [
                {
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {
                    status: 'active',
                    description: 'pick up groceries'
                },
                {
                    status: 'completed',
                    description: 'workout at 7am'
                },
                {
                    status: 'active',
                    description: "Errand at 10pm"
                },
                {
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {
                    status: 'active',
                    description: 'pick up groceries'
                },
                {
                    status: 'completed',
                    description: 'workout at 7am'
                },
                {
                    status: 'active',
                    description: "Errand at 10pm"
                },
                {
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {
                    status: 'active',
                    description: "Errand at 10pm"
                }

            ],
            filter: 'active',
            device: "desktop"
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