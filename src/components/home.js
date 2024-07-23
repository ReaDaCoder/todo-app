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
        <div class="container">
            <h2>To-Do List  <img src="/media/icon.PNG" width="30px"/></h2>
                <h3>Date</h3>
                <h3>Time</h3>
                <div class="input-grid">
                <input type="text" placeholder="Task Name" class="filter-input"/>
                <button class="filter-btn">Add</button>
                </div>
            <div className="todo-grid">
                <div className="task-name">Task Name</div>
                <div className="definition">Definition</div>
                <div className="priority">Priority</div>
                <div className="due">Due date</div>
            </div>
        </div>
    )
}
export default Home