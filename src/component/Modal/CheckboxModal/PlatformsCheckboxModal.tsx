import React, { Fragment } from "react";
import { Form, Modal } from "react-bootstrap";
type Props = {
  show: boolean;
  onCheckBoxChecked: Function;
  onClose: Function;
  selectedValues: number[];
};
function PlatformsCheckboxModal(props: Props) {
  const show = props.show;
  const onClose = props.onClose;
  const onCheckBoxChecked = props.onCheckBoxChecked;
  const selectedValues = props.selectedValues;
  return (
    <Fragment>
      <Modal
        centered
        show={show}
        onHide={() => {
          onClose();
        }}
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title className="black">Filter by Platforms</Modal.Title>
        </Modal.Header>
        <Modal.Body className="black">
          <div className="row justify-content-center">
            <div className="col-6 col-md-6 col-lg-3">
              <h3 className="black">Playstation </h3>
              <Form.Check
                type="checkbox"
                label="PlayStation"
                defaultChecked={selectedValues.includes(7)}
                onClick={() => {
                  onCheckBoxChecked(7);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation 2"
                defaultChecked={selectedValues.includes(8)}
                onClick={() => {
                  onCheckBoxChecked(8);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation 3"
                defaultChecked={selectedValues.includes(9)}
                onClick={() => {
                  onCheckBoxChecked(9);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation 4"
                defaultChecked={selectedValues.includes(48)}
                onClick={() => {
                  onCheckBoxChecked(48);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation 5"
                defaultChecked={selectedValues.includes(167)}
                onClick={() => {
                  onCheckBoxChecked(167);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation Vita"
                defaultChecked={selectedValues.includes(46)}
                onClick={() => {
                  onCheckBoxChecked(46);
                }}
              />
              <Form.Check
                type="checkbox"
                label="PlayStation Portable"
                defaultChecked={selectedValues.includes(38)}
                onClick={() => {
                  onCheckBoxChecked(38);
                }}
              />
              <hr></hr>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <h3 className="black">Xbox </h3>
              <Form.Check
                type="checkbox"
                label="Xbox"
                defaultChecked={selectedValues.includes(11)}
                onClick={() => {
                  onCheckBoxChecked(11);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Xbox 360"
                defaultChecked={selectedValues.includes(12)}
                onClick={() => {
                  onCheckBoxChecked(12);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Xbox One"
                defaultChecked={selectedValues.includes(49)}
                onClick={() => {
                  onCheckBoxChecked(49);
                }}
              />
              <hr></hr>
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <h3 className="black">Nintendo</h3>
              <Form.Check
                type="checkbox"
                label="Nintendo 64"
                defaultChecked={selectedValues.includes(4)}
                onClick={() => {
                  onCheckBoxChecked(4);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Wii"
                defaultChecked={selectedValues.includes(5)}
                onClick={() => {
                  onCheckBoxChecked(5);
                }}
              />
              <Form.Check
                type="checkbox"
                label="NES"
                defaultChecked={selectedValues.includes(18)}
                onClick={() => {
                  onCheckBoxChecked(18);
                }}
              />
              <Form.Check
                type="checkbox"
                label="SNES"
                defaultChecked={selectedValues.includes(19)}
                onClick={() => {
                  onCheckBoxChecked(19);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Nintendo DS"
                defaultChecked={selectedValues.includes(20)}
                onClick={() => {
                  onCheckBoxChecked(20);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Nintendo GameCube"
                defaultChecked={selectedValues.includes(21)}
                onClick={() => {
                  onCheckBoxChecked(21);
                }}
              />

              <Form.Check
                type="checkbox"
                label="Game Boy Advance"
                defaultChecked={selectedValues.includes(24)}
                onClick={() => {
                  onCheckBoxChecked(24);
                }}
              />

              <Form.Check
                type="checkbox"
                label="Nintendo 3DS"
                defaultChecked={selectedValues.includes(37)}
                onClick={() => {
                  onCheckBoxChecked(37);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Wii U"
                defaultChecked={selectedValues.includes(41)}
                onClick={() => {
                  onCheckBoxChecked(41);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Nintendo Switch"
                defaultChecked={selectedValues.includes(130)}
                onClick={() => {
                  onCheckBoxChecked(130);
                }}
              />
              <hr></hr>
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <h3 className="black">PC</h3>
              <Form.Check
                type="checkbox"
                label="PC"
                defaultChecked={selectedValues.includes(6)}
                onClick={() => {
                  onCheckBoxChecked(6);
                }}
              />
              <hr></hr>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-success  black"
            onClick={() => {
              onClose();
            }}
          >
            OK
          </button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default PlatformsCheckboxModal;
