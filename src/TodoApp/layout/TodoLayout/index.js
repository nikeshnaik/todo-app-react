import { ReactComponent as ThemeMoonIcon } from '../../../assets/icon-moon.svg'
import { ReactComponent as ThemeSunIcon } from '../../../assets/icon-sun.svg'
import TodoItem from '../../components/TodoItem'
import { ReactSortable } from "react-sortablejs";

import styles from './style.module.css'
import { useState } from 'react';
import TodoFilter from '../../components/TodoFilter';
import { v4 as uuidv4 } from 'uuid';

function ToDoLayout(props) {

    let [todolist, setTodolist] = useState(props.state.todolist)

    let [showCheckIcon, setShowCheckIcon] = useState(false)

    let todoList_filtered = props.state.filter === "all" ? todolist : todolist.filter((element) => element.status === props.state.filter)


    function handleInputBox(event) {
        if (event.key === "Enter" && event.target.value !== "") {

            let description = event.target.value
            let status = event.target.dataset.checked === "true" ? "completed" : "active"

            let newTodo = {
                "id": uuidv4(),
                "status": status,
                "description": description
            }
            console.log(newTodo)

            props.state.todolist.push(newTodo)
            props.setState({ ...props.state })

            todolist.push(newTodo)
            setTodolist([...todolist])

            event.target.value = ""
            event.target.dataset.checked = "false"
        }
    }

    function handleCheckBox(event) {

        if (event.target.className === styles.inputRadio && event.currentTarget.firstElementChild.nextElementSibling.value !== "") {

            setShowCheckIcon(true)

            console.log(event.currentTarget, event.target)

            event.currentTarget.firstElementChild.nextElementSibling.dataset.checked = event.currentTarget.firstElementChild.nextElementSibling.dataset.checked === "false" ? "true" : "false"


            let description = event.currentTarget.firstElementChild.nextElementSibling.value
            let status = event.currentTarget.firstElementChild.nextElementSibling.dataset.checked === "true" ? "completed" : "active"

            let newTodo = {
                "id": uuidv4(),
                "status": status,
                "description": description
            }
            console.log(newTodo)

            props.state.todolist.push(newTodo)
            props.setState({ ...props.state })

            todolist.push(newTodo)
            setTodolist([...todolist])

            setTimeout(() => {

                setShowCheckIcon(false)

            }, 1000);

            event.currentTarget.firstElementChild.nextElementSibling.value = ""
            event.currentTarget.firstElementChild.nextElementSibling.dataset.checked = "false"

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
            <div className={styles.inputBox} onKeyDown={handleInputBox} onClick={handleCheckBox}>
                <div tabIndex={0} className={showCheckIcon ? `${styles.inputRadio_checked} ${styles.inputRadio}` : styles.inputRadio}></div>
                <input type="text" className={styles.inputText} data-checked="false" placeholder="Create a new Todo.." />
            </div>

            <ReactSortable
                animation={500}
                delayOnTouchStart={true}
                delay={1}
                invertSwap={true}
                direction={"vertical"}

                className={styles.todoItemContainer} list={todolist} setList={setTodolist}>
                {todoList_filtered.map((element, idx) => {

                    let state_obj = [props.state, props.setState, todolist, setTodolist]

                    return <TodoItem state_obj={state_obj} key={element.id} todoId={element.id} status={element.status} description={element.description} />

                })}
            </ReactSortable>

            <TodoFilter state={props.state} setState={props.setState} todolist={todolist} setTodolist={setTodolist} item_count={todoList_filtered.length} />

        </div >
    );

}

export default ToDoLayout;
