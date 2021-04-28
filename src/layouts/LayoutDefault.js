import React from 'react';
import Header from '../components/home/Header';
import '../components/style/styleComponent';
import Navigation from '../components/home/Navigation';
import Footer from '../components/home/Footer';
export default class LayoutDefault extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navigation />
                {this.props.children}
                <Footer />
            </>
        );
    }
}