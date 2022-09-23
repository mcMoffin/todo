import {useContext, useState} from 'react';
import RootContext from '../../context/RootContext';

const NewTodo = () => {
	const [currentTask, setCurrentTask] = useState('');
    const { saveLocalTodos } = useContext(RootContext);

	const addTodo = (e) => {
		e.preventDefault();
		saveLocalTodos(currentTask);
		setCurrentTask('');
    };

    return (        
		<div className="add-todo">
			<div className='circle-icon'></div>
			<form onSubmit={(e) => addTodo(e)}>
				<input
					type="text"
					className="todo-input"
					value={currentTask}
					placeholder="Add a new task"
					onChange={(e) => setCurrentTask(e.target.value)}
				/>
			</form>
		</div>	
    )
}

export default NewTodo;