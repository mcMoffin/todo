import {RootProvider} from './context/RootContext'
import Header from './components/Header/Header';
import NewTodo from './components/AddTodo/AddTodo';
import TaskList from './components/TaskList/TaskList';
import Sort from './components/Sort/Sort';

import './App.css';

export default function App() {

	return (
		<div className="App">
			<RootProvider >
				<Header />
				<NewTodo />
				<TaskList />
				<Sort cName={"sort cell"}/>
			</RootProvider>
		</div>
	);
}
