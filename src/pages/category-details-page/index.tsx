import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb';
import { ProductType } from '../../types';
import useApi from './../../hooks/useApi';

export type CategoryDetailsParmasType = {
  code: string;
};

function CategoryDetailsPage() {
  const routeParams = useParams<CategoryDetailsParmasType>();
  const api = useApi();
  const [initialized, setInitialized] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  console.log(products);
  if (initialized === false) {
    const params = {
      page: 1,
      itemsPerPage: 30,
      'productTaxons.taxon.code': routeParams.code,
      'order[price]': 'asc',
    };

    api
      .get<ProductType[]>('shop/products', { params })
      .then((response: AxiosResponse<ProductType[]>) => {
        setProducts(response.data);
        setInitialized(true);
      });

    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <div id="cssmenu">
                <ul>
                  <li className="has-sub active">
                    <a>CATEGORY</a>
                    <ul>
                      <li>
                        <a href="#">Smart Phones</a>
                      </li>
                      <li>
                        <a href="#">Cell Phones</a>
                      </li>
                      <li className="last">
                        <a href="#">Android Phones</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb10 alignright">
                  <form>
                    <div className="select-option form-group">
                      <select name="select" className="form-control">
                        <option value="">Select</option>
                        <option value="">Best Match</option>
                        <option value="">Low Price</option>
                        <option value="">High Price</option>
                      </select>
                    </div>
                  </form>
                </div>
              </div>
              <div className="row">
                {products.map((product) => (
                  <div
                    className="col-lg-4 col-md-4 col-sm-6 col-xs-12 mb30"
                    key={product.id}
                  >
                    <div className="product-block">
                      <div className="product-img">
                        <img src="/images" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            {product?.name}
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1100
                          </a>
                          <a href="#" className="discounted-price">
                            $1400
                          </a>
                          <span className="offer-price">20%off</span>
                        </div>
                        <div className="shopping-btn">
                          <a href="#" className="product-btn btn-like">
                            <i className="fa fa-heart"></i>
                          </a>
                          <a href="#" className="product-btn btn-cart">
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="st-pagination">
                    <ul className="pagination">
                      <li>
                        <a href="#" aria-label="previous">
                          <span aria-hidden="true">Previous</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="#">1</a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryDetailsPage;
