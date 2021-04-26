import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../logo.svg';
export default class Header extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                <title>TTCT</title>
                <link rel="sho rtcut icon" href={logo} type="image/x-icon" />
            </>
        );
    }
}
ReactDOM.render(
    <Header />,
    document.getElementsByTagName('head')[0]
);