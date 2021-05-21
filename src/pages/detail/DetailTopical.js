import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useParams, useRouteMatch } from 'react-router-dom';
import TopicalProviderApi from '../../api/providers/TopicalProviderApi';
import { createBrowserHistory as createHistory } from 'history';

import { resizeThumb } from '../../helpers/Helper';

import { URL, TITLE, DESCRIPTION } from '../../constants/HeaderConstant';
import { SLIDER_LAYOUT_TYPE, NEXT_LAYOUT_TYPE } from '../../constants/TopicalConstant';


import Header from '../../components/home/Header';
import LayoutDefault from '../../layouts/LayoutDefault';
import SliderTopicalLayout from '../../layouts/SliderTopicalLayout';
import { NotFoundErrorComponent } from '../../components/errors/NotFoundErrorComponent';
import { NextTopicallDetailComponent } from '../../components/detail/Topical/NextTopicalDetailComponent';
import { SliderTopicallDetailComponent } from '../../components/detail/Topical/SliderTopicalDetailComponent';


export const DetailTopical = props => {
    const { slug } = useParams();
    const hasParams = queryString.parse(window.location.hash);
    let id = slug.split('-').pop().replace('.html', '');
    const [detailTopical, setDetailTopical] = useState([]);
    const [articleProps, setDataProps] = useState([]);
    const [articleByIndex, setArticleByIndex] = useState([]);
    let component = null;

    useEffect(async () => {

        if (hasParams != null & hasParams.topical != undefined) {
            id = hasParams.topical
        }
        const { data, status } = await TopicalProviderApi.getContent(id);
        if (data != undefined && ! null) setDetailTopical(data);
    }, [id]);

    const HandleOnSlideLeave = (section, origin, destination, direction, articles) => {
        const history = createHistory();
        if (articles != undefined)
            setDataProps(articles);
        if (destination.index > 1) {
            const currentSlider = articleProps[destination.index - 2];
            history.replace({ pathname: currentSlider.slug + '-' + currentSlider.object_id + '.html#topical=' + detailTopical.id })
            setArticleByIndex(currentSlider);
        } else {
            history.replace({ pathname: detailTopical.slug + '-' + detailTopical.id + '.html' })
        }

    }
    if (detailTopical != undefined && ! null) {
        switch (detailTopical.display_type) {
            case SLIDER_LAYOUT_TYPE:
                component = <SliderTopicalLayout HandleOnSlideLeave={HandleOnSlideLeave}><SliderTopicallDetailComponent data={detailTopical} HandleOnSlideLeave={HandleOnSlideLeave} /></SliderTopicalLayout>
                break;
            case NEXT_LAYOUT_TYPE:
                component = <LayoutDefault><NextTopicallDetailComponent data={detailTopical} /></LayoutDefault>
                break;
            default:
                setTimeout(() => {
                    component = <LayoutDefault><NotFoundErrorComponent /></LayoutDefault>
                }, 1000);
        }

    } else {
        component = <LayoutDefault><NotFoundErrorComponent /></LayoutDefault>
    }
    return (

        <>
            {component}
            {
                <Header>
                    <title>{articleByIndex.title || TITLE}</title>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <meta name="author" content="Tuổi Trẻ Cuối Tuần" />
                    <link rel="sho rtcut icon" href="" type="image/x-icon" />
                    <meta data-n-head="ssr" data-hid="description" name="description" content={articleByIndex.excerpt || DESCRIPTION}></meta>
                    <meta data-n-head="ssr" data-hid="og:title" property="og:title" content={articleByIndex.title || TITLE}></meta>
                    <meta data-n-head="ssr" data-hid="og:url" pro perty="og:url" content={URL} />
                    <meta data-n-head="ssr" data-hid="og:description" property="og:description" content={articleByIndex.excerpt || DESCRIPTION}></meta>
                    <meta data-n-head="ssr`" data-hid="og:image" property="og:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                    <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content={articleByIndex.title || TITLE}></meta>
                    <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content={articleByIndex.excerpt || DESCRIPTION} ></meta>
                </Header>
            }
        </>
    )
}
