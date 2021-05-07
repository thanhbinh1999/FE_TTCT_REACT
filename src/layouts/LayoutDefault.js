import React from 'react';
import '../components/style/StyleComponent';
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