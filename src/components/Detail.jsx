import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Map from "./Map";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../store/cartStore";

function DetailModal(props) {
  let item = props.item;
  // console.log(item);
  const dispatch = useDispatch();

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
          <p>{item.title}</p>
          <img
            src={`${process.env.PUBLIC_URL}/img/eyes.png`}
            alt="eyes"
            className="eyes"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Map item={item} />
        </div>
        <div className="detail-con">
          <p>
            <span>주소</span>
            <ul>
              <li>{item.addr}</li>
              <li>{item.dtlAddr}</li>
            </ul>
          </p>
          <p>
            <span>전화번호</span>
            {item.tel}
          </p>
          <p>[{item.summ}]</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-pick"
          onClick={() => {
            dispatch(
              addItem({
                title: props.item.title,
              })
            );
            alert(`'${props.item.title}' 담기 완료!`);
            props.setModalShow(false);
          }}
        >
          담기
        </Button>
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
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Detail;
