import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Map from "./Map";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartStore";

function FoodModal(props) {
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
          <p>{props.item.restrntNm}</p>
          <img
            src={`${process.env.PUBLIC_URL}/img/eyes.png`}
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
              <li>{props.item.restrntAddr}</li>
              <li>{props.item.restrntDtlAddr}</li>
            </ul>
          </p>
          <p>
            <span>전화번호</span>
            {props.item.restrntInqrTel}
          </p>
          <p>[{props.item.restrntSumm}]</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-pick"
          onClick={() => {
            dispatch(
              addItem({
                title: props.item.restrntNm,
              })
            );
            alert(`'${props.item.restrntNm}' 담기 완료!`);
            props.setModalShow(false);
          }}
        >
          담기
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function FoodLike({ a }) {
  let [like, setLike] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="f-con" onClick={() => setModalShow(true)}>
        <p>{a.restrntNm}</p>
        <div
          onClick={() => {
            setLike(!like);
          }}
        >
          {like === false ? (
            <img
              src={`${process.env.PUBLIC_URL}/img/like-none.png`}
              alt="좋아요x"
            />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/img/like.png`} alt="좋아요" />
          )}
        </div>
      </div>
      <FoodModal
        item={a}
        show={modalShow}
        setModalShow={setModalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default FoodLike;
