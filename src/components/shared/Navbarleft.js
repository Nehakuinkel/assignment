import React from 'react'
import { Link } from 'react-router-dom'

function Navbarleft() {
  return (
    <>
        <div className="w3l_banner_nav_left">
			<nav className="navbar nav_bottom">
			 {/* <!-- Brand and toggle get grouped for better mobile display --> */}
			  <div className="navbar-header nav_2">
				  <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				  </button>
			   </div> 
			   {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
				<div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
					<ul className="nav navbar-nav nav_1">
						<li><Link to="/products">Branded Foods</Link></li>
						<li><Link to="/household">Households</Link></li>
						<li className="dropdown mega-dropdown active">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Veggies & Fruits<span className="caret"></span></Link>				
							<div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
								<div className="w3ls_vegetables">
									<ul>	
										<li><Link to="/vegetables">Vegetables</Link></li>
										<li><Link to="/vegetables">Fruits</Link></li>
									</ul>
								</div>                  
							</div>				
						</li>
						<li><Link to="/kitchen">Kitchen</Link></li>
						<li><Link to="/shortcodes">Short Codes</Link></li>
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<span className="caret"></span></Link>
							<div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
								<div className="w3ls_vegetables">
									<ul>
										<li><Link to="/drinks">Soft Drinks</Link></li>
										<li><Link to="/drinks">Juices</Link></li>
									</ul>
								</div>                  
							</div>	
						</li>
						<li><Link to="/pet">Pet Food</Link></li>
						<li className="dropdown">
							<Link to="#" className="dropdown-toggle" data-toggle="dropdown">Frozen Foods<span className="caret"></span></Link>
							<div className="dropdown-menu mega-dropdown-menu w3ls_vegetables_menu">
								<div className="w3ls_vegetables">
									<ul>
										<li><Link to="/frozen">Frozen Snacks</Link></li>
										<li><Link to="/frozen">Frozen Nonveg</Link></li>
									</ul>
								</div>                  
							</div>	
						</li>
						<li><Link to="/bread">Bread & Bakery</Link></li>
					</ul>
				 </div>
                 {/* <!-- /.navbar-collapse --> */}
			</nav>
		</div>
    </>
  )
}

export default Navbarleft