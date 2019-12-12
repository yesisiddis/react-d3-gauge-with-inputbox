import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ReactSpeedometer from "react-d3-speedometer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Gauge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };

    this.handleGaugeValueChange = this.handleGaugeValueChange.bind(this);
  }

  handleGaugeValueChange(e) {
    console.log(1);

    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="center">
        <h1 className="title">Diesel Generator 1</h1>

        <Container className="p-3">
          <Row>
            <Col>
              <div className="speedometer">
                <ReactSpeedometer
                  maxValue={120}
                  ringWidth={20}
                  customSegmentStops={[
                    0,
                    12,
                    24,
                    36,
                    48,
                    60,
                    72,
                    84,
                    96,
                    108,
                    120
                  ]}
                  segmentColors={[
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#007fff",
                    "#007fff",
                    "#FAFAFA",
                    "#FAFAFA",
                    "#FAFAFA"
                  ]}
                  needleTransitionDuration={9000}
                  needleTransition="easeElastic"
                  currentValueText="${value} kW"
                  value={this.state.value}
                />
              </div>
            </Col>
            <Col>
              <form className="form-settings" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label
                      className="label"
                      htmlFor="value"
                      style={{ color: "white" }}
                    >
                      Change Gauge Value:{" "}
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="value"
                      id="value"
                      placeholder="0"
                      onChange={this.handleGaugeValueChange}
                      value={this.state.keywords}
                    />
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Gauge;

const rootElement = document.getElementById("root");
ReactDOM.render(<Gauge />, rootElement);
