import React, { useState } from "react";
import "./mycomponents.css";
// import Bulb from "./bulb/bulb";
// import MovieDashboard from "./movies/MoviesDAshboard";
// import Cards from "./cart/cards";
// import Coin from "./game/dashboard";
// import Time from "./JSX/conditionaljsx";
// import Fruit from "./WithoutState/withoutstate";

const Layout = () => {
  const [selectedProject, setSelectedProject] = useState();
  
  

  return (
    <div className="layout-body">
      <div className="layout-main">
        <div className="layout-buttons" onClick={() => setSelectedProject(1)}>
          Project: 1
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(2)}>
          Project: 2
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(3)}>
          Project: 3
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(4)}>
          Project: 4
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(5)}>
          Project: 5
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(6)}>
          Project: 6
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(7)}>
          Project: 7
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(8)}>
          Project: 8
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(9)}>
          Project: 9
        </div>
        <br />
        <div className="layout-buttons2" onClick={() => setSelectedProject(10)}>
          Project: 10
        </div>
      </div>

      <div className="layout-display">
        {/* {selectedProject === 1 && <MovieDashboard />} */}
        {/* {selectedProject === 2 &&  <Bulb/>} */}
        {/* {selectedProject === 3 && <Cards/> } */}
        {/* {selectedProject === 4 && <Coin/>}
        {selectedProject === 5 && <Time />}
        {selectedProject === 6 && <Fruit />}
        {selectedProject === 7 && <MovieDashboard />}
        {selectedProject === 8 && <MovieDashboard />}
        {selectedProject === 9 && <MovieDashboard />}
        {selectedProject === 10 && <MovieDashboard />}
       */}

      </div>
    </div>
  );
};

export default Layout;
