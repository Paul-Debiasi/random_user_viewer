import { Switch, Route } from "react-router-dom";
import SingleCard from "./SingleCard";
import Home from "../components/Home";
import SingleUserHeader from "./SingleUserHeader";
import Footer from "./Footer";
// Managing the routes in the App
export default function Routes() {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>

			<Route exact path='/view/:id'>
				<SingleUserHeader />
				<SingleCard />
				<Footer />
			</Route>
			
			{/* 
			Changed code cuz the random user might be an empty at first render or if reloaded.
			<Route
				exact
				path='/view/:id'
				render={({ match }) => {
					// Match params id will allow me acceded to the props of a single user base on the id
					const oneItem = randomUser.find(
						(item) => item.id + "" === match.params.id
					);

					return (
						<>
							<SingleUserHeader />
							<SingleCard />
							<Footer />
						</>
					);
				}}
			/> */}

			<Route component={Unknown} />
		</Switch>
	);
}

function Unknown() {
	return <div>Error 404 page doesn't exist</div>;
}
