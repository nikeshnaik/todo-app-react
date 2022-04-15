import { useState } from "react"
import styles from "./style.module.css"

function TodoFilter(props) {

    let completed_task_length = props.state.todolist.filter((element) => element.status === "completed").length

    let [filterState, setFilterState] = useState([true, false, false])

    function handleOnClick(event) {

        if (event.currentTarget.className === styles.all) {
            console.log(event.currentTarget)
            let oldState = props.state
            oldState.filter = "all"
            setFilterState([true, false, false])
            props.setState({ ...oldState })
        }
        else if (event.currentTarget.className === styles.active) {
            console.log(event.currentTarget)
            let oldState = props.state
            oldState.filter = "active"
            setFilterState([false, true, false])
            props.setState({ ...oldState })

        }
        else if (event.currentTarget.className === styles.completed) {
            console.log(event.currentTarget)
            let oldState = props.state
            oldState.filter = "completed"
            setFilterState([false, false, true])
            props.setState({ ...oldState })
        }
        else if (event.currentTarget.className === styles.clear_completed) {

            let oldTodoList = props.todolist

            let activeTodoList = oldTodoList.filter((element) => element.status === "active")

            props.setTodolist([...activeTodoList])

            let newStateTodoList = props.state.todolist.filter((element) => element.status === "active")
            props.state.todolist = newStateTodoList
            props.setState({ ...props.state })


        }
    }

    if (props.state.device === "desktop") {

        let all_filter_style = filterState[0] ? `${styles.all_active} ${styles.all}` : styles.all

        let completed_filter_style = filterState[2] ? `${styles.completed_active} ${styles.completed}` : styles.completed

        let active_filter_style = filterState[1] ? `${styles.active_active} ${styles.active}` : styles.active

        return (

            <div className={styles.filter_box}>
                <span tabIndex={0} className={styles.item_count}>{props.item_count} item left</span>
                <span tabIndex={1} className={all_filter_style} onClick={handleOnClick}>All</span>
                <span tabIndex={2} className={active_filter_style} onClick={handleOnClick}>Active</span>
                <span tabIndex={3} className={completed_filter_style} onClick={handleOnClick}>Completed</span>
                {completed_task_length > 0 ? <a className={styles.clear_completed} onClick={handleOnClick}>Clear Completed</a> :
                    < a className={styles.clear_completed} >Clear Completed</a>}
            </div >
        )

    } else {


        return <div className={styles.upper_filter} >

            <span tabIndex={0} className={styles.item_count_upper_filter}>{props.item_count} item left</span>
            {
                completed_task_length > 0 ? <a className={styles.clear_completed_upper_filter} onClick={handleOnClick}>Clear Completed</a> :
                    <span tabIndex={3} className={styles.clear_completed_upper_filter} >Clear Completed</span>
            }

        </div>

    }
}

export default TodoFilter;