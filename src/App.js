import './App.css';
import Agency from './components/Agency/Agency';
import Amish from './components/Amish/Amish';
import Antenna from './components/Antenna/Antenna';
import Morty from './components/Morty/Morty';
import Rick from './components/Rick/Rick';
import Summer from './components/Summer/Summer';

function App() {
  return (
    <div className="App">
      
      <header>
            <div className='headerTop'>
                <Rick></Rick>

                <Morty></Morty>

                <Agency></Agency>
            </div>

            <div className='headerBottom'>
                <Summer></Summer>
        
                <Amish></Amish>
        
                <Antenna></Antenna>
              </div>
        </header>

    </div>
  );
}

export default App;
