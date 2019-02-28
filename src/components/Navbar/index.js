import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import "./index.css"

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar className="navbar fixed-top navbar-expvand-lg scrolling-navbar" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">TTGN</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/library">Rage's Library</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/scratching_post">Huntress's Scratching Post</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/tea_palace">Dani's Tea Palace</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search-Example" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;

{/* <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </div> */}
//   <nav class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
// <div class="container">

//   <a class="navbar-brand" href="#top">
//     <strong>NK</strong>
//   </a>

//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
//     aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">

//     <ul class="navbar-nav mr-auto">
//       <li class="nav-item">
//         <a class="nav-link"><Link to="/">Home</Link>
//           <span class="sr-only">(current)</span>
//         </a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link"><Link to="/library">Rage's Library</Link></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link"><Link to="/topics">Topics</Link></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#webprojects">Web Projects</a>
//       </li>
//     </ul>
{/* Right  */ }
//         <ul class="navbar-nav nav-flex-icons">
//           <li class="nav-item">
//             <a href="https://www.instagram.com/toastmodernist/p" class="nav-link" target="_blank">
//               <i class="fab fa-instagram"></i>
//             </a>
//           </li>
//           <li class="nav-item">

//           </li>
//         </ul>

//       </div>

//     </div>

//   </nav>
