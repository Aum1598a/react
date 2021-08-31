import './App.css';
import AppHeader from './AppHeader';
import Reactimg from './Reactimg';
import Kon from './Kon';


function App() {
  return (
    <div className="App">
    
      <AppHeader/>
        <div className="app-grid">
          <div className= "react1">
            <img className= "react00"src= "/imge/react00.jpg"/>
          </div>
          <div className= "txt-react">
              <h2>Projects </h2> 
          </div>
          
        </div>
        <div className="app-grid1">
          <Reactimg title="Summer House" thumbnailUrl="/imge/react01.jpg"/>
          <Reactimg title="Brick House" thumbnailUrl="/imge/react02.jpg"/>
          <Reactimg title="Renovated" thumbnailUrl="/imge/react03.jpg"/>
          <Reactimg title="Barn House" thumbnailUrl="/imge/react04.jpg"/>
          <Reactimg title="Summer House" thumbnailUrl="/imge/react05.jpg"/>
          <Reactimg title="Brick House" thumbnailUrl="/imge/react06.jpg"/>
          <Reactimg title="Renovated" thumbnailUrl="/imge/react07.jpg"/>
          <Reactimg title="Barn House" thumbnailUrl="/imge/react08.jpg"/>
        
        
        </div>
        <div className= "txt-react1"><h2>About </h2> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div>
        
        <div className="app-grid1"> 

        <Kon thumbnailUrl="/imge/kon00.jpg" title="John Doe" title1="CEO & Founder" title2="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." title3="Contact"/>
        <Kon thumbnailUrl="/imge/kon01.jpg" title="John Doe" title1="Architect" title2="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." title3="Contact"/> 
        <Kon thumbnailUrl="/imge/kon02.jpg" title="Mike Ross" title1="Architect" title2="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." title3="Contact"/>
        <Kon thumbnailUrl="/imge/kon03.jpg" title="Dan Star" title1="Architect" title2="Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum." title3="Contact"/>
        
        </div>
        <div className="app-grid">
          <div className= "react1">
            <img className= "react00"src= "/imge/react09.jpg"/>
          </div>
          
        </div>     
    </div>
  );
}

export default App;
