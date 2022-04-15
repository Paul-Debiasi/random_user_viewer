import{useContext,useEffect} from 'react'
import { RandomUserContext } from "../utils/Context";

export default function SingleCard() {
 const { randomUser, setRandomUser } = useContext(RandomUserContext);

  return (
    <div>SingleCard</div>
  )
}
