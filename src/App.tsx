import Router from './router/router';
import Login from './common/login/login';
import './App.css';
import Header from './common/header/header';
import { getUserRole } from './utils';
import Sidebar from './common/sidebar/sidebar';
import { useEffect, useRef, useState } from "react";

export default function App() {
  const isUserLogged = getUserRole();
  const sideBarTargetRef: any = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  useEffect(() => {
    if (sideBarTargetRef.current) {
      setSidebarWidth(sideBarTargetRef.current.offsetWidth);
    }
  }, []);

  if (!isUserLogged) {
    return (
      <div>
        <Login />
      </div>
    );
  }

  return (
    <main className="app-main">
      <Header />

      <section className="main-screen">
        <section className="main-content">
           <div className="page-inner-wrapper">
        <Sidebar ref={sideBarTargetRef} />

        <div className="route-view" style={{ marginLeft: sidebarWidth }}>
          <Router />
        </div>
         </div>
      </section>
      </section>
       
    </main>
  );
}
