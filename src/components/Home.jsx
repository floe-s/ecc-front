import { useState } from "react";

const Home = () => {
  const [videos, setVideos] = useState([
    { title: "Clase 1", body: "lorem ipsum...", author: "Carol", iframe: <iframe className = "iframe-preview"
    width="750"
    height="400"
    src="https://www.youtube.com/embed/Ybi9rWZWfJk"
    title="Como funciona a qualificação do DUCLE?"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen>
    </iframe>, id: 1 },
    { title: "Clase 2", body: "lorem ipsum...", author: "Carol", id: 2 },
    { title: "Clase 3", body: "lorem ipsum...", author: "Carol", id: 3 },
  ]);

  setVideos;


  return (
    <div className="home">
      <h2>Capacitaciones online de Español Argentino</h2>
      {videos.map((video) => (
        <div className="video-preview" key={video.id}>
          <h2>{video.title}</h2>
          <p>Prof. {video.author}</p>
          <p>{ video.iframe }</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

/*const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName('luigi'); 
    setAge(30);

    <p>{ name } is { age } years old</p>
      <button onClick={handleClick}>Click</button>

  const Home = () => {
  const [videos, setVideos] = useState([
    { title: 'Clase 1', body: 'lorem ipsum...', author: 'Carol', id: 1 },
    { title: 'Clase 2', body: 'lorem ipsum...', author: 'Carol', id: 2 },
    { title: 'Clase 3', body: 'lorem ipsum...', author: 'Carol', id: 3 },
  ]);

  return (
    <div className="home">
      <h2>Capacitaciones online de Español Argentino</h2>
      {videos.map((video) => (
        <div className="video-preview" key={video.id}>
          <h2>{ video.title }</h2>
          <p>Prof. { video.author }</p>
        </div>
      ))}
    </div>
  );
};

{videos.map((video) => (
        <div className="video-preview" key={video.id}>
          <h2>{ video.title }</h2>
          <p>Prof. { video.author }</p>
        </div>
      ))}
  }; */
