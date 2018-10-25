import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import {Link} from 'react-router-dom';
import CreateProjectFormContainer from '../projects/create_project_form_container';
import './modal.css';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'project_create':
      component = <CreateProjectFormContainer />;
      break;
    default:
      return null;
  }

  return(
    <div className="modal-background" onClick={closeModal}>
      <Link to="/" className="modal-exit-symb">
        <i className="fas fa-times-circle"></i>
      </Link>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal.modalType,
    product: state.ui.modal.product
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);