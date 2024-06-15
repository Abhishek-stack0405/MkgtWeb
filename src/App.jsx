import About from "./components/About";
import Header from "./components/Header";
import Timmer from "./components/Timmer";

function App() {
  return (
    <div className="App max-w-4xl min-h-screen mx-auto font-sans">
      <Header />
      <div className=" flex flex-col lg:flex-row mt-10  lg:-mt-10 " style={{height: 'calc(100vh - 5rem)'}}>
        <div className=" lg:w-1/2 lg:-mt-10 ">
        <Timmer />
        </div>
        <div  className=" lg:mt-0 mt-10 lg:h-full lg:w-1/2  ">
        <About/>
        </div>
        
        
      </div>
      
    </div>
  );
}

export default App;
