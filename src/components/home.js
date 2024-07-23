import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function Home(){

    const [tasks, setTask] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);



    return(
        <div class="container-for-tasks">
            <h2>To-Do List  <img src="/media/icon-todo.PNG" width="70px"/></h2>
                <h3>Date</h3>
                <h3>Time</h3>
                <div class="input-grid">
                <input type="text" placeholder="Task Name" class="filter-input"/>
                <button class="filter-btn">Add</button>
                </div>
            <ul id="list-container">
                <li class="ticked">Task 1</li>
                <li>Task 2</li>
                <li>Task 3</li>
                <li>Task 4</li>
                <li>Task 5</li>
            </ul>
        </div>
    )
}
export default Home




/*<div className="todo-grid">
                <div className="task-name">Task Name</div>
                <div className="definition">Definition</div>
                <div className="priority">Priority</div>
                <div className="due">Due date</div>
            </div>*/