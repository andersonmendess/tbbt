import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;
    color: #eaeaea;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0) !important; 
    -webkit-focus-ring-color: rgba(255, 255, 255, 0) !important;
    font-family: 'Lato', sans-serif;
    
  }

  body {
    background-color: #121212;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    margin: 0 auto;
  }

  ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

a:link {
  text-decoration: none;
}

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: #1D1D1D; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #303030; 
  border-radius: 10px;
  margin: 1px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #444444; 
}


`;
