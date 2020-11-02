import React, { useState } from 'react';
import EpList from "./components/EpList";
import Header from "./components/Header"
import Placeholder from './components/Placeholder'

import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";



import GlobalStyles from "./styles/global";

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes />
        </BrowserRouter>
      <GlobalStyles/>
  </>
  )

//   const db = getAll();
//   const [ playing, setPlaying ] = useState({});

//   return (
//     <div className="app" >
//     <Header/>

//     <div className="content">
//     <EpList db={db} setPlaying={setPlaying} playing={playing} />

//     {playing?.megaId === undefined && <Placeholder ></Placeholder> }

//     {playing?.megaId !== undefined && (
      

//       <Placeholder onContextMenu={(e)=> e.preventDefault()}>
// <video oncontextmenu="return false;" key={playing.id} width="800" height="480" controls disablePictureInPicture controlsList="nodownload" autoPlay autoSave>
//   <source src={playing.url} type="video/mp4"/ >
// Your browser does not support the video tag.
// </video>
//    </Placeholder>
      
//     )}


//     </div>

  
// </div>
  //);
}

export default App;
