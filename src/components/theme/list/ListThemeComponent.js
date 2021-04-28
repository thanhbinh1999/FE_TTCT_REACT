import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import { CountString, resizeThumb, getSlugCate, toSlug, getCategoryName, convertTime } from '../../../helpers/Helper';
export const ListThemeComponent = props => {
    const post = props.post;
    return (
        <>
            <article class="art-right-one" key={post.object_id}>
                <div class="outer-thumb">
                    <Lazyload height={169} offset={100}  >
                        <Link class="thumb thumb-16x10" to={toSlug(post.cate, post.title, post.object_id)} >
                            <img src={resizeThumb(800, 350, 0, 350, 0, post.thumb_base_url, post.thumb_link)} data-original="img/page/5.jpg" alt="" />
                        </Link>
                    </Lazyload>
                </div>
                <div class="des">
                    <Link class="category-one" to={getSlugCate(post.cate)}>{getCategoryName(post.cate)}</Link>
                    <h3><Link to={toSlug(post.cate, post.title, post.object_id)} title={post.title}>{post.title}</Link></h3>
                    <ul class="list-one">
                        <li>
                            <a class="author-one" href="#" title="">{post.object_author_name}</a>
                        </li>
                        <li>
                            <span>{convertTime(post.time_published)}</span>
                        </li>
                        <li>
                            <span>{CountString(post.content)}</span>
                        </li>
                    </ul>
                    <p class="muted">{post.description}</p>
                </div>
            </article>
        </>
    )
}