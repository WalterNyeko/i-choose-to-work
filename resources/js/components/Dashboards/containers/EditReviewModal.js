import React from 'react';
import { Modal, Button } from 'antd';

const EditReviewModal = (props) => {

  const { 
      buttonText, 
      submitText, 
      modalTitle,
      handleSubmit, 
      handleCancelModal, 
      visible, 
      loading, 
      showModal,
      modalBody } = props;
  return (
    <React.Fragment>
        <Button type="primary" onClick={showModal}>
          {buttonText}
        </Button>
        <Modal
          visible={visible}
          title={modalTitle}
          onOk={handleSubmit}
          onCancel={handleCancelModal}
          width="400px"
          footer={[
            <Button key="back" onClick={handleCancelModal}>Cancel</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
              {submitText}
            </Button>,
          ]}
        >
          {modalBody}
        </Modal>
    </React.Fragment>
  )
}
export default EditReviewModal;