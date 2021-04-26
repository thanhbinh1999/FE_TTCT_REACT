import React from 'react';
import { Link } from 'react-router-dom';
import { convertTime, resizeThumb, toSlug } from '../../../helpers/Helper';
export const RelatedPostsListComponent = props => {
    const posts = props.relatedPosts;
    return (
        <>
            {
                posts.map(post =>
                    <div class="col-lg-4" >
                        <article class="art-1">
                            <Link className="thumb" to={toSlug(post.cate, post.title, post.object_id)}>
                                <img src={resizeThumb(800, 350, 0, 350, 0, post.thumb_base_url, post.thumb_link)} />
                            </Link>
                            <div class="des">
                                <h2 class="mt-3">
                                    <Link to={toSlug(post.cate, post.title, post.object_id)} title={post.title}>
                                        {post.title}
                                    </Link>
                                </h2>
                            </div>
                        </article>
                    </div>
                )
            }
        </>
    )
}