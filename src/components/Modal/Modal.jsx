import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handClickDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handClickDown);
  }

  handClickDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  hanslClockOnOverlay = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={styles.Overlay} onClick={this.hanslClockOnOverlay}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
