import { useId, useInsertionEffect, useState } from "react"
import styles from "./App.module.css"
import ToDoLayout from '../TodoApp/layout/TodoLayout'
import { v4 as uuidv4 } from 'uuid';

function ToDoApp() {


    const [state, setState] = useState(
        {
            theme: 'light',
            todolist: [
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'pick up groceries'
                },
                {
                    id: uuidv4(),
                    status: 'completed',
                    description: 'workout at 7am'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: "Errand at 10pm"
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'pick up groceries'
                },
                {
                    id: uuidv4(),
                    status: 'completed',
                    description: 'workout at 7am'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: "Errand at 10pm"
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'jog for 10mins'
                },
                {

                    id: uuidv4(),
                    status: 'active',
                    description: "Errand at 10pm"
                }

            ],
            filter: 'active',
            device: "desktop"
        }
    )


    document.body.classList.toggle(state.theme)

    return (
        <div className={`${styles.app} ${state.theme === 'dark' ? styles.dark_theme : styles.light_theme}`}>
            <ToDoLayout state={state} setState={setState}>
            </ToDoLayout>
        </div>
    )
}

export default ToDoApp