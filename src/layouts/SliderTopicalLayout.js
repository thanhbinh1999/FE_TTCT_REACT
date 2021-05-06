import React from 'react';
import { Link } from 'react-router-dom';
import ReactFullpage from '@fullpage/react-fullpage';

export default class SliderTopicalLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <ul class="tool tool-spec">
                    <li><Link to="/"><span><i class="fas fa-home"></i></span></Link></li>
                    <li><span><i class="fab fa-facebook-f"></i></span></li>
                    <li><span><i class="fas fa-link"></i></span></li>
                </ul>
                <ReactFullpage
                    onSlideLeave={this.props.HandleOnSlideLeave}
                    licenseKey={'YOUR_KEY_HERE'}
                    scrollingSpeed={950}
                    render={({ state, fullpage_api }) => {
                        return (
                            <ReactFullpage.Wrapper  >
                                {this.props.children}
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </>
        )
    }
}