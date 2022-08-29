import { useContext } from "react"
import { data } from "../App"
import NotLoggedInYet from "./NotLoggedInYet"



const TopFive=()=>{
const {loggedIn}= useContext(data)
    return (
        <>{!loggedIn?<NotLoggedInYet/>:<h1>Top five resumes will go here</h1>}</>
    )

}
export default TopFive