import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 bg-light">
      <div className="row text-center footer-row">

  <div className="col-lg-4 col-md-4 col-sm-12">

        
    <h1 className="footer-heading mt-5">TMH</h1>
    <p className="footer-text text-dark">The Movie HUb</p>
    <a href="#"><i class="fa fa-facebook-official footer-icons"></i></a>
   <a href="#"><i class="fa fa-youtube-square footer-icons"></i></a>
   <a href="#"><i class="fa fa-instagram footer-icons"></i></a>
  <a href="#"><i class="fa fa-twitter footer-icons"></i></a>
   <a href="#"><i class="fa fa-linkedin-square footer-icons"></i></a>
   <a href="#"><i class="fa fa-envelope footer-icons"></i></a>
  </div>
  <div className="col-lg-4 col-md-4 col-sm-12 ">

     <h4 className="mt-5">Countries</h4>
     <h6 className="text-danger">America</h6>
      <h6 className="text-danger">India</h6>
       <h6 className="text-danger">England</h6>
        <h6 className="text-danger">Itlay</h6>
         <h6 className="text-danger">Australia</h6>
         <h6 className="text-danger">Iceland</h6>
     

  </div>
  <div className="col-lg-4 col-md-4 col-sm-12 ">

     <h4 className="mt-5">Categories</h4>
     <h6 className="text-danger">Drama</h6>
      <h6 className="text-danger">Comedy</h6>
       <h6 className="text-danger">Crime</h6>
        <h6 className="text-danger">Adventour</h6>
         <h6 className="text-danger">Thriller</h6>
         <h6 className="text-danger">Horror</h6>
     

  </div>

      </div></div>
    </>
  );
};

export default Footer;
