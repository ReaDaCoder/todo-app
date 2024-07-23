import {useState} from 'react';

function Home(){

    return(
        <div>
            <div className="todo-grid">
                <h2>Task List</h2>
                <h3>Date</h3>
                <h3>Time</h3>
                <input type="text" placeholder="Task Name"/>
                <button>Add</button>
                <div className="task-name">Task Name</div>
                <div className="definition">Definition</div>
                <div className="priority">Priority</div>
                <div className="due">Due date</div>
            </div>
        </div>
    )
}
export default Home