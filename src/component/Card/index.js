import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "../Card/card.css";
import AssignTestModal from '../Modal/assign-test-modal';

const Index = () => {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="card-main-div">
              <div className="card-header-div">
                <h3 className="card-heading">
                  📦 Order test kits for your practice
                </h3>
                <p className="card-short-text">
                  For face to face consultations
                </p>
              </div>
              <div className="card-contain-div">
                <p className="card-contain-heading">Here you can:</p>
                <ul>
                  <li>Buy test-kits to stock or restock your practice.</li>
                  <li>Manage your locations if your practice is multi-site.</li>
                </ul>
              </div>
              <div className="card-action-div">
                <Button className="bg-orange-color outline-orange-color fs-14 fw-bold">
                  Order test kits
                </Button>
                <Button
                  variant="link"
                  className="orange-color hide-text-decoration d-flex align-items-center fs-14"
                >
                  <b>See ordered kits</b>
                  <i className="icon-list2 ms-2"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="card-main-div">
              <div className="card-header-div">
                <h3 className="card-heading">
                  📌 Assign test kits to patients
                </h3>
                <p className="card-short-text">
                  For face to face consultations.
                </p>
              </div>
              <div className="card-contain-div">
                <p className="card-contain-heading">Here you can:</p>
                <ul>
                  <li>Assign a test-kit to your patient.</li>
                </ul>
                <p className="card-desc">
                  All our test-kits have a unique code on the box (and inside) -
                  just link this to your patient's details and we'll do the
                  rest.
                </p>
              </div>
              <div className="card-action-div">
                <Button className="bg-orange-color outline-orange-color fs-14 fw-bold" onClick={() => setModalShow(true)}>
                  Assign test kits
                </Button>
                <Button
                  variant="link"
                  className="orange-color hide-text-decoration d-flex align-items-center fs-14"
                >
                  <b>See patients</b>
                  <i className="icon-list2 ms-2"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="card-main-div">
              <div className="card-header-div">
                <h3 className="card-heading">
                  🚚 Send test kits directly to patients
                </h3>
                <p className="card-short-text">
                  For telemedicine/remote consultations
                </p>
              </div>
              <div className="card-contain-div">
                <p className="card-contain-heading">Here you can:</p>
                <ul>
                  <li>Buy test kits to be sent directly to patients.</li>
                </ul>
              </div>
              <div className="card-action-div">
                <Button className="bg-orange-color outline-orange-color fs-14 fw-bold">
                  Send test kits
                </Button>
                <Button
                  variant="link"
                  className="orange-color hide-text-decoration d-flex align-items-center fs-14"
                >
                  <b>See ordered kits</b>
                  <i className="icon-list2 ms-2"></i>
                </Button>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="card-main-div">
              <div className="card-header-div">
                <h3 className="card-heading">
                  📃 View test results for your patients
                </h3>
                <p className="card-short-text">For all patient results</p>
              </div>
              <div className="card-contain-div">
                <p className="card-contain-heading">Here you can:</p>
                <ul>
                  <li>View your patients' latest test results</li>
                  <li>View your patients' historic test results</li>
                  <li>Download PDFs to supply to your patients</li>
                  <li>Search your patients' test results</li>
                </ul>
              </div>
              <div className="card-action-div">
                <Button className="bg-orange-color outline-orange-color fs-14 fw-bold">
                  View test results
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Modal */}
        <AssignTestModal
             show={modalShow}
             onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  );
};

export default Index;
