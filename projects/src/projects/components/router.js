import Homepage from "./home";
import AboutPage from "./about";
import ContactPage from "./contact";
import {Route, BrowserRouter as Router , Routes} from "react-router-dom";

 function Alekh() {
  const homescreen = " homescreen"
    const aboutscreen = " aboutscreen"
      const contactcreen = " contatctcreen"
        const  About = "About"
  return (
    <Router>
      <Routes>
<Route path = "/home" element = {<Homepage  home= {homescreen} />}/>
<Route path = "/about" element = {<AboutPage  about= {aboutscreen} />}/>
<Route path = "/contact" element = {<ContactPage contact= {contactcreen} />}/>

      </Routes>
    </Router>
  );
}
export default Alekh