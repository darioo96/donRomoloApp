import Navbar from "./components/Navbar";
import { connection } from "./dbConnection/connection";

function App() {

    connection().catch(err => console.log(err))

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
