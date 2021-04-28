import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Feature } from '../../api/pages/home/Index';
import { getSlugTheme, getSlugCate, resizeThumb, CountString, convertTime, toSlug, getLinkTopcial } from '../../helpers/Helper';
const Section3 = () => {
    const [state, setState] = useState([]);
    useEffect(async () => {
        setState({
            featureData: await Feature()
        })
    }, []);
    const data = (state.featureData != null) ? state.featureData.list.filter(item => { return item.priority > 3 && item.priority <= 10 }) : [];
    return (
        <>
            {
                data != null &&
                < section class="section-1">
                    <div class="container">
                        <div class="wrapper-title">
                            <div class="title-two">Nổi bật</div> <a href="#" title="" class="link-one">Xem thêm</a>
                        </div>
                        <div class="row">
                            {data.map(feature => {
                                const thumbLink = resizeThumb(1200, 160, 0, 160, 0, feature.thumb_base_url, feature.thumb_link);
                                const linkToDetail = toSlug(feature.cate, feature.title, feature.object_id);
                                return (
                                    <div class="col-md-6">
                                        <article class="art-right-one art-right-one-1">
                                            <div class="outer-thumb">
                                                <Link class="thumb thumb-16x10" to={linkToDetail}>
                                                    <img class="lazyload" src={thumbLink} data-original={thumbLink} alt="" />
                                                </Link>
                                            </div>
                                            <div class="des">
                                                <Link class="category-one" to={getSlugCate(feature.cate)}>{feature.cate[0].description}</Link>
                                                <div class="h3"><Link to={linkToDetail} title="">{feature.title}</Link></div>

                                                <ul class="list-one">
                                                    <li>
                                                        <a class="author-one" href="#" title="">{feature.object_author_name}</a>
                                                    </li>
                                                    <li>
                                                        <span>{convertTime(feature.time_published)}</span>
                                                    </li>
                                                    <li>
                                                        <span>{CountString(feature.content)}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </article>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </section>
            }
        </>
    );
}
export default Section3