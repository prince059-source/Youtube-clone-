import { Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../Pages/Home";
import Video from "../Pages/video";
import Search from "../Pages/Search";
import "./App.css";
const App = () => {
  return (
    <div className=" h-screen overflow-hidden text-white  w-full bg-black/95 ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/video/:categoryId/:channelId/:videoId"
          element={<Video />}
        />
        <Route path="/search/:searchid" element={<Search />}></Route>
      </Routes>
    </div>
  );
};

export default App;
