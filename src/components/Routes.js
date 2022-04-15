import { useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
import SingleCard from "./SingleCard";
import Home from "../components/Home";
import Header from "../components/Header";

export default function Routes() {
	const { randomUser } = useContext(RandomUserContext);
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route
				exact
				path='/view/:id'
				render={({ match }) => {
					console.log(
						"App here: inside route routeProps object is",
						match.params.id
					);
					const oneItem = randomUser.find(
						(item) => item.id + "" === match.params.id
					);
					return (
						<>
							<SingleCard {...oneItem} />
						</>
					);
				}}
			/> 

			<Route component={Unknown} />
		</Switch>
	);
}

function Unknown() {
	return <div>Error 404 page doesn't exist</div>;
}
