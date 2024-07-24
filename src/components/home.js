import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });

    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = () => {
        if (input.trim() === '') {
            alert('Enter task!');
        } else {
            setTasks([...tasks, input.trim()]);
            setInput('');
        }
    };

    return (
        <div className="container-for-tasks">
            <h2>To-Do List <img src="/media/icon-todo.PNG" width="70px" alt="Todo Icon" /></h2>
            <h3>Date</h3>
            <h3>Time</h3>
            <div className="input-grid">
                <input 
                    type="text" 
                    placeholder="Task Name" 
                    id="input-box" 
                    className="filter-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button className="filter-btn" onClick={handleAddTask}>Add</button>
            </div>
            <ul id="list-container">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;





/*<div className="todo-grid">
                <div className="task-name">Task Name</div>
                <div className="definition">Definition</div>
                <div className="priority">Priority</div>
                <div className="due">Due date</div>
            </div>*/