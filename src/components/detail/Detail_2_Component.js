import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategoryName, convertTime, getSlugCate } from '../../helpers/Helper';
import { RelatedTagsListComponent } from './related/RelatedTagsListComponent';
import { RelatedPostsListComponent } from './related/RelatedPostsListComponent';
export const Detail_2_Component = props => {
    const post = props.objDetail;
    useEffect(() => {
        document.getElementsByTagName('body')[0].classList.add('detail-2');
        window.scrollTo(0, 0);
        return () => {
            document.getElementsByTagName('body')[0].classList.remove('detail-2');
        }

    }, [post]);
    return (
        <>
            {
                post != undefined && ! null &&
                <div class="container">
                    <section class="section section-top">
                        <div class="block-cover-style">
                            <div class="box-top-style">
                                <a class="title-cat text-center" href="#" title="">{post.sub_title}</a>
                                <h1 class="fck-title">{post.title}</h1>
                                <div class="parent_cate">
                                    <Link to={getSlugCate(post.cat)} title={getCategoryName(post.cat)}>  {getCategoryName(post.cat)}</Link>
                                </div>
                                <div class="tool-author">
                                    <strong>{post.object_author_name}</strong> <span>{convertTime(post.time_published)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="row row-style">

                            <div class="block-right">
                                <ul class="tool ui sticky-top">
                                    <li><span><i class="fas fa-home"></i></span></li>
                                    <li><span><i class="icon icon-facebook"></i></span></li>
                                    <li><span><i class="fas fa-print"></i></span></li>
                                </ul>
                                <span class="btn-action"><i class="fas fa-plus"></i></span>
                            </div>

                            <section class="content border-right content-detail">
                                <article class="fck" >
                                    <section class="article-summary">
                                        <p>{post.description}</p>
                                    </section>
                                    <section dangerouslySetInnerHTML={{ __html: post.object_content }} />
                                </article >
                                <RelatedTagsListComponent tags={post.tags} />
                                {console.log(post.tags)}
                            </section>
                            <aside class="sidebar">
                                <div class="block-authors">
                                    <strong>{post.object_author_name}</strong>
                                    {post.author_description}
                                </div>
                            </aside>
                        </div>
                        <div class="block-related-new">
                            <div class="h3">Tin liên quan</div>
                            <div class="row">
                                <RelatedPostsListComponent relatedPosts={post.related_article} />
                            </div>
                        </div>
                    </section>
                </div>
            }
        </>
    )
}