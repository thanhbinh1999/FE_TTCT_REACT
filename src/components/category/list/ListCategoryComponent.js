import React from 'react';
import { Link } from 'react-router-dom';
/** helpers  funcs */
import { resizeThumb, convertTime, toSlug } from '../../../helpers/Helper';
/** end  helpers funcs */
import Lazyload from 'react-lazyload';

export const ListCategoryComponent = React.memo(props => {
    const res = props.data;
    return (
        <>
            {
                res.map(function (item, index) {
                    if (index != 0)
                        return (
                            <article class="art-right-one" key={item.object_id} >
                                <div class="outer-thumb">
                                    <Link class="thumb thumb-16x10" to={toSlug(item.cate, item.title, item.object_id)}>
                                        <Lazyload height={196}>
                                            <img class="lazyload" src={resizeThumb(750, 350, 0, 350, 0, item.thumb_base_url, item.thumb_link)} data-original="img/page/5.jpg" alt="" />
                                        </Lazyload>
                                    </Link>
                                </div>
                                <div class="des">
                                    <div class="h3"><Link to={toSlug(item.cate, item.title, item.object_id)} title={item.title}>{item.title}</Link>
                                    </div>
                                    <ul class="list-one">
                                        <li>
                                            <a class="author-one" href="#" title={item.author}>{item.author}</a>
                                        </li>
                                        <li>
                                            <span>{convertTime(item.time_published)}</span>
                                        </li>
                                        <li>
                                            <span></span>
                                        </li>
                                    </ul>
                                    <p class="muted">{item.description}</p>
                                </div>
                            </article>
                        )
                })
            }
        </>
    )

})
