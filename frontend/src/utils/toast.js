import React from 'react'
import Toast from 'react-bootstrap/Toast';


const toast = (props) => {
  return (
    <Toast>
        <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">Notify</strong>
        </Toast.Header>
        <Toast.Body>{props.message}</Toast.Body>
    </Toast>
  )
}

export default toast