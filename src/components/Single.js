import React from "react";
// import Footer from './shared/Footer'
// import Header from './shared/Header'
import Navbarleft from "./shared/Navbarleft";
import { Link } from "react-router-dom";

function Single() {
  return (
    <>
      {/* <Header/> */}
      {/* <!-- products-breadcrumb --> */}
      <div className="products-breadcrumb">
        <div className="container">
          <ul>
            <li>
              <i className="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Single Page</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          <div className="w3l_banner_nav_right_banner3">
            <h3>
              Best Deals For New Products<span className="blink_me"></span>
            </h3>
          </div>
          <div className="agileinfo_single">
            <h5>charminar pulao basmati rice 5 kg</h5>
            <div className="col-md-4 agileinfo_single_left">
              <img
                id="example"
                src="images/76.png"
                alt=" "
                className="img-responsive"
              />
            </div>
            <div className="col-md-8 agileinfo_single_right">
              <div className="rating1">
                <span className="starRating">
                  <input id="rating5" type="radio" name="rating" value="5" />
                  <label for="rating5">5</label>
                  <input id="rating4" type="radio" name="rating" value="4" />
                  <label for="rating4">4</label>
                  <input
                    id="rating3"
                    type="radio"
                    name="rating"
                    value="3"
                    checked
                  />
                  <label for="rating3">3</label>
                  <input id="rating2" type="radio" name="rating" value="2" />
                  <label for="rating2">2</label>
                  <input id="rating1" type="radio" name="rating" value="1" />
                  <label for="rating1">1</label>
                </span>
              </div>
              <div className="w3agile_description">
                <h4>Description :</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div className="snipcart-item block">
                <div className="snipcart-thumb agileinfo_single_right_snipcart">
                  <h4>
                    $21.00 <span>$25.00</span>
                  </h4>
                </div>
                <div className="snipcart-details agileinfo_single_right_details">
                  <form action="#" method="post">
                    <fieldset>
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input type="hidden" name="business" value=" " />
                      <input
                        type="hidden"
                        name="item_name"
                        value="pulao basmati rice"
                      />
                      <input type="hidden" name="amount" value="21.00" />
                      <input
                        type="hidden"
                        name="discount_amount"
                        value="1.00"
                      />
                      <input type="hidden" name="currency_code" value="USD" />
                      <input type="hidden" name="return" value=" " />
                      <input type="hidden" name="cancel_return" value=" " />
                      <input
                        type="submit"
                        name="submit"
                        value="Add to cart"
                        className="button"
                      />
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner -->
<!-- brands --> */}
      <div className="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_popular">
        <div className="container">
          <h3>Popular Brands</h3>
          <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>food</h6>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/5.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>knorr instant soup (100 gm)</p>
                          <h4>
                            $3.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="knorr instant soup"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/6.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>chings noodles (75 gm)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="chings noodles"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/7.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>lahsun sev (150 gm)</p>
                          <h4>
                            $3.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="lahsun sev"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/8.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>premium bake rusk (300 gm)</p>
                          <h4>
                            $5.00 <span>$7.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="premium bake rusk"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>vegetables & fruits</h6>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/9.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>fresh spinach (palak)</p>
                          <h4>
                            $2.00 <span>$3.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh spinach"
                              />
                              <input type="hidden" name="amount" value="2.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/10.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>fresh mango dasheri (1 kg)</p>
                          <h4>
                            $5.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh mango dasheri"
                              />
                              <input type="hidden" name="amount" value="5.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="tag">
                    <img
                      src="../Assets/images/tag.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/11.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>fresh apple red (1 kg)</p>
                          <h4>
                            $6.00 <span>$8.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh apple red"
                              />
                              <input type="hidden" name="amount" value="6.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/12.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>fresh broccoli (500 gm)</p>
                          <h4>
                            $4.00 <span>$6.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="fresh broccoli"
                              />
                              <input type="hidden" name="amount" value="4.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
          <div className="w3ls_w3l_banner_nav_right_grid1">
            <h6>beverages</h6>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/13.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>mixed fruit juice (1 ltr)</p>
                          <h4>
                            $3.00 <span>$4.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="mixed fruit juice"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/14.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>prune juice - sunsweet (1 ltr)</p>
                          <h4>
                            $4.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="prune juice - sunsweet"
                              />
                              <input type="hidden" name="amount" value="4.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="tag">
                    <img
                      src="../Assets/images/tag.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/15.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>coco cola zero can (330 ml)</p>
                          <h4>
                            $3.00 <span>$5.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="coco cola zero can"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 w3ls_w3l_banner_left">
              <div className="hover14 column">
                <div className="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                  <div className="agile_top_brand_left_grid_pos">
                    <img
                      src="../Assets/images/offer.png"
                      alt=" "
                      className="img-responsive"
                    />
                  </div>
                  <div className="agile_top_brand_left_grid1">
                    <figure>
                      <div className="snipcart-item block">
                        <div className="snipcart-thumb">
                          <Link to="single.html">
                            <img
                              src="../Assets/images/16.png"
                              alt=" "
                              className="img-responsive"
                            />
                          </Link>
                          <p>sprite bottle (2 ltr)</p>
                          <h4>
                            $3.00 <span>$4.00</span>
                          </h4>
                        </div>
                        <div className="snipcart-details">
                          <form action="#" method="post">
                            <fieldset>
                              <input type="hidden" name="cmd" value="_cart" />
                              <input type="hidden" name="add" value="1" />
                              <input type="hidden" name="business" value=" " />
                              <input
                                type="hidden"
                                name="item_name"
                                value="sprite bottle"
                              />
                              <input type="hidden" name="amount" value="3.00" />
                              <input
                                type="hidden"
                                name="discount_amount"
                                value="1.00"
                              />
                              <input
                                type="hidden"
                                name="currency_code"
                                value="USD"
                              />
                              <input type="hidden" name="return" value=" " />
                              <input
                                type="hidden"
                                name="cancel_return"
                                value=" "
                              />
                              <input
                                type="submit"
                                name="submit"
                                value="Add to cart"
                                className="button"
                              />
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
      {/* <!-- //brands --> */}
      {/* <Footer/> */}
    </>
  );
}

export default Single;
