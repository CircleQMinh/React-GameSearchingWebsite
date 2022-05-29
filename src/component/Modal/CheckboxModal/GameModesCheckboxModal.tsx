import React, { Fragment } from 'react'
import { Form, Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onCheckBoxChecked: Function;
  onClose: Function;
  selectedValues: number[];
};
function GameModesCheckboxModal(props: Props) {
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
       centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="black">Filter by Game Modes</Modal.Title>
        </Modal.Header>
        <Modal.Body className="black">
          <div className="row justify-content-center">
            <div className=" col">
              <Form.Check
                type="checkbox"
                label="Single player"
                defaultChecked={selectedValues.includes(1)}
                onClick={() => {
                  onCheckBoxChecked(1);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Multiplayer"
                defaultChecked={selectedValues.includes(2)}
                onClick={() => {
                  onCheckBoxChecked(2);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Co-operative"
                defaultChecked={selectedValues.includes(3)}
                onClick={() => {
                  onCheckBoxChecked(3);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Split screen"
                defaultChecked={selectedValues.includes(4)}
                onClick={() => {
                  onCheckBoxChecked(4);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Massively Multiplayer Online (MMO)"
                defaultChecked={selectedValues.includes(5)}
                onClick={() => {
                  onCheckBoxChecked(5);
                }}
              />
              <Form.Check
                type="checkbox"
                label="Battle Royale"
                defaultChecked={selectedValues.includes(6)}
                onClick={() => {
                  onCheckBoxChecked(6);
                }}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success  black" onClick={()=>{onClose()}}>OK</button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
export default GameModesCheckboxModal