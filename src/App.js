import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/assets/icon/icomoon-css.css";
import Header from "./component/Header";
import Card from "./component/Card";
import Modal from './component/Modal/assign-test-modal'

function App() {
  return (
    <>
      <Header />
      <Card />
      <Modal/>
    </>
  );
}

export default App;
