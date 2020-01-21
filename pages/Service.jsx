import { Row, Col } from "react-simple-flex-grid";

export default () => (
  <div id="service">
    <div className="service-bg">
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <hr style={{ width: "200px" }} />
      <Row>
        <Col md={3}>
          <div style={{ margin: "15px 0 0 20px" }}>
            <img
              style={{ width: "100%", height: "40vh" }}
              src="/static/image/sunflower.jpg"
              alt="Sun Flower"
            />
            <h2 style={{ textAlign: "center", margin: "0px", color: "navy" }}>
              Lavender
            </h2>
            <h4
              style={{
                textAlign: "justify",
                margin: "0px",
                color: "gray"
              }}
            >
              Lavender is an herb native to northern Africa and the mountainous
              regions of the Mediterranean.
            </h4>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ margin: "15px 0 0 20px" }}>
            <img
              style={{ width: "100%", height: "40vh" }}
              src="/static/image/rose.jpg"
              alt="Rose"
            />
            <h2 style={{ textAlign: "center", margin: "0px", color: "navy" }}>
              Rose
            </h2>
            <h4
              style={{
                textAlign: "justify",
                margin: "0px",
                color: "gray"
              }}
            >
              A rose is a woody perennial flowering plant of the genus Rosa, in
              the family Rosaceae,
            </h4>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ margin: "15px 0 0 20px" }}>
            <img
              style={{ width: "100%", height: "40vh" }}
              src="/static/image/zakawar.jpg"
              alt="Sun Flower"
            />
            <h2 style={{ textAlign: "center", margin: "0px", color: "navy" }}>
              SakaWar
            </h2>
            <h4
              style={{
                textAlign: "justify",
                margin: "0px",
                color: "gray"
              }}
            >
              SakaWar is an herb native to northern Africa and the mountainous
              regions of the Mediterranean.
            </h4>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ margin: "15px 20px 0 20px" }}>
            <img
              style={{ width: "100%", height: "40vh" }}
              src="/static/image/kyar.jpg"
              alt="Lotus"
            />
            <h2 style={{ textAlign: "center", margin: "0px", color: "navy" }}>
              Lotus
            </h2>
            <h4
              style={{
                textAlign: "justify",
                margin: "0px",
                color: "gray"
              }}
            >
              Lotus is a type of floating aquatic plant of the genus Nelumbo.
            </h4>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);
