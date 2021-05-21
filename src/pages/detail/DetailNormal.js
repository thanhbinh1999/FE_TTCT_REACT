import React, { useState, useEffect, useRef, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import DetailProviderApi from '../../api/providers/DetailProviderApi';
import LayoutDefautl from '../../layouts/LayoutDefault';
import Header from '../../components/home/Header';
import { Layout_1_DetailComponent } from '../../components/detail/layouts/Layout_1_DetailComponent';
import { Layout_2_DetailComponent } from '../../components/detail/layouts/Layout_2_DetailComponent'
import { NotFoundErrorComponent } from '../../components/errors/NotFoundErrorComponent';
import { TITLE, DESCRIPTION, URL } from '../../constants/HeaderConstant';
import { toSlug } from '../../helpers/Helper';
export const DetailNormal = () => {
    const { slug } = useParams();
    const id = slug.split('-').pop().replace('.html', '');
    const [detailData, setData] = useState([]);
    let component;
    useEffect(async () => {
        let { data } = await DetailProviderApi.getPostDetail(id);
        setData(data);
        console.log(data);
    }, [id]);

    if (detailData != null) {
        switch (detailData.display) {
            case 1:
                component = <Layout_1_DetailComponent objDetail={detailData} />
                break;
            case 2:
                component = <Layout_2_DetailComponent objDetail={detailData} />
                break;
            default:
                setTimeout(() => {
                    component = <NotFoundErrorComponent />
                }, 1000);
        }

    } else {
        component = <NotFoundErrorComponent />
    }
    return (
        <>
            <LayoutDefautl>
                {component}
                {
                    detailData != null &&
                    < Header >
                        <title>{detailData.title || TITLE}</title>
                        <meta charset="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <meta name="author" content="Tuổi Trẻ Cuối Tuần" />
                        <link rel="sho rtcut icon" href="" type="image/x-icon" />
                        <meta data-n-head="ssr" data-hid="description" name="description" content={detailData.description || DESCRIPTION}></meta>
                        <meta data-n-head="ssr" data-hid="og:title" property="og:title" content={detailData.title || TITLE}></meta>
                        <meta data-n-head="ssr" data-hid="og:url" pro perty="og:url" content={URL + toSlug(detailData.cat, detailData.title, detailData.object_id) || URL} />
                        <meta data-n-head="ssr" data-hid="og:description" property="og:description" content={detailData.description || DESCRIPTION}></meta>
                        <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                        <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content={detailData.title || TITLE}></meta>
                        <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content={detailData.description || DESCRIPTION} ></meta>
                        <meta data-n-head="ssr" data-hid="twitter:image" name="twitter:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                    </Header>
                }
            </LayoutDefautl>
        </>
    )
}