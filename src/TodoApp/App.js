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
                    status: 'completed',
                    description: 'Jog around the park 3x'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: '10 minutes meditation'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'Read for 1 hour'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: "Pick up groceries"
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'Complete Todo App on Frontend Mentor'
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: "Long Drive Date"
                },
                {
                    id: uuidv4(),
                    status: 'active',
                    description: 'Todo React App Frontedn Mentor Submit solution'
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


    return (
        <div className={`${styles.app} ${state.theme === 'dark' ? styles.dark_theme : styles.light_theme}`}>
            <ToDoLayout state={state} setState={setState}>
            </ToDoLayout>
        </div>
    )
}

export default ToDoApp