
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
/*** ajax */
import { Feature } from '../../api/pages/home/Index';
/****/

import { getSlugTheme, getSlugCate, resizeThumb, CountString, convertTime, toSlug } from '../../helpers/Helper';

const BigBlockArticle = (props) => {
    const post = props.list;
    return (
        <>
            {  post != undefined && post != null &&

                <article className="art-over art-ver">
                    <div className="outer-thumb">
                        <Link className="thumb thumb-16x8" to={toSlug(post.cate, post.title, post.object_id)}>
                            <img className="lazyload" src={resizeThumb(1200, 1110, 0, 500, 0, post.thumb_base_url, post.thumb_link)} data-original="img/page/5.jpg" alt="" />
                        </Link>
                    </div>
                    <div className="des-one">
                        <Link className="category-one" to={getSlugCate(post.cate)}>{(post.cate[0] != null) ? post.cate[0].description : null}</Link>
                        <div className="h1"><Link to={toSlug(post.cate, post.title, post.object_id)} title={post.title}>{post.title}</Link></div>
                        <ul className="list-one">
                            <li>
                                <Link className="author-one" to="#" title={post.object_author_name}>{post.object_author_name}</Link>
                            </li>
                            <li>
                                <span>{convertTime(post.time_published)}</span>
                            </li>
                            <li>
                                <span>{CountString(post.content)}</span>
                            </li>
                        </ul>
                    </div>
                </article>
            }
        </>
    );
}
const SmallBlockArticle = (props) => {
    const posts = props.articles.filter(function (item) {
        return item.priority > 1 && item.priority <= 4
    })

    return (
        <>
            <div className="row">
                {
                    posts.map(post => {
                        return (
                            <div className="col-md-4" key={post.object_id}>
                                <article className="art-one art-one-1">
                                    <div className="outer-thumb">
                                        <Link className="thumb thumb-16x10" to={toSlug(post.cate, post.title, post.object_id)}>
                                            <img className="lazyload" src={resizeThumb(1200, 160, 0, 160, 0, post.thumb_base_url, post.thumb_link)} data-original="img/page/6.jpg" alt="" />
                                        </Link>

                                    </div>
                                    <div className="des-one">
                                        <Link className="category-one" to={getSlugCate(post.cate)}>{post.cate[0].description}</Link>
                                        <div className="h2"><Link title={post.title} to={toSlug(post.cate, post.title, post.object_id)}>{post.title}</Link>
                                        </div>

                                        <ul className="list-one">
                                            <li>
                                                <a className="author-one" href="#" title={post.object_author_name}>{post.object_author_name}</a>
                                            </li>
                                            <li>
                                                <span>{convertTime(post.time_published)}</span>
                                            </li>
                                            <li>
                                                <span>{CountString(post.content)}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        );
                    })
                }

            </div>
        </>
    )
}
const Section1 = () => {
    const [articles, setState] = useState([]);

    useEffect(async () => {
        setState(await Feature())
    }, []);
    return (
        <>
            <section className="section-1">
                <div className="container">
                    {articles != undefined && articles.list != null &&
                        articles.list.map(article => (article.priority == 1) ? <BigBlockArticle list={article} /> : null)
                    }
                    {
                        articles.list != null &&
                        <SmallBlockArticle articles={articles.list} />
                    }
                </div>

            </section>
        </>
    );
}
export default Section1