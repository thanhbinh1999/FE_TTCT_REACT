import { post } from 'jquery';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/*** ajax*/
import { TopicalHighLight } from '../../api/pages/home/Topical';
/****/
import { resizeThumb, getLinkTopcial } from '../../helpers/Helper';

const Section4 = () => {
    const [state, setState] = useState([]);
    useEffect(async () => {
        setState({
            topicals: await TopicalHighLight()
        });
    }, []);

    return (
        <>
            {  state.topicals != undefined && state.topicals.data != null &&
                <section class="section-1 bg">
                    <div class="container">
                        <div class="wrapper-title">
                            <div class="des">
                                <div class="category-one">Chuyên đề </div> <a href="#" title="" class="link-one">Xem thêm</a>
                            </div>
                        </div>
                        <div class="row">
                            <BigBlockLeftTopical data={state.topicals.data.filter(function (topical) {
                                return topical.highlight == 4;
                            })} />

                            <SmallBlockRightTopical data={state.topicals.data.filter(function (topical) {
                                return topical.highlight > 4 && topical.highlight <= 6
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
    const thumbLink = resizeThumb(1200, 724, 0, 384, 0, topical.thumbnail.base_url, topical.thumbnail.absolute_url);
    const linkToDetailTopical = getLinkTopcial(topical.slug, topical.id);
    return (
        <>
            {
                topical != undefined &&
                <div class="col-md-8 col-md-8-1">
                    <article class="art-over">
                        <div class="outer-thumb">
                            <Link class="thumb thumb-16x10" to={linkToDetailTopical}>
                                <img class="lazyload" src={thumbLink} data-original="img/page/5.jpg" alt="" />
                            </Link>
                        </div>
                        <div class="des-one">
                            <div class="h2"><Link to={linkToDetailTopical} title="">{topical.name}</Link>
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
                        const thumbLink = resizeThumb(1200, 724, 0, 384, 0, topical.thumbnail.base_url, topical.thumbnail.absolute_url);
                        const linkToDetailTopical = getLinkTopcial(topical.slug, topical.id);
                        return (
                            <article class="art-over" key={topical.id}>
                                <div class="outer-thumb">
                                    <Link class="thumb thumb-16x10" to={linkToDetailTopical} >
                                        <img class="lazyload" src={thumbLink} data-original="img/page/6.jpg" alt="" />
                                    </Link >
                                </div>
                                <div class="des-one">
                                    <h2><Link to={linkToDetailTopical} title={topical.name}>{topical.name}</Link></h2>
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
export default Section4