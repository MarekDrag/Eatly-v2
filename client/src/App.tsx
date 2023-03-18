import { Nav } from '@components/Nav';
import { SideNav } from '@components/SideNav';
import { Background } from '@ui/AppBackground/AppBackground';

const App = () => {
  return (
    <div className="App">
      <Background>
        <SideNav />
        <Nav />
      </Background>
    </div>
  );
};

export default App;
