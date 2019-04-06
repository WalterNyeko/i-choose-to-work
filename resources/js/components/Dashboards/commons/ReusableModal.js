import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class ReusableModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: false,
            visible: false,
          }

          this.showModal = this.showModal.bind(this);
          this.handleCancel = this.handleCancel.bind(this);
          this.handleOk = this.handleOk.bind(this);
    }
    
    
      showModal(){
        this.setState({
          visible: true,
        });
      }
    
      handleOk(){
          const { handleSubmit } = this.props;
        this.setState({ loading: true });
        const { id } = this.props;
        handleSubmit(id);
        setTimeout(() => {
          this.setState({ loading: false, visible: false });
        }, 3000);
      }
    
      handleCancel(){
        this.setState({ visible: false });
      }
  render() {
      const { visible, loading } =this.state;
      const { modalBody, buttonText, modalTitle, submitText, modalButtonClass } = this.props;
    return (
        <div>
        <Button type={modalButtonClass} onClick={this.showModal}>
          {buttonText}
        </Button>
        <Modal
          visible={visible}
          title={modalTitle}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Cancel</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              {submitText}
            </Button>,
          ]}
        >
          {modalBody? modalBody: (
              <div>
              </div>
          )}
        </Modal>
      </div>
    )
  }
}
export default ReusableModal;