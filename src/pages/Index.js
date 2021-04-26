import React from 'react';
import LayoutDefault from '../layouts/LayoutDefault';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';
export default class Index extends React.Component {
    render() {
        return (
            <>
                <LayoutDefault>
                    <Section1 />
                    <Section2 />
                    <Section3 />
                    <Section4 />
                    <Section5 />
                </LayoutDefault>

            </>
        );
    }
}
