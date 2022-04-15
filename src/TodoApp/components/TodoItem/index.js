import styles from "./style.module.css"
import { ReactComponent as CrossIcon } from "../../../assets/icon-cross.svg"
import { useState } from "react"

function TodoItem(props) {

    let [showCrossBtn, setShowCrossBtn] = useState(false)

    let [textDecoration, settextDecoration] = useState(props.status === "completed" ? true : false)

    let [showCheckIcon, setShowCheckIcon] = useState(false)

    function handleClick(event) {

        console.log(event.currentTarget, event.target.parentElement)

        if (event.target.className === styles.inputRadio) {
            // change status of the todoitem
            let todoId = event.currentTarget.dataset.index
            let [state, setState, todolist, setTodoList] = props.state_obj

            console.log(state)

            setShowCheckIcon(true)
            settextDecoration(true)
            setTimeout(() => {

                console.log("State Change triggered")

                let oldState = state
                let indexOftodo = oldState.todolist.findIndex(item => item.id === todoId)
                oldState.todolist[indexOftodo].status = "completed"
                setState({ ...oldState })

                let oldTodoList = todolist
                indexOftodo = oldTodoList.findIndex(item => item.id === todoId)
                oldTodoList[indexOftodo].status = "completed"
                setTodoList([...oldTodoList])
                settextDecoration(false)
                setShowCheckIcon(false)

            }, 2000);


        }
        else if (event.target.className === styles.todo_description) {
            setShowCrossBtn(showCrossBtn ? false : true)
        }
        else if (event.target.parentElement.className === styles.crossicon) {

            let todoId = event.currentTarget.dataset.index

            let [state, setState, todolist, setTodoList] = props.state_obj

            state.todolist.splice(state.todolist.findIndex(item => item.id === todoId), 1)
            setState({ ...state })

            todolist.splice(todolist.findIndex(item => item.id === todoId), 1)
            setTodoList([...todolist])
            setShowCrossBtn(false)
        }
    }

    let inputRadio_styles = showCheckIcon ? `${styles.inputRadio} ${styles.inputRadio_checked}` : styles.inputRadio


    return (
        <div draggable data-index={props.todoId} className={styles.todoitem} onClick={handleClick}>
            <div tabIndex={props.todoId} className={inputRadio_styles} data-index={props.todoId}></div>
            <span className={textDecoration ? `${styles.todo_description} ${styles.text_description_completed}` : styles.todo_description} > {props.description}</span>
            <span className={styles.crossicon}>{showCrossBtn ? <CrossIcon /> : null}</span>
        </div >
    )

}

export default TodoItem