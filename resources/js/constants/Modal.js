import { Modal, Button } from 'antd';

class OurModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const { visible, loading } = this.state;
    const { buttonText, submitText, children, modalTitle } = this.props;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
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
          {children}
        </Modal>
      </div>
    );
  }
}
export default OurModal;