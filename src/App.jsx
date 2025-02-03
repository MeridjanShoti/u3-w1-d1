import "./App.css";
import Btn from "./components/btn";
import Image from "./components/Image";
function App() {
  return (
    <>
      <Btn btnTxt="ciao"></Btn>
      <Image
        imgUrl="https://m.media-amazon.com/images/S/pv-target-images/dbf6812f59e5080cf420f1056bfceb66f7d6a43a8df19ace503ea70596afc0ff.jpg"
        imgWidth="300px"
      ></Image>
    </>
  );
}

export default App;
