import styles from "./style.module.css"
import { ReactComponent as CrossIcon } from "../../../assets/icon-cross.svg"

function TodoItem(props) {

    let itemOne = null;


    function handleDragStart(event) {
        props.state.dragStartIndex = parseInt(event.target.dataset.index)
    }

    function handleDragOver(event) {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move";
    }

    function handleDragDrop(event) {
        let dropZoneIndex = parseInt(event.currentTarget.dataset.index)
        swapTwo(props.state.dragStartIndex, dropZoneIndex)
    }

    function swapTwo(itemOne, itemTwo) {

        let oldState = props.state
        let temp = oldState.todolist[itemOne]
        oldState.todolist[itemOne] = oldState.todolist[itemTwo]
        oldState.todolist[itemTwo] = temp

        oldState.dragStartIndex = null

        props.setState({ ...oldState })

    }


    return (
        <div draggable data-index={props.todoId} className={styles.todoitem}
            onDrag={handleDragStart}
            onDrop={handleDragDrop}
            onDragOver={handleDragOver}>
            <input type="radio" name="todoitem" />
            <span className={styles.todo_description}>{props.description}</span>
            {props.edit ? <CrossIcon className={styles.crossicon} /> : null}
        </div >
    )

}

export default TodoItem