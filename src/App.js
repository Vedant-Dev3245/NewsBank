import React,{ useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
    const [progress, setProgress] = useState(0);
    // let apikey=process.env.REACT_APP_API_KEY;
  
  return (
    <div>
    <Router>
    <Navbar/>
    <LoadingBar
    height={3}
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div >
       
     
        <div className="container my-3">
          // <Routes>
          //   <Route exact path="/" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize="8" country="us" category="general" />}/>
          //   <Route  exact path="/home" element={<News setProgress={setProgress} apikey={apikey} key="general" pageSize="8" country="us" category="general"/>} />
          //   <Route  exact path="/business" element={<News setProgress={setProgress} apikey={apikey} key="business" pageSize="8" country="us" category="business"/>} />
          //   <Route  exact path="/entertainment" element={<News setProgress={setProgress} apikey={apikey}  key="entertainment" pageSize="8" country="us" category="entertainment"/>} />
          //   <Route  exact path="/health" element={<News setProgress={setProgress} apikey={apikey}  key="health" pageSize="8" country="us" category="health"/>} />
          //   <Route  exact path="/science" element={<News setProgress={setProgress} apikey={apikey} key="science" pageSize="8" country="us" category="science"/>} />
          //   <Route  exact path="/sports" element={<News setProgress={setProgress} apikey={apikey}  key="sports" pageSize="8" country="us" category="sports"/>} />
          //   <Route  exact path="/technology" element={<News setProgress={setProgress} apikey={apikey} key="technology" pageSize="8" country="us" category="technology"/>} />

           
          // </Routes>
            <Routes>
                <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize="8" country="us" category="general" />}/>
                <Route exact path="/home" element={<News setProgress={setProgress} key="general" pageSize="8" country="us" category="general"/>} />
                <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize="8" country="us" category="business"/>} />
                <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize="8" country="us" category="entertainment"/>} />
                <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize="8" country="us" category="health"/>} />
                <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize="8" country="us" category="science"/>} />
                <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize="8" country="us" category="sports"/>} />
                <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize="8" country="us" category="technology"/>} />
            </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
