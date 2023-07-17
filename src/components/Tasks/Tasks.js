import $  from "jquery";
import { useDrag } from 'react-dnd';

import Btn from '../Button/Button';

const Task = ({ id, txt, deleteAction, onClick }) => {
	const [{ isDragging }, drag] = useDrag(() => ({
		type: "task",
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging()
		})
	}));

	return (
		<div
			ref={drag}
			id={id} data-key={id}
			className={`task active`}
			style={{border: isDragging? "5px solid rgb(228, 229, 241)" : false }}
			onClick={onClick}
		>
			<div className="task-info">
				<div className='circle-icon'></div>
				<p>{txt}</p>
			</div>
			<Btn className="delete-task" onClick={deleteAction} style={{ stroke: "url(#blue-gradient)" }}/>
		</div>
	);
};
export default Task;
