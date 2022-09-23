import $  from "jquery";

import Btn from '../Button/Button';

const Task = ({index, txt, deleteAction, onClick}) => {
	return (
		<div data-key={index} className={`task active`} onClick={onClick}>
			<div className="task-info">
				<div className='circle-icon'></div>
				<p>{txt}</p>
			</div>
			<Btn className="delete-task" onClick={deleteAction} style={{ stroke: "url(#blue-gradient)" }}/>
		</div>
	);
};
export default Task;
