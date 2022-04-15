import { useContext } from "react";
import Header from './Header'
// import Table from './Table'
// import SingleCard from './SingleCard'
import { RandomUserContext } from "../utils/Context";
import Pagination from './Pagination'


export default function Home() {
    const { randomUser } = useContext(RandomUserContext);
    // console.log(randomUser);
  return (
		<>
			<Header />
			<div>
			<Pagination/>
			</div>
		</>
	);
}
