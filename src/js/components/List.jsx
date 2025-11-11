import React, { useState } from "react";


const List = () => {

    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isVisible, setIsVisible] = useState(null)

    const CreateTask = (event) => {
        if (event.key === 'Enter' && inputValue !== '') {
            setTasks([...tasks, inputValue]); setInputValue('')
        }
    };

    const DeleteTask = (index) => {
        const newTasks = tasks.filter((item, currentIndex) => currentIndex !== index);
        setTasks(newTasks)
    };

    const Capitalize = (item) => {
        return item.charAt(0).toUpperCase() + item.slice(1);
    };

    const TaskCounter = (array) => {
        if (array.length === 1) {
            return `${array.length} Item left`
        } return `${array.length} Items left`
    };

    const MouseEnter = (event) => {
        setIsVisible(event.target.id);
    };

    const MouseLeave = () => {
        setIsVisible(null);
    };

    function Visibility(item) {
        if (isVisible == item) {
            return 'visible'
        } return 'hidden'
    };

    const Placeholder = (array) => {
        if (array.length === 0) {
            return 'No tasks, add a task'
        } return 'What needs to be done?'
    }

    return (

        <ul className="todo-list list-group col-6 list-group-flush">
            <li className="list-group-item ps-5"><input type="text" className="input-field" placeholder={Placeholder(tasks)} onChange={e => setInputValue(e.target.value)} value={inputValue} onKeyDown={CreateTask} /></li>
            {tasks.map((item, index) => {
                return (
                    <li className="list-group-item ps-5 list-item" key={index} id={index} onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>{Capitalize(item)}
                        <i className="fa-solid fa-x delete-marker" key={index} style={{ visibility: `${Visibility(index)}` }} onClick={() => DeleteTask(index)}></i></li>
                )
            })}
            <li className="task-counter list-group-item ps-3">{TaskCounter(tasks)}</li>
        </ul>
    )
};
export default List;