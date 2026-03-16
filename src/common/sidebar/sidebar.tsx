import "./sidebar.css";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import { sideBarNavItems } from "../../config";
import { getUserRole } from "../../utils";

function Sidebar({ sidebarRef }: any) {
  const userInfo: any = getUserRole();
  const location = useLocation();

  return (
    <div ref={sidebarRef} className="sidebar-container">
      
      {/* User Name (Logo Style) */}
      <div className="sidebar-user">
        {userInfo?.name || userInfo?.username || "User"}
      </div>

      <Nav className="flex-column">
        {sideBarNavItems.map((item: any) => {
          if (item.access.includes(userInfo.role)) {
            const isActive = location.pathname === item.path;

            return (
              <Nav.Link
                as={Link}
                to={item.path}
                className={isActive ? "active" : ""}
              >
                {item.title}
              </Nav.Link>
            );
          }
          return null;
        })}
      </Nav>
    </div>
  );
}

export default Sidebar;

