import { Link } from "react-router-dom"
import { Button } from "antd/lib/radio"


export default function NotLoggedInYet() {
    return (<>
   <h1> You do not have access to this page until you log in, please click this button to go to the home page and login</h1> 
   <Link as={Link} to='/' ><Button>Go Home</Button>
</Link>
    </>)
}