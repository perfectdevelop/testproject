import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/gallery/img1.jpg";
import img2 from "../images/gallery/img2.jpg";
import img3 from "../images/gallery/img3.jpg";
import img4 from "../images/gallery/img4.jpg";
import img5 from "../images/gallery/img5.jpg";
import img6 from "../images/gallery/img6.jpg";
import img7 from "../images/gallery/img7.jpg";
import img8 from "../images/gallery/img8.jpg";
import img9 from "../images/gallery/img9.jpg";

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer style1">
        <div
          className="footer-top"
          style={{
            backgroundImage: "url(" + "/images/background/bg6.jpg" + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-5 footer-col-4">
                <div className="widget widget_getintuch">
                  <h6 className="m-b15 h6 text-uppercase">TRAVEL</h6>
                  <div className="dlab-separator bg-white"></div>
                  <ul className="info-contact">
                    <li>
                      <span>
                        <i className="fa fa-map-marker	"></i> Brodway Road 234,
                        New York
                      </span>
                    </li>

                    <li>
                      <span>
                        <i className="fa fa-phone"></i> Mobile: +00 1234 456789{" "}
                        <br />
                        +10 1234 456789
                      </span>
                    </li>

                    <li>
                      <span>
                        <i className="fa fa-envelope-o"></i> Mail:
                        info@travel.com
                      </span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-fax"></i> Fax: 000 123 2294 089
                      </span>
                    </li>
                  </ul>
                </div>
                <ul className="list-inline">
                  <li>
                    <Link to={""} className="site-button facebook sharp">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="site-button google-plus sharp">
                      <i className="fa fa-google-plus"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="site-button linkedin sharp">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to={""} className="site-button twitter sharp">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-7 footer-col-4">
                <div className="widget  widget_tag_cloud">
                  <h6 className="m-b15 h6 text-uppercase">Tag</h6>
                  <div className="dlab-separator bg-white"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                <div className="widget widget_getintuch">
                  <h6 className="m-b15 h6 text-uppercase">Contact us</h6>
                  <div className="dlab-separator bg-white"></div>
                  <div className="search-bx">
                    <div className="dzFormMsg"></div>
                    <form
                      method="post"
                      className="dzForm"
                      action="script/contact.php"
                    >
                      <input type="hidden" value="Contact" name="dzToDo" />
                      <div className="input-group">
                        <input
                          name="dzName"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="input-group">
                        <input
                          name="dzEmail"
                          type="email"
                          className="form-control"
                          required
                          placeholder="Your Email Address"
                        />
                      </div>
                      <div className="input-group">
                        <textarea
                          name="dzMessage"
                          rows="4"
                          className="form-control"
                          required
                          placeholder="Your Message..."
                        ></textarea>
                      </div>
                      <div className="input-group">
                        <button
                          name="submit"
                          type="submit"
                          value="Submit"
                          className="site-button "
                        >
                          {" "}
                          <span>Submit</span>{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 footer-col-4">
                <div className="widget widget_gallery">
                  <h6 className="m-b15 h6 text-uppercase">GALLERY</h6>
                  <div className="dlab-separator bg-white"></div>
                  <ul className="clearfix mfp-gallery">
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img1} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img2} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img3} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img4} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img5} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img6} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img7} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img8} alt="" />
                      </Link>{" "}
                    </li>
                    <li className="img-effect2">
                      <Link
                        to={""}
                        className="mfp-link"
                        title="Title Come Here"
                      >
                        <img src={img9} alt="" />
                      </Link>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 text-left">
                {" "}
                <span>Copyright © 2021 Ali.K</span>{" "}
              </div>
              <div className="col-lg-6 col-md-6 text-right ">
                <span>
                  {" "}
                  Design With <i className="fa fa-heart text-primary heart"></i>{" "}
                  By Ali.K{" "}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
