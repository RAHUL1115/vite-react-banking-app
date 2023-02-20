import Navbar from "../components/Navbar";
import MiniDrawer from "../components/Sidebar";

function Layout1(props) {
    return ( <div>
        <Navbar></Navbar>
        <MiniDrawer>
        </MiniDrawer>
            {props.children}
    </div> );
}

export default Layout1;