import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
/** helpers  funcs */
import { resizeThumb, CountString, convertTime, toSlug } from '../../helpers/Helper';

/** end  helpers funcs */

export const RenderBigBlockComponent = React.memo(props => {
    const data = props.data;
    return (
        <>
            {
                data != undefined &&
                <article class="art-main">
                    <div class="des">
                        <div class="h1 mt-0"><Link to={toSlug(data.cate, data.title, data.object_id)} title="">{data.title}</Link>
                        </div>
                        <p class="muted">{data.description}</p>
                        <ul class="list-one">
                            <li>
                                <a class="author-one" href="#" title="">{data.author}</a>
                            </li>
                            <li>
                                <span>{convertTime(data.time_published)}</span>
                            </li>
                            <li>
                                <span>{ }</span>
                            </li>
                        </ul>
                    </div>
                    <div class="outer-thumb">
                        <Link class="thumb" to={toSlug(data.category, data.title, data.id)}>
                            <img lass="lazyload" src={resizeThumb(780, 780, 0, 780, 0, data.thumb_base_url, data.thumb_link)} data-original="img/page/img-1.jpg" alt="" />
                        </Link>
                    </div>
                </article>
            }
        </>
    )
})
