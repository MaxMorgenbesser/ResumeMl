import RateResumeCarousel from "./RateResumesComponents/RateResumeCarousel"
import { useContext } from "react"
import NotLoggedInYet from "./NotLoggedInYet"
import { data } from "../App"

const RateResume =()=> {
const {loggedIn} = useContext(data)

    
return (<>
{!loggedIn?<NotLoggedInYet/>:
<RateResumeCarousel/>}</>)
}

export default RateResume