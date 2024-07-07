  import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Box } from '@mui/material';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import Videodetails from './Components/Videodetails';
import Channeldetail from './Components/Channeldetail';
import Searchfeed from './Components/Searchfeed';

function App() {
  return (

    <BrowserRouter>
    <Box sx={{backgroundcolor:'#000'}}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Feed/>}/>
      <Route path="/video/:id" element={<Videodetails/>}/>
      <Route path="/channel/:id" element={<Channeldetail/>}/>
      <Route path="/search/:searchterm" element={<Searchfeed/>}/>
    </Routes>
    </Box>
    </BrowserRouter>
   
  );
}

export default App;
