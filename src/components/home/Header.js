import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
import { TITLE } from '../../constants/HeaderConstant';
const headTag = document.getElementsByTagName('head')[0];
export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, headTag)
    }
}
