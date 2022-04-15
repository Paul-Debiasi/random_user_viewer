import { Switch, Route } from "react-router-dom";
import Main from "../components/Main";
// import SingleCard from "./SingleCard";
// import { useContext } from "react";
// import { NomaContext } from "../components/Context";
import Home from "../components/Home";
import Header from "../components/Header";
// import Favorite from "../components/Favorite";

export default function Routes() {
	// const { list } = useContext(NomaContext);
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route exact path='/results'>
				<Header />
				<Main />
			</Route>
			{/* <Route exact path='/fav'>
				<Header />
				<Favorite />
			</Route> */}
			{/* <Route
				exact
				path='/card/:ID'
				render={({ match }) => {
					console.log(
						"App here: inside route routeProps object is",
						match.params.ID
					);
					const oneItem = list.find((item) => item.ID + "" === match.params.ID);
					return (
						<>
							<Header />
							<SingleCard {...oneItem} />
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
