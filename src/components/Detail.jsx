import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Map from "./Map";

function DetailModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="modal-t">
          <p>{props.item.title}</p>
          <img
            src={`${process.env.PUBLIC_URL}img/eyes.png`}
            alt="eyes"
            className="eyes"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Map item={props.item} />
        </div>
        <div className="detail-con">
          <p>
            <span>주소</span>
            <ul>
              <li>{props.item.addr}</li>
              <li>{props.item.dtlAddr}</li>
            </ul>
          </p>
          <p>
            <span>전화번호</span>
            {props.item.tel}
          </p>
          <p>[{props.item.summ}]</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-pick">담기</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Detail({ item }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="for-view"
      >
        자세히 보기
      </Button>

      <DetailModal
        item={item}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Detail;
