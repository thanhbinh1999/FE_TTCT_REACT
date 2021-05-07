import React from 'react';
import LayoutDefault from '../layouts/LayoutDefault';
import Section1 from '../components/home/Section1';
import Section2 from '../components/home/Section2';
import Section3 from '../components/home/Section3';
import Section4 from '../components/home/Section4';
import Section5 from '../components/home/Section5';
import Header from '../components/home/Header';
import { URL, TITLE, DESCRIPTION } from '../constants/HeaderConstant';
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
                < Header >
                    <title>{TITLE}</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="Tuổi Trẻ Cuối Tuần" />
                    <link rel="sho rtcut icon" href="" type="image/x-icon" />
                    <meta data-n-head="ssr" data-hid="description" name="description" content={DESCRIPTION}></meta>
                    <meta data-n-head="ssr" data-hid="og:title" property="og:title" content={TITLE}></meta>
                    <meta data-n-head="ssr" data-hid="og:url" pro perty="og:url" content={URL} />
                    <meta data-n-head="ssr" data-hid="og:description" property="og:description" content={DESCRIPTION}></meta>
                    <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                    <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content={TITLE}></meta>
                    <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content={DESCRIPTION} ></meta>
                    <meta data-n-head="ssr" data-hid="twitter:image" name="twitter:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                </Header>
            </>
        );
    }
}
