import { Button } from "react-bootstrap";
import "./header.css";
import { getUserRole } from "../../utils";

function Header() {
  const userInfo = getUserRole();

  const signOut = () => {
    sessionStorage.removeItem("userInfo");
    window.location.reload();
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <span className="user-name">{userInfo.name}</span>
        
      </div>

      <Button className="logout-btn" onClick={signOut}>
        Logout
      </Button>
    </header>
  );
}

export default Header;


