// import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/userActions";

function App(props) {
  const onUpdateUser = () => {
    // props.dispatch(updateUser("New TommyXYZ"));
    props.onUpdateUser("New TommyXYZ01");
  };
  console.log("App Comp=>", props);
  return (
    <div className="App">
      <h1>App Component</h1>
      <h2>{props.user}</h2>
      <button onClick={onUpdateUser}>Change The Name</button>
    </div>
  );
}
const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  onUpdateUser: updateUser,
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
