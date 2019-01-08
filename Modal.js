import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal');

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement("div");
        this.state = {
            mounted: false
        };
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
        this.setState({
            mounted: true
        });
    }
    componentWillUnmount() {
        if (this.el) {
            modalRoot.removeChild(this.el);
        }
    }

    render() {
        return ReactDOM.createPortal(
            this.state.mounted ? this.props.children : null,
            this.el
        );
    }
}


export default Modal;


