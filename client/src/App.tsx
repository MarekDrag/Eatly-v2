import { Layout } from '@layout/index';
import { ShoppingList } from '@pages/ShoppingList';

const App = () => {
  return (
    <div className="App">
      <Layout board={<ShoppingList />} />
    </div>
  );
};

export default App;
