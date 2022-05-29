import React, { Fragment } from "react";
import { Form, Modal } from "react-bootstrap";
type Props = {
  show: boolean;
  onCheckBoxChecked: Function;
  onClose: Function;
  selectedValues: number[];
};
function ThemesCheckboxModal(props: Props) {
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
              <Form.Check
                type="checkbox"
                label="Action"
                defaultChecked={selectedValues.includes(1)}
                onClick={() => {
                  onCheckBoxChecked(1);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Fantasy"
                defaultChecked={selectedValues.includes(17)}
                onClick={() => {
                  onCheckBoxChecked(17);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Science fiction"
                defaultChecked={selectedValues.includes(18)}
                onClick={() => {
                  onCheckBoxChecked(18);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Horror"
                defaultChecked={selectedValues.includes(19)}
                onClick={() => {
                  onCheckBoxChecked(19);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Thriller"
                defaultChecked={selectedValues.includes(20)}
                onClick={() => {
                  onCheckBoxChecked(20);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Survival"
                defaultChecked={selectedValues.includes(21)}
                onClick={() => {
                  onCheckBoxChecked(21);
                }}
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Historical"
                defaultChecked={selectedValues.includes(22)}
                onClick={() => {
                  onCheckBoxChecked(22);
                }}
              />

              <Form.Check
                type="checkbox"
                label="Stealth"
                defaultChecked={selectedValues.includes(23)}
                onClick={() => {
                  onCheckBoxChecked(23);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Comedy"
                defaultChecked={selectedValues.includes(27)}
                onClick={() => {
                  onCheckBoxChecked(27);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Business"
                defaultChecked={selectedValues.includes(28)}
                onClick={() => {
                  onCheckBoxChecked(28);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Drama"
                defaultChecked={selectedValues.includes(31)}
                onClick={() => {
                  onCheckBoxChecked(31);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Non-fiction"
                defaultChecked={selectedValues.includes(32)}
                onClick={() => {
                  onCheckBoxChecked(32);
                }}
              />
            </div>

            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="Sandbox"
                defaultChecked={selectedValues.includes(33)}
                onClick={() => {
                  onCheckBoxChecked(33);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Educational"
                defaultChecked={selectedValues.includes(34)}
                onClick={() => {
                  onCheckBoxChecked(34);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Kids"
                defaultChecked={selectedValues.includes(35)}
                onClick={() => {
                  onCheckBoxChecked(35);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Open world"
                defaultChecked={selectedValues.includes(38)}
                onClick={() => {
                  onCheckBoxChecked(38);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Warfare"
                defaultChecked={selectedValues.includes(39)}
                onClick={() => {
                  onCheckBoxChecked(39);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Party"
                defaultChecked={selectedValues.includes(40)}
                onClick={() => {
                  onCheckBoxChecked(40);
                }}
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3">
              <Form.Check
                type="checkbox"
                label="4X (explore, expand, exploit, and exterminate)"
                defaultChecked={selectedValues.includes(41)}
                onClick={() => {
                  onCheckBoxChecked(41);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Erotic"
                defaultChecked={selectedValues.includes(42)}
                onClick={() => {
                  onCheckBoxChecked(42);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Mystery"
                defaultChecked={selectedValues.includes(43)}
                onClick={() => {
                  onCheckBoxChecked(43);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Romance"
                defaultChecked={selectedValues.includes(44)}
                onClick={() => {
                  onCheckBoxChecked(44);
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

export default ThemesCheckboxModal;