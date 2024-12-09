import { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { Button,Table, Checkbox, Form } from 'semantic-ui-react'


function Home() {
    const [apiData, setApiData] = useState([]);
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
            setTasks([...tasks, { text: input.trim(), id: Date.now() }]);
            setInput('');
        }
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
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
            <Table celled>
                 <Table.Header>
                     <Table.Row>
                         <Table.HeaderCell> Task Name</Table.HeaderCell>
                         <Table.HeaderCell>Definition</Table.HeaderCell>
                         <Table.HeaderCell>Priority</Table.HeaderCell>
                         <Table.HeaderCell>Status</Table.HeaderCell>
                         <Table.HeaderCell>Due date</Table.HeaderCell>
                     </Table.Row>
                 </Table.Header>

                 <Table.Body>
                     {apiData.map((data) => (
                        <Table.Row key={data.id}>
                            <Table.Cell>{data.taskName}</Table.Cell>
                            <Table.Cell>{data.definition}</Table.Cell>
                            <Table.Cell>{data.priority}</Table.Cell>
                            <Table.Cell>{data.status}</Table.Cell>
                            <Table.Cell>{data.dueDate}</Table.Cell>
                            <Table.Cell>
                                <Link to='/Update'>
                                     <Button>Update</Button>
                                 </Link>
                                 <Button color='red' onClick={() => handleDeleteTask(data.id)}>
                                     Delete
                                </Button>
                           </Table.Cell>
                       </Table.Row>
                       ))}
              </Table.Body>
             </Table>
        </div>
    );
}

export default Home;
