import Header from './../../components/header/index';
import Footer from './../../components/footer/index';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
function HomePage() {
  return (
    <>
      <Header />

      <Splide
        options={{
          type: 'loop',
          pagination: true,
          height: '520px',
        }}
      >
        <SplideSlide>
          <img src="/assets/images/slider_1.jpg" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/slider_2.jpg" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="/assets/images/slider_3.jpg" alt="" />
        </SplideSlide>
      </Splide>
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 7.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 8.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="showcase-block active">
                <div className="display-logo alignleft">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 9.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {' '}
                    <img
                      src="assets/images/asset 10.png"
                      alt=""
                      style={{ paddingLeft: '80px' }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="showcase-block ">
                <div className="display-logo ">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 11.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="assets/images/asset 12.png" alt="" />{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="assets/images/asset 13.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="assets/images/asset 14.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 15.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 16.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    <img src="assets/images/asset 17.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 18.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="showcase-block">
                <div className="display-logo ">
                  <a href="#">
                    {' '}
                    <img src="assets/images/asset 19.png" alt="" />
                  </a>
                </div>
                <div className="showcase-img">
                  <a href="#">
                    <img src="assets/images/asset 20.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">Latest Product</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 21.png" alt="" />
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 22.png" alt="" />
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 23.png" alt="" />
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 24.png" alt="" />
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
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">Best Seller Product</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="product-carousel">
          <div className="box-body">
            <div className="row">
              <div className="owl-carousel owl-two owl-theme">
                <div className="item">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 25.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Apple iPhone 6 <strong>(32 GB, Gold)</strong>
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1700
                          </a>
                          <a href="#" className="discounted-price">
                            $2000
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
                </div>

                <div className="item">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 26.png" alt="" />{' '}
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Apple iPhone 7 <strong>(256 GB, Black)</strong>{' '}
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1400
                          </a>
                          <a href="#" className="discounted-price">
                            <>$1800</>
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
                </div>

                <div className="item">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 27.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Apple iPhone 6S <strong>(32GB, Gold)</strong>{' '}
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1300
                          </a>
                          <a href="#" className="discounted-price">
                            <>$2000</>
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
                </div>

                <div className="item">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 28.png" alt="" />
                      </div>
                      <div className="product-content">
                        <h5>
                          <a href="#" className="product-title">
                            Apple iPhone X <strong>(64 GB, Grey)</strong>
                          </a>
                        </h5>
                        <div className="product-meta">
                          <a href="#" className="product-price">
                            $1200
                          </a>
                          <a href="#" className="discounted-price">
                            <>$2000</>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="box">
              <div className="box-head">
                <h3 className="head-title">Featured Product</h3>
              </div>
              <div className="box-body">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 23.png" alt="" />
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
                            <>$2000</>
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 24.png" alt="" />
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
                            <>$2000</>
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 21.png" alt="" />
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
                            <>$1400</>
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

                  <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <div className="product-block">
                      <div className="product-img">
                        <img src="assets/images/asset 24.png" alt="" />
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
                            <>$1700</>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="newsletter-wrapper">
              <div className="row">
                <div className="col-lg-offset-5 col-lg-6 col-md-offset-5 col-md-6 col-sm-offset-5 col-sm-6 col-xs-12">
                  <div className="newsletter-form">
                    <h1>
                      Subscribe To <strong>Get Discount &amp; Offers</strong>
                    </h1>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search for..."
                      />
                      <span className="input-group-btn">
                        <button type="button" className="btn btn-primary">
                          Subscribe
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-default pdt40 pdb40">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-credit-card"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Safe Payment</h3>
                  <p>
                    Praesent orci dolor, pretium vitae hendrerit convallisutes
                    orcgravida bibendum.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-users"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">24/7 Help Center</h3>
                  <p>
                    Aliquam molestie urnased one pharetra vestibulum Interdum et
                    malesuada fames.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left feature-circle">
                <div className="feature-outline-icon">
                  <i className="fa fa-rotate-left "></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Free &amp; Easy Return</h3>
                  <p>
                    Vivamus semper nisnesbla accumsan dui justo esw finibus
                    turpis serom.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="feature-left">
                <div className="feature-outline-icon">
                  <i className="fa fa-dollar"></i>
                </div>
                <div className="feature-content">
                  <h3 className="text-white">Great Value</h3>
                  <p>
                    Morbi necmi turpiulm tristiq ueipsm inodiopharetr amal esuat
                    erdumetalesuada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
