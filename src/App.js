import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RootProvider } from './context/RootContext';
import {useState, useEffect} from 'react';

import Header from './components/Header/Header';
import NewTodo from './components/AddTodo/AddTodo';
import TaskList from './components/TaskList/TaskList';
import Sort from './components/Sort/Sort';

import './App.css';

export default function App() {
	const [screanWidth, setScreanWidth] = useState(window.innerWidth);
	const breakpoint = 960;

	useEffect(() => {
		window.addEventListener("resize", () => setScreanWidth(window.innerWidth));
	}, []);
	/*todo:
		1) only have "fetcher()" function for save and get functions / limit use of fetcher
		2) make app remeber completed tasks
		3) make app create completed tasks if any
		4) add reordering functionality
	*/
	return (
		
		<div className="App">
				<RootProvider >
					<Header />
					<NewTodo />
				<DndProvider backend={HTML5Backend}>
					<TaskList
						screanWidth={screanWidth}
						breakpoint={breakpoint}
					/>
				</DndProvider>
					{screanWidth > breakpoint ? false : <Sort />}					
				</RootProvider>
			</div>
	);
}
