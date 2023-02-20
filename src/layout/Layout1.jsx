import Navbar from "../components/Navbar";

function Layout1(props) {
  return (
    <div>
      <Navbar></Navbar>
      {props.children}
    </div>
  );
}

export default Layout1;
