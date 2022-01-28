import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Hero from './Components/Hero';
import Sidebar from './Components/Sidebar';
import People from './Pages/People';
import Planets from './Pages/Planets';
import Starships from './Pages/Starships';

const App = () => {
	// let navigate = useNavigate();

	return (
		<>
			<BrowserRouter>
				<Sidebar />
				<Hero />
				<Routes>
					<Route path='/people' element={<People />} />
					<Route path='/planets' element={<Planets />} />
					<Route path='/starships' element={<Starships />} />
					<Route path='/' element={<People />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
