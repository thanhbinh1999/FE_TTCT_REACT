import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailProviderApi from '../../api/providers/DetailProviderApi';
import LayoutDefautl from '../../layouts/LayoutDefault';
import { Detail_1_Component } from '../../components/detail/Detail_1_Component';
import { Detail_2_Component } from '../../components/detail/Detail_2_Component';
import { NotFoundErrorComponent } from '../../components/errors/NotFoundErrorComponent';
export const DetailNormal = () => {
    const { slug } = useParams();
    const id = slug.split('-').pop().replace('.html', '');
    const [detailData, setData] = useState([]);
    let component;
    useEffect(async () => {
        let { data } = await DetailProviderApi.getPostDetail(id);
        setData(data);
    }, [id]);

    if (detailData != null) {
        switch (detailData.display) {
            case 1:
                component = <Detail_1_Component objDetail={detailData} />
                break;
            case 2:
                component = <Detail_2_Component objDetail={detailData} />
                break;
            default:

                component = <NotFoundErrorComponent />
        }
    } else {

        component = <NotFoundErrorComponent />
    }

    return (
        <>
            <LayoutDefautl>
                {component}
            </LayoutDefautl>
        </>
    )
}