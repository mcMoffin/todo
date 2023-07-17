import { useContext, useState, useEffect} from 'react';
import $  from "jquery";
import RootContext from '../../context/RootContext'
import Tasks from '../Tasks/Tasks';
import Sort from "../Sort/Sort";

const TaskList = ({screanWidth,breakpoint}) => {
	const { list } = useContext(RootContext);
	const { deleteTodos } = useContext(RootContext);
	const { saveLocalTodos } = useContext(RootContext);
	const [activityCounter, setActivityCounter] = useState();
	useEffect(()=> counterUpdater())

	let counterUpdater = () => {
		setActivityCounter(list.length - $(".completed").length);
	};

	return (
		<div className="TaskList">
			{list.map((e, index) => {
				return <Tasks
					id={e.id}
					className={e.completed ? "completed" : false}
					txt={e.task}
					deleteAction={() => deleteTodos(index)}
					onClick={event => {
						// saveLocalTodos({id: e.id, task: e.task, completed: !e.completed});
						$(event.currentTarget).toggleClass("completed");
						$(event.currentTarget).toggleClass("active");
						counterUpdater();
					}}
				/>;
			})}

			<div className='task-list-info'>
				<div className='tracker'>
					<p>{activityCounter} items left</p>
				</div>

				{screanWidth > breakpoint ? <Sort /> : false}

				<div className='clear-list' onClick={ ()=> {
					let taskIds = [...$(".completed")].map(e => Number(e.id));
					deleteTodos(taskIds);
				}}>
					<p>Clear Completed</p>
				</div>
			</div>
		</div>
	);
};

export default TaskList;
