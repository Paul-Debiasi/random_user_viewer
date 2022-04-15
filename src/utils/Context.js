import { createContext, useState } from "react";

export const RandomUserContext = createContext();

function RandomUserContextProvider({ children }) {
    const[randomUser,setRandomUser] = useState([])
	const [user, setUser] = useState([]);
	

	return (
		<RandomUserContext.Provider
			value={{
				randomUser,
				setRandomUser,
				user,
				setUser,
			}}
		>
			{children}
		</RandomUserContext.Provider>
	);
}

export default RandomUserContextProvider;