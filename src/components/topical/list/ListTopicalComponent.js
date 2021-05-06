import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { resizeThumb, convertTime, getSlugTopical } from '../../../helpers/Helper';

export const ListTopicalComponent = React.memo(props => {
    const topical = props.topical;
    const thumbBaseUrl = process.env.REACT_APP_THUMB_URL + '/ttct';
    const baseUrl = (topical.thumbnail.base_url != null) ? topical.thumbnail.base_url : thumbBaseUrl;
    return (
        <>
            <div class="col-lg-4 col-md-4">
                <article class="art-topic">
                    <div class="outer-thumb">
                        <LazyLoad resize={true}>
                            <Link class="thumb" to={getSlugTopical(topical.slug, topical.id)}>
                                <img src={resizeThumb(800, 350, 0, 350, 0, baseUrl, topical.thumbnail.absolute_url)} data-original="img/page/img-13.jpg"
                                    alt={topical.thumbnail.description} />
                            </Link>
                        </LazyLoad>
                    </div>
                    <h2><Link to={getSlugTopical(topical.slug, topical.id)} title={topical.name}>{topical.name}</Link></h2>
                    <ul class="list-one">
                        <li>
                            <a class="author-one" href="#" title="TTCT">TTCT</a>
                        </li>
                        <li class="date">{convertTime(topical.published_at)}</li>
                    </ul>
                    <p>{topical.description}</p>
                </article>

            </div>
        </>
    )
})