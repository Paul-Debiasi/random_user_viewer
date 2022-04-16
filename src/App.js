import './App.scss';
import Routes from "./components/Routes";
import RandomUserContextProvider from "./utils/Context";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
		<div className='App'>
			<BrowserRouter>
				<RandomUserContextProvider>
					<Routes />
				</RandomUserContextProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
