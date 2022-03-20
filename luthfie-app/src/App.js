import { useEffect } from 'react';

const getPlaylist = async () => {
  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/aryapradipta9/e6492383477803b233916e01f36d5465/raw/66942c739d66d3774303f84071696aa865a07077/single-sample.json'
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error);
  }
};

const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY;

function App() {
  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    getPlaylist();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Document</title>
      </head>
    
      <body>
        <div class="container">
          <div class="playlist">
            <h1>Create Playlist</h1>
            <div class="form-playlist">
              <form >
                <p>Tittle</p>
                <input type="text" id="title" />
                <p>Description</p>
                <textarea name="isi" id="desc" cols="15" rows="7"></textarea>
              </form>
                <button >submit</button>
            </div>
          </div>
    
    
        <div class="description-artist">
          <h1> Top Songs </h1>
          <div class="baris-1">
           <div class="card-one">
             <img src="https://pbs.twimg.com/media/FM2LBHhVQAQGgA1.jpg" alt="Avatar" />
                <h4> My Boy</h4> 
                <p> Billie Ellish </p>
                <h5> album : Don't Smile at me </h5>
                <h5>
                <button class="submit button1" type="button">Add to Playlist</button>			
                </h5>
            </div>
     
          <div class="card-one">
            <img src="https://i.scdn.co/image/ab6761610000e5ebc36dd9eb55fb0db4911f25dd" alt="Avatar" />
                <h4> Blast Off </h4> 
                <p> Bruno MARS </p>
                <h5> album : Silk Sonic</h5>
                <h5>
                <button class="submit button1" type="button">Add to Playlist</button>			
                </h5>
          </div>
          <div class="card-one">
            <img src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/c7/a2/39/c7a2398b-0844-c70c-f15a-08f86653f5f1/jacket_KSCL02615B00Z_550.jpg/600x600bf-60.jpg" alt="Avatar" />
                <h4> Silhouette </h4> 
                <p> Kana-Boon </p>
                <h5> album : TIME</h5>
                <h5>
                <button class="submit button1" type="button">Add to Playlist</button>			
                </h5>
          </div>  
      </div>
    </div>
    </div>
    </body>
    </html>
    );
}

export default App;
