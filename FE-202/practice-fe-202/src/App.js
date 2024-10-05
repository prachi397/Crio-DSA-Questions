import './App.css';
import VideoCard from './session-1/VideoCard';
import axios from "axios";
// import videoData from './data.json';
import { useEffect, useState } from 'react';

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
    <div className="App">
      {
        videoData?.map((video)=>(
          <VideoCard key={video.id} data={video}/>
        ))
      }
    </div>
  );
}

export default App;
