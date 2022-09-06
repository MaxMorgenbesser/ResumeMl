// import  Nav from "react-bootstrap/Nav"
import { Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { data } from "../../App";
import { useContext } from "react";


export default function HandleLogout() {
const {setUserInfo} = useContext(data)
  const navigation = useNavigate();
  const logout = async () => {
    localStorage.clear();
    setUserInfo('')
   navigation("/");
  };

  return (
    <>
      <Link as={Link} to="/">
        <Button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </Button>
      </Link>
    </>
  );
}
