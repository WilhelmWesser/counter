import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar />
        <Counters />
      </main>
    </div>
  );
}

export default App;
