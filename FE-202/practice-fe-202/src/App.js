import './App.css';
import VideoCard from './session-1/VideoCard';
import videoData from './data.json';

function App() {
  return (
    <div className="App">
      {
        videoData.videos.map((video)=>(
          <VideoCard key={video.id} data={video}/>
        ))
      }
    </div>
  );
}

export default App;
