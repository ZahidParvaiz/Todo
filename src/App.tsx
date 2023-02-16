import React from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

type Task = {
    text: string;
    done: boolean;
}

function App() {
    const [tasks, setTasks] = React.useState<Array<Task>>([]);
    const [task, setTask] = React.useState("");

    const toggleDone = (index: number) => {
        const _tasks = tasks.concat();
        _tasks[index].done = !_tasks[index].done;
        setTasks(_tasks);
    };

    const addTask = () => {
        if (task == "") return;

        setTasks([...tasks, {
            done: false,
            text: task
        }]);

        setTask("");
    };

    const delTask = (index: number) => {
        setTasks(tasks.filter((t, i) => i != index));
    };

    return (
        <>
            <h2>Task list</h2>
            <div className="App">
                <div className="outer">
                    {tasks.map((t, i) => (
                        <div className="task" key={i}>
                            <input className="tick" type="checkbox" checked={t.done} onChange={e => toggleDone(i)} />
                            <div className="text">{t.done ? <s>{t.text}</s> : <span>{t.text}</span>}</div>
                            <button type="button" className="del-btn" onClick={() => delTask(i)}>x</button>
                        </div>
                    ))}
                </div>
                <div>
                    <input type="text" value={task} onChange={e => setTask(e.target.value)} />
                    <button type="button" onClick={addTask}>Add</button>
                </div>
            </div>
        </>
    )
}

export default App
