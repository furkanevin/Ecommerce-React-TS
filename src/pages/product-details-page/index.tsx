import Breadcrumb from '../../components/breadcrumb';
import { useParams } from 'react-router-dom';
import { RouteCodeParamsType } from '../../types';

const ProductDetailsPage = () => {
  const routeParams = useParams<RouteCodeParamsType>();
  return (
    <>
      <Breadcrumb
        items={[
          { url: '/', title: 'Home' },
          { url: '/product', title: 'Product' },
          {
            url: '/product-details/' + routeParams.code,
            title: routeParams.code as string,
          },
        ]}
      />
      <div>ProductDetailsPage</div>
    </>
  );
};

export default ProductDetailsPage;
