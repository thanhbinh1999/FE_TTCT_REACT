import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import loading from '../../img/loading-1.jpg';
/** component category  page */
import Header from '../../components/home/Header';
import { equalCategorieName } from '../../helpers/Helper';
import { RenderBigBlockComponent } from './RenderBigBlockComponent';
import { RenderSmallBlockComponent } from './RenderSmallBlockComponent';

import { URL, DESCRIPTION, TITLE } from '../../constants/HeaderConstant';

/***  api   Providers */
import CategoryProviderApi from '../../api/providers/CategoryProviderAPi';
/** end class  */

export const CategoryIndexComponent = () => {
    // const 
    const { slug } = useParams();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoadMoreBtn, setLoadMore] = useState(false);
    let categoryId = [];
    /// let 

    const fetchData = async () => {
        categoryId = await CategoryProviderApi.getCategoryIdBySlug(slug);
        const { metas, datas } = (await CategoryProviderApi.getArticleByCate(categoryId, page, 10)).get();
        if (page == 1) {
            setData(datas);
        } else {
            const prevData = data.concat(datas);
            setData(prevData);
        }

        if (metas != null) {
            setLoadMore(page < metas.total_pages || true || false)
        } else { setLoadMore(false) }

    }
    useEffect(() => {
        setPage(1);
        fetchData();
        console.log(data);
    }, [slug]);

    useEffect(() => {
        fetchData();
    }, [page]);


    const HandleLoadMore = () => {
        setPage((prevPage) => ++prevPage);
    }
    return (
        <>
            <div class="container">
                <section class="section section-top">
                    <div class="row row-style">
                        <section class="content borderRight">
                            <RenderBigBlockComponent data={data[0]} />
                            <div class="list-art">
                                <RenderSmallBlockComponent data={data} />
                                {
                                    isLoadMoreBtn &&
                                    <div class="outer-more text-center" onClick={HandleLoadMore} >
                                        <a class="button btn-more" href="javascript:void(0)" title=""><span class="icon"></span></a>
                                    </div>
                                }
                            </div>
                        </section>
                        <aside class="sidebar">
                            <div class="block-bar sticky-top">
                                <div class="h3">Tin xem nhiều</div>
                                <ul class="list-bar">
                                    <li>
                                        <a href="#" title="">Thiếu ngủ gây hậu quả nghiêm trọng hơn ta tưởng</a>
                                        <a class="author_1" href="#">Duy Linh</a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </section>
            </div>
            
            < Header >
                <title>{equalCategorieName(slug) || TITLE}</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Tuổi Trẻ Cuối Tuần" />
                <link rel="sho rtcut icon" href="" type="image/x-icon" />
                <meta data-n-head="ssr" data-hid="description" name="description" content={DESCRIPTION}></meta>
                <meta data-n-head="ssr" data-hid="og:title" property="og:title" content={equalCategorieName(slug) || TITLE}></meta>
                <meta data-n-head="ssr" data-hid="og:url" pro perty="og:url" content={URL} />
                <meta data-n-head="ssr" data-hid="og:description" property="og:description" content={DESCRIPTION}></meta>
                <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content={TITLE}></meta>
                <meta data-n-head="ssr" data-hid="twitter:description" name="twitter:description" content={DESCRIPTION} ></meta>
                <meta data-n-head="ssr" data-hid="twitter:image" name="twitter:image" content="https://cuoituan.tuoitre.vn/img/page/logo.png"></meta>
            </Header>
        </>
    )
}