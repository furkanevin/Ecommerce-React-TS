import { useSelector } from 'react-redux/es/exports';
import HomePage from './pages/home-page/index';
import { RootState } from './redux/store';

function App() {
  const categoryState = useSelector((state: RootState) => state.category);
  console.log(categoryState);

  if (!categoryState.initialized)
    return (
      <div className="App">
        <HomePage />
      </div>
    );
}

export default App;
