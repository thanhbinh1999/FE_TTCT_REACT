import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useParams, useRouteMatch } from 'react-router-dom';
import TopicalProviderApi from '../../api/providers/TopicalProviderApi';
import LayoutDefault from '../../layouts/LayoutDefault';
import SliderTopicalLayout from '../../layouts/SliderTopicalLayout';
import { createBrowserHistory as createHistory } from 'history';
import { SLIDER_LAYOUT_TYPE, NEXT_LAYOUT_TYPE } from '../../constants/TopicalConstant';
import { NotFoundErrorComponent } from '../../components/errors/NotFoundErrorComponent';
import { NextTopicallDetailComponent } from '../../components/detail/Topical/NextTopicalDetailComponent';
import { SliderTopicallDetailComponent } from '../../components/detail/Topical/SliderTopicalDetailComponent';


export const DetailTopical = props => {
    const { slug } = useParams();
    const hasParams = queryString.parse(window.location.hash);
    let id = slug.split('-').pop().replace('.html', '');
    const [detailTopical, setDetailTopical] = useState([]);
    const [articleProps, setDataProps] = useState([]);
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
                component = <LayoutDefault><NotFoundErrorComponent /></LayoutDefault>
        }

    } else {
        component = <LayoutDefault><NotFoundErrorComponent /></LayoutDefault>
    }
    return (
        <>
            {component}
        </>
    )
}
