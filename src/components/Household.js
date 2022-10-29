import React from "react";
// import Footer from './shared/Footer'
// import Header from './shared/Header'
import Navbarleft from "./shared/Navbarleft";
import { Link } from "react-router-dom";

function Household() {
  return (
    <>
      {/* <Header/> */}
      {/* <!-- products-breadcrumb --> */}
      <div class="products-breadcrumb">
        <div class="container">
          <ul>
            <li>
              <i class="fa fa-home" aria-hidden="true"></i>
              <Link to="/">Home</Link>
              <span>|</span>
            </li>
            <li>Households</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div class="banner">
        <Navbarleft />
        <div class="w3l_banner_nav_right">
          <div class="w3l_banner_nav_right_banner4">
            <h3>
              Best Deals For New Products<span class="blink_me"></span>
            </h3>
          </div>
          <div class="w3ls_w3l_banner_nav_right_grid w3ls_w3l_banner_nav_right_grid_sub">
            <h3>Household Products</h3>
            <div class="w3ls_w3l_banner_nav_right_grid1">
              <h6>cleaning</h6>
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/17.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>dishwash gel, lemon (1.5 ltr)</p>
                            <h4>
                              $8.00 <span>$10.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="dishwash gel, lemon"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="8.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/18.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>dish wash bar (500 gm)</p>
                            <h4>
                              $2.00 <span>$4.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="dish wash bar"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="2.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/19.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>air freshener (50 gm)</p>
                            <h4>
                              $3.00 <span>$5.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="air freshener"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="3.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/20.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>toilet cleaner expert (1 ltr)</p>
                            <h4>
                              $6.00 <span>$7.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="toilet cleaner expert"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="6.00"
                                />
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
                                  class="button"
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
              <div class="clearfix"> </div>
            </div>
            <div class="w3ls_w3l_banner_nav_right_grid1">
              <h6>utensils</h6>
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/21.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>princeware packaging container pack (6 no's)</p>
                            <h4>
                              $8.00 <span>$10.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="princeware container"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="8.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/22.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>signoraware container center press (900 ml)</p>
                            <h4>
                              $5.00 <span>$8.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="container center press"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="5.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="tag">
                      <img
                        src="../Assets/images/tag.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single">
                              <img
                                src="../Assets/images/23.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>ship stainless steel sauce pan single (1 pc)</p>
                            <h4>
                              $6.00 <span>$8.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="stainless steel pan"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="6.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/24.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>omega stainless steel puri dabba (1 pc)</p>
                            <h4>
                              $6.00 <span>$8.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="stainless steel dabba"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="6.00"
                                />
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
                                  class="button"
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
              <div class="clearfix"> </div>
            </div>
            <div class="w3ls_w3l_banner_nav_right_grid1">
              <h6>Pet Food</h6>
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/25.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>food for adult dogs (80 gms)</p>
                            <h4>
                              $3.00 <span>$4.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="food for adult dogs"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="3.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/26.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>young adult dogs (1.2 kg)</p>
                            <h4>
                              $6.00 <span>$10.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="young adult dogs"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="6.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="tag">
                      <img
                        src="../Assets/images/tag.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/27.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>cat food ocean fish (1.4 kg)</p>
                            <h4>
                              $6.00 <span>$7.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="cat food ocean fish"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="6.00"
                                />
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
                                  class="button"
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
              <div class="col-md-3 w3ls_w3l_banner_left">
                <div class="hover14 column">
                  <div class="agile_top_brand_left_grid w3l_agile_top_brand_left_grid">
                    <div class="agile_top_brand_left_grid_pos">
                      <img
                        src="../Assets/images/offer.png"
                        alt=" "
                        class="img-responsive"
                      />
                    </div>
                    <div class="agile_top_brand_left_grid1">
                      <figure>
                        <div class="snipcart-item block">
                          <div class="snipcart-thumb">
                            <Link to="single.html">
                              <img
                                src="../Assets/images/28.png"
                                alt=" "
                                class="img-responsive"
                              />
                            </Link>
                            <p>chicken in jelly can (400 gm)</p>
                            <h4>
                              $7.00 <span>$9.00</span>
                            </h4>
                          </div>
                          <div class="snipcart-details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input
                                  type="hidden"
                                  name="business"
                                  value=" "
                                />
                                <input
                                  type="hidden"
                                  name="item_name"
                                  value="chicken in jelly can"
                                />
                                <input
                                  type="hidden"
                                  name="amount"
                                  value="7.00"
                                />
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
                                  class="button"
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
              <div class="clearfix"> </div>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}
      {/* <Footer/> */}
    </>
  );
}

export default Household;
