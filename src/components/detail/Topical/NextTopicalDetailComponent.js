import React from 'react';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import { resizeThumb, convertTime, CountString, toSlug } from '../../../helpers/Helper';
export const NextTopicallDetailComponent = React.memo(props => {
    const data = props.data;
    const { articles } = data;
    const backgroundImageCover = (baseUrl, absoluteUrl) => {
        return {
            backgroundImage: `url(` + baseUrl + '/' + absoluteUrl + `)`
        }
    }
    return (
        <>
            {
                data != undefined && ! null &&
                < header class="masterHeader">
                    <span class="img-topic" style={backgroundImageCover(data.thumbnail.base_url, data.thumbnail.absolute_url)} ></span>
                    <div class="outer-header">
                        <div class="container">
                            <div class="inner-header">
                                <h1>{data.name}</h1>
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                </header>
            }

            {
                articles != undefined && !null &&
                articles.map(article =>
                    <div class="container" key={article.object_id}>
                        {console.log(article)}
                        <section class="section section-spec">
                            <div class="list-art">
                                <article class="art-right">
                                    <div class="outer-thumb">
                                        <Lazyload>
                                            <Link class="thumb" to={toSlug(article.cat, article.title, article.object_id)}>
                                                <img src={resizeThumb(800, 340, 0, 350, 0, article.thumbnail.base_url, article.thumbnail.absolute_url)} data-original={resizeThumb(800, 340, 0, 350, 0, article.thumbnail.base_url, article.thumbnail.absolute_url)} alt={article.thumbnail.description} />
                                            </Link>
                                        </Lazyload>
                                    </div>
                                    <div class="des">
                                        <div class="b-center">
                                            <span class="date">{convertTime(article.time_published)}</span>
                                            <h3><Link  to={toSlug(article.cat, article.title, article.object_id)} title={article.title}>{article.title}</Link></h3>
                                            <a class="author_1" href="#">{article.author}<span>{CountString(article.content)}</span></a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </section>
                    </div>
                )
            }

        </>
    )
})