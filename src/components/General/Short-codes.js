import React from "react";
// import Footer from './shared/Footer'
// import Header from './shared/Header'
import Navbarleft from "../shared/Navbarleft";
import { Link } from "react-router-dom";

function ShortCodes() {
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
            <li>Short Codes</li>
          </ul>
        </div>
      </div>
      {/* <!-- //products-breadcrumb -->
<!-- banner --> */}
      <div className="banner">
        <Navbarleft />
        <div className="w3l_banner_nav_right">
          {/* <!--typography-page --> */}
          <div className="typo">
            <h3 className="title">Short Codes</h3>
            <div className="grid_3 grid_4">
              <h3 className="hdg">Headings</h3>
              <div className="bs-example">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <h1 id="h1.-bootstrap-heading">
                          h1. Bootstrap heading
                          <Link
                            className="anchorjs-link"
                            href="#h1.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon"></span>
                          </Link>
                        </h1>
                      </td>
                      <td className="type-info">Semibold 36px</td>
                    </tr>
                    <tr>
                      <td>
                        <h2 id="h2.-bootstrap-heading">
                          h2. Bootstrap heading
                          <Link
                            className="anchorjs-link"
                            href="#h2.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon"></span>
                          </Link>
                        </h2>
                      </td>
                      <td className="type-info">Semibold 30px</td>
                    </tr>
                    <tr>
                      <td>
                        <h3 id="h3.-bootstrap-heading">
                          h3. Bootstrap heading
                          <Link
                            className="anchorjs-link"
                            href="#h3.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon"></span>
                          </Link>
                        </h3>
                      </td>
                      <td className="type-info">Semibold 24px</td>
                    </tr>
                    <tr>
                      <td>
                        <h4 id="h4.-bootstrap-heading">
                          h4. Bootstrap heading
                          <Link
                            className="anchorjs-link"
                            href="#h4.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon"></span>
                          </Link>
                        </h4>
                      </td>
                      <td className="type-info">Semibold 18px</td>
                    </tr>
                    <tr>
                      <td>
                        <h5 id="h5.-bootstrap-heading">
                          h5. Bootstrap heading
                          <Link
                            className="anchorjs-link"
                            href="#h5.-bootstrap-heading"
                          >
                            <span className="anchorjs-icon"></span>
                          </Link>
                        </h5>
                      </td>
                      <td className="type-info">Semibold 14px</td>
                    </tr>
                    <tr>
                      <td>
                        <h6>h6. Bootstrap heading</h6>
                      </td>
                      <td className="type-info">Semibold 12px</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid_3 grid_5">
              <h3>Buttons</h3>
              <h1>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h1>
              <h2>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h2>
              <h3>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h3>
              <h4>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h4>
              <h5>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h5>
              <h6>
                <Link to="#">
                  <span className="label label-default">Default</span>
                </Link>
                <Link to="#">
                  <span className="label label-primary">Primary</span>
                </Link>
                <Link to="#">
                  <span className="label label-success">Success</span>
                </Link>
                <Link to="#">
                  <span className="label label-info">Info</span>
                </Link>
                <Link to="#">
                  <span className="label label-warning">Warning</span>
                </Link>
                <Link to="#">
                  <span className="label label-danger">Danger</span>
                </Link>
              </h6>
            </div>

            <div className="grid_3 grid_5">
              <h3>Progress Bars</h3>
              <div className="tab-content">
                {/* <div className="tab-pane active" id="domprogress">
						<div className="progress">    
							<div className="progress-bar progress-bar-primary" style="width: 20%"></div>
						</div>
						<p>Info with <code>progress-bar-info</code> className.</p>
						<div className="progress">    
							<div className="progress-bar progress-bar-info" style="width: 60%"></div>
						</div>
						<p>Success with <code>progress-bar-success</code> className.</p>
						<div className="progress">
							<div className="progress-bar progress-bar-success" style="width: 30%"></div>
						</div>
						<p>Warning with <code>progress-bar-warning</code> className.</p>
						<div className="progress">
							<div className="progress-bar progress-bar-warning" style="width: 70%"></div>
						</div>
						<p>Danger with <code>progress-bar-danger</code> className.</p>
						<div className="progress">
							<div className="progress-bar progress-bar-danger" style="width: 50%"></div>
						</div>
						<p>Inverse with <code>progress-bar-inverse</code> className.</p>
						<div className="progress">
							<div className="progress-bar progress-bar-inverse" style="width: 40%"></div>
						</div>
						<p>Inverse with <code>progress-bar-inverse</code> className.</p>
						<div className="progress">
							<div className="progress-bar progress-bar-success" style="width: 35%"><span className="sr-only">35% Complete (success)</span></div>
							<div className="progress-bar progress-bar-warning" style="width: 20%"><span className="sr-only">20% Complete (warning)</span></div>
							<div className="progress-bar progress-bar-danger" style="width: 10%"><span className="sr-only">10% Complete (danger)</span></div>
						</div>
					</div> */}
              </div>
            </div>
            <div className="grid_3 grid_5">
              <h3>Alerts</h3>
              <div className="alert alert-success" role="alert">
                <strong>Well done!</strong> You successfully read this important
                alert message.
              </div>
              <div className="alert alert-info" role="alert">
                <strong>Heads up!</strong> This alert needs your attention, but
                it's not super important.
              </div>
              <div className="alert alert-warning" role="alert">
                <strong>Warning!</strong> Best check yo self, you're not looking
                too good.
              </div>
              <div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Change a few things up and try
                submitting again.
              </div>
            </div>
            <div className="grid_3 grid_5">
              <h3>Pagination</h3>
              <div className="col-md-6">
                <nav>
                  <ul className="pagination pagination-lg">
                    <li>
                      <Link to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li>
                      <Link to="#">5</Link>
                    </li>
                    <li>
                      <Link to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul className="pagination">
                    <li>
                      <Link to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li>
                      <Link to="#">5</Link>
                    </li>
                    <li>
                      <Link to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <nav>
                  <ul className="pagination pagination-sm">
                    <li>
                      <Link to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">1</Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li>
                      <Link to="#">5</Link>
                    </li>
                    <li>
                      <Link to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-6">
                <ul className="pagination pagination-lg">
                  <li className="disabled">
                    <Link to="#">
                      <i className="fa fa-angle-left">«</i>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-angle-right">»</i>
                    </Link>
                  </li>
                </ul>
                <nav>
                  <ul className="pagination">
                    <li className="disabled">
                      <Link to="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                      </Link>
                    </li>
                    <li className="active">
                      <Link to="#">
                        1 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">2</Link>
                    </li>
                    <li>
                      <Link to="#">3</Link>
                    </li>
                    <li>
                      <Link to="#">4</Link>
                    </li>
                    <li>
                      <Link to="#">5</Link>
                    </li>
                    <li>
                      <Link to="#" aria-label="Next">
                        <span aria-hidden="true">»</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <ul className="pagination pagination-sm">
                  <li className="disabled">
                    <Link to="#">
                      <i className="fa fa-angle-left">«</i>
                    </Link>
                  </li>
                  <li className="active">
                    <Link to="#">1</Link>
                  </li>
                  <li>
                    <Link to="#">2</Link>
                  </li>
                  <li>
                    <Link to="#">3</Link>
                  </li>
                  <li>
                    <Link to="#">4</Link>
                  </li>
                  <li>
                    <Link to="#">5</Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-angle-right">»</i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="grid_3 grid_5">
              <h3>Breadcrumbs</h3>
              <ol className="breadcrumb">
                <li className="active">Home</li>
              </ol>
              <ol className="breadcrumb">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li className="active">Library</li>
              </ol>
              <ol className="breadcrumb">
                <li>
                  <Link to="#">Home</Link>
                </li>
                <li>
                  <Link to="#">Library</Link>
                </li>
                <li className="active">Data</li>
              </ol>
            </div>
            <div className="grid_3 grid_5">
              <h3>Badges</h3>
              <div className="col-md-6">
                <p>
                  Add modifier classNamees to change the appearance of a badge.
                </p>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>classNamees</th>
                      <th>Badges</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>No modifiers</td>
                      <td>
                        <span className="badge">42</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-primary</code>
                      </td>
                      <td>
                        <span className="badge badge-primary">1</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-success</code>
                      </td>
                      <td>
                        <span className="badge badge-success">22</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-info</code>
                      </td>
                      <td>
                        <span className="badge badge-info">30</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-warning</code>
                      </td>
                      <td>
                        <span className="badge badge-warning">412</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <code>.badge-danger</code>
                      </td>
                      <td>
                        <span className="badge badge-danger">999</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <p>
                  Easily highlight new or unread items with the{" "}
                  <code>.badge</code> className
                </p>
                <div className="list-group list-group-alternate">
                  <Link to="#" className="list-group-item">
                    <span className="badge">201</span>{" "}
                    <i className="ti ti-email"></i> Inbox{" "}
                  </Link>
                  <Link to="#" className="list-group-item">
                    <span className="badge badge-primary">5021</span>{" "}
                    <i className="ti ti-eye"></i> Profile visits{" "}
                  </Link>
                  <Link to="#" className="list-group-item">
                    <span className="badge">14</span>{" "}
                    <i className="ti ti-headphone-alt"></i> Call{" "}
                  </Link>
                  <Link to="#" className="list-group-item">
                    <span className="badge">20</span>{" "}
                    <i className="ti ti-comments"></i> Messages{" "}
                  </Link>
                  <Link to="#" className="list-group-item">
                    <span className="badge badge-warning">14</span>{" "}
                    <i className="ti ti-bookmark"></i> Bookmarks{" "}
                  </Link>
                  <Link to="#" className="list-group-item">
                    <span className="badge badge-danger">30</span>{" "}
                    <i className="ti ti-bell"></i> Notifications{" "}
                  </Link>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="grid_3 grid_5">
              <h3>Wells</h3>
              <div className="well">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration
              </div>
              <div className="well">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here
              </div>
              <div className="well">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </div>
            </div>
            <h3 className="bars">Unordered List</h3>
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <h3 className="bars">Ordered List</h3>
            <ol>
              <li className="list-group-item1">Cras justo odio</li>
              <li className="list-group-item1">Dapibus ac facilisis in</li>
              <li className="list-group-item1">Morbi leo risus</li>
              <li className="list-group-item1">Porta ac consectetur ac</li>
              <li className="list-group-item1">Vestibulum at eros</li>
            </ol>
            <h3 className="bars">Forms</h3>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-addon" id="basic-addon2">
                @example.com
              </span>
            </div>
            <div className="input-group">
              <span className="input-group-addon">$</span>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <span className="input-group-addon">.00</span>
            </div>
            <div className="input-group input-group-lg">
              <span className="input-group-addon" id="sizing-addon1">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="sizing-addon1"
              />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="sizing-addon2">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="sizing-addon2"
              />
            </div>
            <div className="input-group input-group-sm">
              <span className="input-group-addon" id="sizing-addon3">
                @
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-describedby="sizing-addon3"
              />
            </div>
            <div className="row">
              <div className="col-lg-6 in-gp-tl">
                <div className="input-group">
                  <span className="input-group-addon">
                    <input type="checkbox" aria-label="..." />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="..."
                  />
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
              <div className="col-lg-6 in-gp-tb">
                <div className="input-group">
                  <span className="input-group-addon">
                    <input type="radio" aria-label="..." />
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="..."
                  />
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="row">
              <div className="col-lg-6 in-gp-tl">
                <div className="input-group">
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Go!
                    </button>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
              <div className="col-lg-6 in-gp-tb">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                      Go!
                    </button>
                  </span>
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="row">
              <div className="col-lg-6 in-gp-tl">
                <div className="input-group">
                  <div className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="#">Action</Link>
                      </li>
                      <li>
                        <Link to="#">Another action</Link>
                      </li>
                      <li>
                        <Link to="#">Something else here</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="#">Separated link</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /btn-group --> */}
                  <input
                    type="text"
                    className="form-control"
                    aria-label="..."
                  />
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
              <div className="col-lg-6 in-gp-tb">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="..."
                  />
                  <div className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-right">
                      <li>
                        <Link to="#">Action</Link>
                      </li>
                      <li>
                        <Link to="#">Another action</Link>
                      </li>
                      <li>
                        <Link to="#">Something else here</Link>
                      </li>
                      <li role="separator" className="divider"></li>
                      <li>
                        <Link to="#">Separated link</Link>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- /btn-group --> */}
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
            </div>
            {/* <!-- /.row --> */}
            <div className="page-header">
              <h3 className="bars">Tables</h3>
            </div>
            <h2 className="typoh2">Default styles</h2>
            <p>
              For basic stylinglight padding and only horizontal add the base
              className <code>.table</code> to any <code>&lt;table&gt;</code>.
            </p>
            <div className="bs-docs-example">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr className="bs-docs-separator" />
            <p>
              Add any of the following classNamees to the <code>.table</code>{" "}
              base className.
            </p>
            <p>
              Adds zebra-striping to any table row within the{" "}
              <code>&lt;tbody&gt;</code> via the <code>:nth-child</code> CSS
              selector (not available in IE7-8).
            </p>
            <div className="bs-docs-example">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Add borders and rounded corners to the table.</p>
            <div className="bs-docs-example">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowspan="2">1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@getbootstrap</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Enable a hover state on table rows within a{" "}
              <code>&lt;tbody&gt;</code>.
            </p>
            <div className="bs-docs-example">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- //typography-page --> */}
        </div>
        <div className="clearfix"></div>
      </div>
      {/* <!-- //banner --> */}
      {/* <Footer/> */}
    </>
  );
}

export default ShortCodes;
