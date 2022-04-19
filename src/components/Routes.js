import { useContext } from "react";
import { RandomUserContext } from "../utils/Context";
import { Switch, Route } from "react-router-dom";
import SingleCard from "./SingleCard";
import Home from "../components/Home";
import SingleUserHeader from "./SingleUserHeader";
import Footer from "./Footer";

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
							<SingleUserHeader />
							<SingleCard {...oneItem} />
							<Footer />
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
