import { ReactComponent as ThemeMoonIcon } from '../../../assets/icon-moon.svg'
import { ReactComponent as ThemeSunIcon } from '../../../assets/icon-sun.svg'
import TodoItem from '../../components/TodoItem'
import { ReactSortable } from "react-sortablejs";

import styles from './style.module.css'
import { useState } from 'react';
import TodoFilter from '../../components/TodoFilter';

function ToDoLayout(props) {

    let [todolist, setTodolist] = useState(props.state.todolist)

    let todoList_filtered = props.state.filter === "all" ? todolist : todolist.filter((element) => element.status === props.state.filter)

    function createTodoItemFromInput(description, status) {

        let newTodo = {
            "status": status,
            "description": description
        }

        props.state.todolist.push(newTodo)
        props.setState({ ...props.state })

        todolist = props.state.todolist
        setTodolist([...todolist])

    }

    function handleInputBox(event) {
        if (event.key === "Enter") {

            let description = event.target.value
            let status = event.currentTarget.firstElementChild.checked ? "completed" : "active"
            createTodoItemFromInput(description, status)

            event.target.value = ""
            event.currentTarget.firstElementChild.checked = false
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.layout_header}>
                <h2>TODO</h2>
                <div className={styles.theme_icon}>
                    {props.state.theme === "dark" ? <ThemeMoonIcon /> : <ThemeSunIcon />}
                </div>
            </div>
            <div className={styles.inputBox} onKeyDown={handleInputBox}>
                <input type="radio" className={styles.inputRadio} defaultChecked={false} />
                <input type="text" className={styles.inputText} placeholder="Create a new Todo.." />
            </div>

            <ReactSortable
                animation={500}
                delayOnTouchStart={true}
                delay={1}
                invertSwap={true}
                direction={"vertical"}

                className={styles.todoItemContainer} list={todolist} setList={setTodolist}>
                {todoList_filtered.map((element, idx) => {

                    return <TodoItem key={idx} status={element.status} description={element.description} edit={true} />

                })}
            </ReactSortable>

            <TodoFilter state={props.state} setState={props.setState} todolist={todolist} setTodolist={setTodolist} item_count={todoList_filtered.length} />

        </div >
    );

}

export default ToDoLayout;
