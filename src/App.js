import './App.css';
import Routes from "./components/Routes";
import RandomUserContextProvider from "./utils/Context";


function App() {
  return (
		<div className='App'> 
    <RandomUserContextProvider>
		    	<Routes />
    </RandomUserContextProvider>
		</div>
	);
}

export default App;
