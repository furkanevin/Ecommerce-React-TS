import { useDispatch, useSelector } from 'react-redux/es/exports';
import HomePage from './pages/home-page/index';
import { RootState } from './redux/store';
import useApi from './hooks/useApi';
import { setCategories } from './redux/categorySlice';

function App() {
  const categoryState = useSelector((state: RootState) => state.category);
  const api = useApi();
  const dispatch = useDispatch();
  if (categoryState.initialized === false) {
    const params = {
      page: 1,
      itemsPerPage: 30,
    };
    api.get('shop/taxons', { params }).then((res: any) => {
      dispatch(setCategories(res.data));
    });
  }
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
