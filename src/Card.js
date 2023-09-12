import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Card = () => {
  const data = [
    {
      heading: "  OXYGEN",
      text: "100",
      unit: "PSIG",
      button: "Heigh",
    },
    {
      heading: "MEDICAL AIR",
      text: "100",
      unit: "PSIG",
      button: "Low",
    },
    {
      heading: "CARBON DIOXIDE",
      text: "100",
      unit: "PSIG",
      button: "Normal",
    },
    {
      heading: "NITROUS OXIDE",
      text: "100",
      unit: "PSIG",
      button: "Normal",
    },
    {
      heading: "NITOGEN",
      text: "100",
      unit: "PSIG",
      button: "Heigh",
    },
    {
      heading: "WAGD",
      text: "100",
      unit: "PSIG",
      button: "Low",
    },
    {
      heading: "MEDVAC",
      text: "100",
      unit: "PSIG",
      button: "Normal",
    },
    {
      heading: "INSTRUNT AIR",
      text: "100",
      unit: "PSIG",
      button: "Low",
    },
  ];

  console.log("data", data);
  return (
    <div>
      <Container>
        <Row className="parent_div">
          <Col
            className={`container ${
              data.length === 8
                ? "container_8"
                : data.length === 7
                ? "container_8"
                : data.length === 6
                ? "container_5_6"
                : data.length === 5
                ? "container_5_6"
                : data.length === 4
                ? "container_4"
                : "container_1_2_3"
            }`}
          >
            {data.map((item) => {
              return (
                <div>
                  <div
                    className={`card ${
                      item.button === "Normal"
                        ? "greenBoarder"
                        : item.button === "Heigh"
                        ? "redBoarder"
                        : "greyBoarder"
                    }`}
                  >
                    <div
                      className={`card_heading ${
                        item.button === "Normal"
                          ? "green"
                          : item.button === "Heigh"
                          ? "red"
                          : "grey"
                      }`}
                    >
                      <h3
                        className={`card_heading_text ${
                          item.heading === "MEDVAC"
                            ? "colorBlack"
                            : item.heading === "MEDVAC"
                            ? "colorBlack"
                            : "colorWhite"
                        }`}
                      >
                        {item.heading}
                      </h3>
                    </div>
                    <h3 className="card_text d-inline"> {item.text}</h3>
                    <div className="card_unit">{item.unit}</div>
                    <div
                      className={`button ${
                        item.button === "Normal"
                          ? "bgGreen"
                          : item.button === "Heigh"
                          ? "bgRed"
                          : "bgGrey"
                      }`}
                    >
                      {item.button}
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
