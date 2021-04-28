import { post } from 'jquery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopicalHighLight } from '../../api/pages/home/Topical';
import { resizeThumb, getLinkTopcial } from '../../helpers/Helper';

const Section2 = () => {
    const [topicals, setTopicals] = useState([]);
    useEffect(() => {
        TopicalHighLight().then(topical => setTopicals(topical));
    }, []);


    return (
        <>
            {  topicals != undefined && topicals.data != null &&
                <section class="section-1 bg">
                    <div class="container">
                        <div class="wrapper-title">
                            <div class="des">
                                <div class="category-one">Chuyên đề </div> <a href="#" title="" class="link-one">Xem thêm</a>
                            </div>
                        </div>
                        <div class="row">
                            <BigBlockLeftTopical data={topicals.data.filter(function (topical) {
                                return topical.highlight == 1;
                            })} />
                            <SmallBlockRightTopical data={topicals.data.filter(function (topical) {
                                return topical.highlight > 1 && topical.highlight <= 3
                            })} />
                        </div>
                    </div>
                </section>
            }
        </>
    );
}
const BigBlockLeftTopical = (props) => {
    const topical = props.data[0];
    return (
        <>
            {
                topical != undefined &&
                <div class="col-md-8 col-md-8-1">
                    <article class="art-over">
                        <div class="outer-thumb">
                            <Link class="thumb thumb-16x10" to={getLinkTopcial(topical.slug, topical.id)}>
                                <img class="lazyload" src={resizeThumb(1200, 724, 0, 384, 0, topical.thumbnail.base_url, topical.thumbnail.absolute_url)} data-original="img/page/5.jpg" alt="" />
                            </Link>
                        </div>
                        <div class="des-one">
                            <div class="h2"><Link to={getLinkTopcial(topical.slug, topical.id)} title="">{topical.name}</Link>
                            </div>
                            <ul class="list-one">
                                <li>
                                    <span>{topical.published_at}</span>
                                </li>
                                <li>
                                    <span>{topical.articles.length} Bài</span>
                                </li>
                            </ul>

                        </div>
                    </article>
                </div>
            }
        </>
    );
}
const SmallBlockRightTopical = (props) => {
    const topicals = props.data;
    return (
        <>
            <div class="col-md-4 col-md-4-1">
                {topicals != undefined && topicals != null}
                {
                    topicals.map(topical => {
                        return (
                            <article class="art-over" key={topical.id}>
                                <div class="outer-thumb">
                                    <Link class="thumb thumb-16x10" to={getLinkTopcial(topical.slug, topical.id)} >
                                        <img class="lazyload" src={resizeThumb(1200, 350, 0, 350, 0, topical.thumbnail.base_url, topical.thumbnail.absolute_url)} data-original="img/page/6.jpg" alt="" />
                                    </Link >
                                </div>
                                <div class="des-one">
                                    <h2><Link to={getLinkTopcial(topical.slug, topical.id)} title={topical.name}>{topical.name}</Link></h2>
                                    <ul class="list-one">
                                        <li>
                                            <a class="author-one"></a>
                                        </li>
                                        <li>
                                            <span>{topical.published_at}</span>
                                        </li>
                                        <li>
                                            <span>{topical.articles.length} Bài</span>
                                        </li>
                                    </ul>

                                </div>
                            </article>
                        );
                    })
                }
            </div>
        </>
    )
}
export default Section2