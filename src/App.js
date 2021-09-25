
import './App.css';
import imag1 from './imageInSrc.jpg';
import './style.css';

function App() {
  return (
   

<div style={{border:"solid 1px black ",maxWidth:"100vw"}}>

 <h1 className="title red">Your name here</h1>

 <br />

 <img className="d-block w-100" src={imag1} alt="first " />
 <br />
<img src={"/imageInPublic.jpg"} alt="second" />



<br/>
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4"/ >

</video>
</div>

  
  );
}

export default App;
