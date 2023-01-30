import Breadcrumb from '../../components/breadcrumb';
import { useParams } from 'react-router-dom';
import { RouteCodeParamsType } from '../../types';
import { useEffect } from 'react';

const ProductDetailsPage = () => {
  const routeParams = useParams<RouteCodeParamsType>();
  useEffect(() => {});
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

      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box">
                <div className="box-body">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                      <ul id="demo1_thumbs" className="slideshow_thumbs">
                        <li>
                          <a href="">
                            <div className="">
                              <img src="" alt="" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className=" thumb-img">
                              <img src="" alt="" />
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <div className=" thumb-img">
                              <img src="" alt="" />
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                      <div id="slideshow"></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="product-single">
                        <h2>Google Pixel </h2>
                        <div className="product-rating">
                          <span>
                            <i className="fa fa-star"></i>
                          </span>
                          <span>
                            <i className="fa fa-star"></i>
                          </span>
                          <span>
                            <i className="fa fa-star"></i>
                          </span>
                          <span>
                            <i className="fa fa-star"></i>
                          </span>
                          <span>
                            <i className="fa fa-star-o"></i>
                          </span>
                          <span className="text-secondary">
                            &nbsp;(4.8 Review Stars)
                          </span>
                        </div>
                        <p
                          className="product-price"
                          style={{ fontSize: '38px' }}
                        >
                          $1100
                          <b style={{ textDecoration: 'line-through' }}>
                            $1300
                          </b>
                        </p>
                        <p>
                          12.2 MP Rear | 8 MP Front Camera, 4GB RAM, 2700 mAh
                          battery, Android 8.0, Qualcomm Snapdragon 835,
                          Fingerprint Sensor
                        </p>
                        <div className="product-quantity">
                          <h5>Quantity</h5>
                          <div className="quantity mb20">
                            <input
                              type="number"
                              className="input-text qty text"
                              step="1"
                              min="1"
                              max="6"
                              name="quantity"
                              value="1"
                              title="Qty"
                              pattern="[0-9]*"
                            />
                          </div>
                        </div>
                        <button type="submit" className="btn btn-default">
                          <i className="fa fa-shopping-cart"></i>&nbsp;Add to
                          cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box-head scroll-nav">
                <div className="head-title">
                  {' '}
                  <a className="page-scroll active" href="#product">
                    Product Details
                  </a>
                  <a className="page-scroll" href="#rating">
                    Ratings &amp; Reviews
                  </a>
                  <a className="page-scroll" href="#review">
                    Add Your Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box" id="product">
                <div className="box-body">
                  <div className="highlights">
                    <h4 className="product-small-title">Highlights</h4>
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul className="arrow">
                          <li>12.2 MP Rear | 8 MP Front Camera </li>
                          <li>4GB RAM </li>
                          <li>2700 mAh battery</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul className="arrow">
                          <li>Android 8.0 </li>
                          <li>Qualcomm Snapdragon 835</li>
                          <li>Fingerprint Sensor</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="highlights">
                    <h4 className="product-small-title">Specification</h4>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4>General</h4>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                        <ul>
                          <li>Brand</li>
                          <li>Model Number </li>
                          <li>Body Material</li>
                          <li>Sim Size</li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 mb30">
                        <ul>
                          <li style={{ color: '#1c1e1e' }}>Google Pixel </li>
                          <li style={{ color: '#1c1e1e' }}>Google XYZ</li>
                          <li style={{ color: '#1c1e1e' }}>
                            Metal and Polycarbonate
                          </li>
                          <li style={{ color: '#1c1e1e' }}>Micro</li>
                        </ul>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4>Display</h4>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul>
                          <li>Screen Size </li>
                          <li>Display Resolution </li>
                          <li>Pixel Density</li>
                          <li>Screen Protection </li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul>
                          <li style={{ color: '#1c1e1e' }}>5 inch </li>
                          <li style={{ color: '#1c1e1e' }}>
                            1280 X 720 Pixels
                          </li>
                          <li style={{ color: '#1c1e1e' }}>294 PPI</li>
                          <li style={{ color: '#1c1e1e' }}>Gorilla Glass 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="rating">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h3 className="head-title">Rating &amp; Reviews</h3>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <div className="rating-review">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h1>4.8</h1>
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <p className="text-secondary">
                            20 Ratings &amp; 10 Reviews
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h2>80%</h2>
                          <p className="text-secondary">
                            Based on 20 Recommendations.
                          </p>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                          <h4>Have you used this product?</h4>
                          <a href="#" className="btn btn-primary btn-sm">
                            review
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="box">
                  <div className="box-head">
                    <h3 className="head-title">Customer Reviews</h3>
                  </div>
                  <div className="box-body">
                    <div className="row">
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <p className="reviews-text">
                            By{' '}
                            <span className="text-default">Michael Byrd</span>{' '}
                            on 14 August 2017{' '}
                          </p>
                          <p>
                            Mauris aliquet augue seenim finibusat consectetur
                            metus congutiam convallis aliquam conguen ornare
                            exdolornon scelerisque nisl fringilla ut. Maecenas
                            faucibus purus id elementum laoreen a hendrerit
                            ested laoreet nibh vel lacus sagittis, eu laoreet
                            metus viverraed rutrum.
                          </p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="divider-line"></div>
                        </div>
                      </div>
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <p className="reviews-text">
                            By <span className="text-default">Marc Scott</span>{' '}
                            on 13 August 2017{' '}
                          </p>
                          <p>
                            Vivamus molestie enim ut libero condimentumvel
                            malesuada mivulpuorem ipsum dolor sitamet
                            consectetur adipiscing elinec semper orcinec
                            ultricies ultricieunc velitest variussed suscipit
                            sed dignissim acanteras aliquet magna ipsum dictum
                            vulputate dolor suscipit non.{' '}
                          </p>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="divider-line"></div>
                        </div>
                      </div>
                      <div className="customer-reviews">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="product-rating">
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star"></i>
                            </span>
                            <span>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <p className="reviews-text">
                            By{' '}
                            <span className="text-default">
                              William Cassidy
                            </span>{' '}
                            on 13 August 2017{' '}
                          </p>
                          <p>
                            Suspendisse viverra nibh vel mattis aliqueroin
                            ultricies vitaeex quis sceleriuisque eleifend
                            convallis leoorbi ultricies turpis nullanec accumsan
                            mi molestie nonaecenas cursus massa quis condimentum
                            venenati uspendisse idmassaut lacus dignissim
                            vestibuonec malesuada ultricies euismod.{' '}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="review">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="box">
                    <div className="box-head">
                      <h3 className="head-title">Add A Reviews</h3>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="review-form">
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="review-rating">
                              <h5>Your Rating : &nbsp;</h5>
                              <div className="star-rate" id="rateYo"></div>
                            </div>
                          </div>
                          <form>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label className="control-label sr-only "></label>
                                <input
                                  id="name"
                                  type="text"
                                  className="form-control"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label className="control-label sr-only "></label>
                                <input
                                  id="email"
                                  type="text"
                                  className="form-control"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-6 col-xs-12">
                              <div className="form-group">
                                <label className="control-label sr-only "></label>
                                <textarea
                                  className="form-control"
                                  id="textarea"
                                  name="textarea"
                                  placeholder="Enter your Reviews"
                                ></textarea>
                              </div>
                              <button
                                id="submit"
                                name="singlebutton"
                                className="btn btn-primary"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="box-head">
                <h3 className="head-title">Related Product</h3>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-body">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Google Pixel <strong>(128GB, Black)</strong>
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

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          HTC U Ultra <strong>(64GB, Blue)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1200
                        </a>
                        <a href="#" className="discounted-price">
                          $1700
                        </a>
                        <span className="offer-price">10%off</span>
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

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Samsung Galaxy Note 8
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1500
                        </a>
                        <a href="#" className="discounted-price">
                          $2000
                        </a>
                        <span className="offer-price">40%off</span>
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

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 mb30">
                  <div className="product-block">
                    <div className="product-img">
                      <img src="" alt="" />
                    </div>
                    <div className="product-content">
                      <h5>
                        <a href="#" className="product-title">
                          Vivo V5 Plus <strong>(Matte Black)</strong>
                        </a>
                      </h5>
                      <div className="product-meta">
                        <a href="#" className="product-price">
                          $1500
                        </a>
                        <a href="#" className="discounted-price">
                          $2000
                        </a>
                        <span className="offer-price">15%off</span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
