import styles from "./style.module.css"
import { ReactComponent as CrossIcon } from "../../../assets/icon-cross.svg"

function TodoItem(props) {


    return (
        <div draggable data-index={props.todoId} className={styles.todoitem}>
            <input type="radio" name="todoitem" />
            <span className={styles.todo_description}>{props.description}</span>
            {props.edit ? <CrossIcon className={styles.crossicon} /> : null}
        </div >
    )

}

export default TodoItem