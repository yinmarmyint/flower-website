import { Row, Col } from "react-simple-flex-grid";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export default () => (
  <div id="customerSay">
    <div className="say-container">
      <h1>Customer Says</h1>
      <hr />
      <Slider {...settings}>
        <Row>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "32vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img1.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "32vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img2.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "30vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img1.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "30vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img2.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "30vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img1.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
          <Col md={6}>
            <div
              style={{
                border: "1px solid gray",
                margin: "35px 40px",
                width: "90%",
                height: "30vh"
              }}
            >
              <Col md={4}>
                <div className="d-flex justify-content-center m-4">
                  <img
                    style={{ borderRadius: "50%" }}
                    src="/static/image/img2.jpg"
                    alt="Image 1"
                  />
                </div>
              </Col>
              <Col md={8}>
                <i class="fa fa-quote-left" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  cons entum tempor. Duis porta lectus ut dui consequat,
                </p>
                <hr style={{ float: "left", width: "30px" }} />
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "35px",
                    fontSize: "13px",
                    fontWeight: "bold"
                  }}
                >
                  JOHNATHAN DOE DESIGNER, THEME DESIGNER
                </p>
              </Col>
            </div>
          </Col>
        </Row>
      </Slider>
    </div>
  </div>
);
