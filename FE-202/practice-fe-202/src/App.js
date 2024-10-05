import { Grid } from '@mui/material';
import './App.css';
import VideoCard from './session-1/VideoCard';
import axios from "axios";
// import videoData from './data.json';
import { useEffect, useState } from 'react';
import PromiseAll from './session-1/PromiseAll';

function App() {
  const [videoData, setVideoData] = useState([]);

  useEffect(()=>{
    fetchVideoData();
  },[]);

  async function fetchVideoData(){
    try{
      let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
      let result = await axios.get(url);
      setVideoData(result.data.videos);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <PromiseAll/>
    <Grid container spacing={2}>
      {
        videoData?.map((video)=>(
          <Grid item xs={12} sm={6} md={4} lg={3} >
          <VideoCard key={video.id} data={video}/>
          </Grid>
        ))
      }
      </Grid>
      </>
  );
}

export default App;
