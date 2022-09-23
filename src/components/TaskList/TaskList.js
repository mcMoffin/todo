import { useContext, useState, useEffect} from 'react';
import $  from "jquery";
import RootContext from '../../context/RootContext'
import Tasks from '../Tasks/Tasks';
import Sort from "../Sort/Sort";

const TaskList = () => {
	const { list } = useContext(RootContext);
	const { deleteTodos } = useContext(RootContext);
	const [activityCounter, setActivityCounter] = useState();

	useEffect(()=> counterUpdater())

	let counterUpdater = () => {
		setActivityCounter(list.length - $(".completed").length);
	};

	return (
		<div className="TaskList">
			{list.map((e, i) => {
				return <Tasks index={i} txt={e} deleteAction={() => deleteTodos(i)} onClick={event => {
					$(event.currentTarget).toggleClass("completed");
					$(event.currentTarget).toggleClass("active");
					counterUpdater();
				}} />;
			})}

			<div className='task-list-info'>
				<div className='tracker'>
					<p>{activityCounter} items left</p>
				</div>

				<Sort cName="sort web" />

				<div className='clear-list' onClick={ ()=> {
					let list = [...$(".completed")].map(e => Number($(e).attr("data-key")));
					deleteTodos(list);
					$(".task").removeClass("completed");
				}}>
					<p>Clear Completed</p>
				</div>
			</div>
		</div>
	);
};

export default TaskList;
