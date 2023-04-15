import { Layout } from '@layout/Layout';
import { Recipes } from '@pages/Recipes';

const App = () => {
  return (
    <div className="App">
      <Layout board={<Recipes />} />
    </div>
  );
};

export default App;
