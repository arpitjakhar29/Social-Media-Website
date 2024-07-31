import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Createpost from "./components/Createpost";
import Postlist from "./components/Postlist";
import Inbox from "./components/Inbox";
import { useState } from "react";
import PostlistProvider from "./store/postlist-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostlistProvider>
      <div className="appcontainer">
        <Sidebar
          selectedtab={selectedTab}
          setselectedtab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" && <Postlist></Postlist>}
          {selectedTab === "Profile" && <Profile></Profile>}
          {selectedTab === "Create Post" && <Createpost></Createpost>}
          {selectedTab === "Messages" && <Inbox></Inbox>}

          <Footer></Footer>
        </div>
      </div>
    </PostlistProvider>
  );
}

export default App;
