import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import { getSlugCate, resizeThumb, CountString, convertTime, toSlug, getLinkTopcial } from '../../helpers/Helper';

/**ajax**/
import { getListNewest } from '../../api/pages/home/Index';
/****/

const Section5 = () => {
    const [data, setData] = useState([]);
    const [hasError, setError] = useState([]);
    const [pageNumber, setPage] = useState(1);
    const [isShowLoadMore, setShowLoadMore] = useState(false);

    useEffect(async () => {
        fetchData(pageNumber);
    }, [pageNumber]);

    const fetchData = async (page) => {
        const [articles, hasError, isShowLoadMore] = await getListNewest(page);
        if (page > 1) {
            let prevData = data;
            setData(prevData = prevData.concat(articles.list));

        } else {
            setData(articles.list);
        }
        setShowLoadMore(isShowLoadMore);
        setError(hasError);
    }
    const HandleLoadMoreBtn = event => {
        let currentPage = pageNumber;
        setPage(currentPage + 1);
        if (!isShowLoadMore) event.target.remove();
    }


    return (
        <>
            <section class="section-1">
                <div class="container">
                    <div class="row row-style">
                        <div class="content">
                            {data != undefined && data != null &&
                                data.map(obj =>
                                    < article class="art-right-one">
                                        <div class="outer-thumb">
                                            <Link class="thumb thumb-16x10" to={toSlug(obj.cate, obj.title, obj.object_id)}>
                                                <img class="lazyload" src={resizeThumb(1200, 345, 0, 345, 0, obj.thumb_base_url, obj.thumb_link)} data-original="img/page/10.jpg" alt="" />
                                            </Link>
                                        </div>
                                        <div class="des">
                                            <Link class="category-one" to={getSlugCate(obj.cate)}>{obj.cate[0].name}</Link>
                                            <div class="h3"><Link to={toSlug(obj.cate, obj.title, obj.object_id)} title={obj.title}>{obj.title}</Link></div>
                                            <ul class="list-one">
                                                <li>
                                                    <Link class="author-one" to="" title={obj.object_author_name}> {obj.object_author_name}</Link>
                                                </li>
                                                <li>
                                                    <span>{convertTime(obj.time_published)}</span>
                                                </li>
                                                <li>
                                                    <span>{CountString(obj.content)}</span>
                                                </li>
                                            </ul>
                                            <p class="muted">{obj.description}</p>
                                        </div>
                                    </article>
                                )
                            }
                            <div class="outer-more text-center">
                                <a href="javascript:void(0)" class="button btn-more" onClick={HandleLoadMoreBtn}>
                                    <span class="icon"></span>
                                </a>
                            </div>
                        </div>
                        <aside class="sidebar">
                            <div class="block-bar">
                                <div class="box-mail">
                                    <div class="five">Nhận tin mới</div>
                                    <form class="frm-mail">
                                        <input class="txt-mail" type="email" placeholder="Email của bạn" />
                                        <button class="btn-mail">Đăng ký</button>
                                    </form>
                                </div>
                            </div>
                            <div class="block-bar sticky-top">
                                <span class="title-bar">Tuần báo</span>
                                <OwlCarousel className="owl-theme navClass" lazyLoad autoWidth={true} loop item={5}>
                                    <div class="item">
                                        <a href="#" title="">
                                            <img class="lazyload" src="https://static.tuoitre.vn/345/0/tto/r/2021/04/01/ffdee7cb.jpg"
                                                data-original="img/page/newspaper/1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="item">
                                        <a href="#" title="">
                                            <img class="lazyload" src="https://static.tuoitre.vn/345/0/tto/r/2021/03/25/c4e056eb.jpeg"
                                                data-original="img/page/newspaper/1.jpg" alt="" />
                                        </a>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section5