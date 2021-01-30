// import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

function App(props) {
  console.log("App Component", props)
  return (
    <div className="App">
      <h1>App Component</h1>
    </div>
  );
}
const mapStateToProps= state=>({
  product:state.product
}
)

export default connect(mapStateToProps)(App);
