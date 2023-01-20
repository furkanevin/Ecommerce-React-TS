import { useDispatch, useSelector } from 'react-redux/es/exports';
import HomePage from './pages/home-page/index';
import { RootState } from './redux/store';
import useApi from './hooks/useApi';
import { setCategories } from './redux/categorySlice';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/index';
import Header from './components/header/index';
import CategoryDetailsPage from './pages/category-details-page';

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
      <BrowserRouter>
        <Header />

        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/category-details/:code"
            element={<CategoryDetailsPage />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
