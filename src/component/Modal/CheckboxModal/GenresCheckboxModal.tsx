import React, { Fragment } from "react";
import { Form, Modal } from "react-bootstrap";
type Props = {
  show: boolean;
  onCheckBoxChecked: Function;
  onClose: Function;
  selectedValues:number[]
};
function GenresCheckboxModal(props: Props) {
  const show = props.show;
  const onClose = props.onClose;
  const onCheckBoxChecked = props.onCheckBoxChecked;
  const selectedValues = props.selectedValues;
  return (
    <Fragment>
      <Modal
        show={show}
        onHide={() => {
          onClose();
        }}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="black">Filter by genres</Modal.Title>
        </Modal.Header>
        <Modal.Body className="black">
          <div className="row justify-content-center">
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Point-and-click"
                defaultChecked={selectedValues.includes(2)}
                onClick={() => {
                  onCheckBoxChecked(2);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Fighting"
                defaultChecked={selectedValues.includes(4)}
                onClick={() => {
                  onCheckBoxChecked(4);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Shooter"
                defaultChecked={selectedValues.includes(5)}
                onClick={() => {
                  onCheckBoxChecked(5);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Music"
                defaultChecked={selectedValues.includes(7)}
                onClick={() => {
                  onCheckBoxChecked(7);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Platform"
                defaultChecked={selectedValues.includes(8)}
                onClick={() => {
                  onCheckBoxChecked(8);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Puzzle"
                defaultChecked={selectedValues.includes(9)}
                onClick={() => {
                  onCheckBoxChecked(9);
                }}
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Racing"
                defaultChecked={selectedValues.includes(10)}
                onClick={() => {
                  onCheckBoxChecked(10);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Real Time Strategy (RTS)"
                defaultChecked={selectedValues.includes(11)}
                onClick={() => {
                  onCheckBoxChecked(11);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Role-playing (RPG)"
                defaultChecked={selectedValues.includes(12)}
                onClick={() => {
                  onCheckBoxChecked(12);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Simulator"
                defaultChecked={selectedValues.includes(13)}
                onClick={() => {
                  onCheckBoxChecked(13);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Sport"
                defaultChecked={selectedValues.includes(14)}
                onClick={() => {
                  onCheckBoxChecked(14);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Strategy"
                defaultChecked={selectedValues.includes(15)}
                onClick={() => {
                  onCheckBoxChecked(15);
                }}
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Turn-based strategy (TBS)"
                defaultChecked={selectedValues.includes(16)}
                onClick={() => {
                  onCheckBoxChecked(16);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Tactical"
                defaultChecked={selectedValues.includes(24)}
                onClick={() => {
                  onCheckBoxChecked(24);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Hack and slash"
                defaultChecked={selectedValues.includes(25)}
                onClick={() => {
                  onCheckBoxChecked(25);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Quiz"
                defaultChecked={selectedValues.includes(26)}
                onClick={() => {
                  onCheckBoxChecked(26);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Pinball"
                defaultChecked={selectedValues.includes(30)}
                onClick={() => {
                  onCheckBoxChecked(30);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Adventure"
                defaultChecked={selectedValues.includes(31)}
                onClick={() => {
                  onCheckBoxChecked(31);
                }}
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Indie"
                defaultChecked={selectedValues.includes(32)}
                onClick={() => {
                  onCheckBoxChecked(32);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Arcade"
                defaultChecked={selectedValues.includes(33)}
                onClick={() => {
                  onCheckBoxChecked(33);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Visual Novel"
                defaultChecked={selectedValues.includes(34)}
                onClick={() => {
                  onCheckBoxChecked(34);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Card & Board Game"
                defaultChecked={selectedValues.includes(35)}
                onClick={() => {
                  onCheckBoxChecked(35);
                }}
              />
              <Form.Check
                type="checkbox"
                label="MOBA"
                defaultChecked={selectedValues.includes(36)}
                onClick={() => {
                  onCheckBoxChecked(36);
                }}
              />
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

export default GenresCheckboxModal;
