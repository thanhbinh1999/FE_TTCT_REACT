import React from 'react';
import { Link } from 'react-router-dom';
import { getSlugTheme, convertTime, resizeThumb } from '../../../helpers/Helper';
export const SliderTopicallDetailComponent = props => {
    const data = props.data;
    const articles = (data && data.articles != undefined) ? data.articles : [];

    props.HandleOnSlideLeave('', '', '', '', articles);
    const backgroundImgCover = (baseUrl, absoluteUrl) => {
        return {
            background: `url(` + resizeThumb(1200, 1200, 0, 775, 0, baseUrl, absoluteUrl) + `)`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }

    return (
        <>
            {
                data != undefined && ! null &&

                <div class="section" >
                    <div class="slide slide-dark"
                        style={backgroundImgCover(data.thumbnail.base_url, data.thumbnail.absolute_url)}  >
                        <div class="caption-ctn caption-left-top">
                            <h1>{data.name}</h1>
                            <a class="link-home" href="#" title="">Tuổi Trẻ Cuối Tuần</a>
                        </div>
                    </div>
                    <div class="slide ">
                        <div class="sapo">
                            <p>
                                {data.description}
                            </p>
                        </div>
                    </div>
                    {
                        articles.length > 0 &&
                        articles.map(article =>
                            <div class="slide  scrollable-element scrollnormal" key={article.id}>
                                <div class="block-cover"
                                    style={backgroundImgCover(article.thumbnail.base_url, article.thumbnail.absolute_url)}>
                                    <div class="box-top">
                                        <h2 class="fck-title">{article.title}</h2>
                                        <div class="parent_cate">
                                            <Link title="">{article.themes[0].name}</Link>
                                        </div>
                                        <div class="tool-author">
                                            <strong>{article.author}</strong> <span>{convertTime(article.time_published)}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="container" >
                                    <section class="section section-top">
                                        <div class="row row-style">
                                            <div class="block-right">
                                                <ul class="tool ui sticky-top">
                                                    <li><span><i class="icon icon-like"></i></span> 245</li>
                                                    <li><span><i class="icon icon-save"></i></span></li>
                                                    <li><span><i class="icon icon-share"></i></span></li>
                                                </ul>
                                            </div>
                                            <section class="content border-right content-detail">
                                                <article class="fck">
                                                    <section>
                                                        <p class="article-summary">{article.excerpt}</p>
                                                        <section dangerouslySetInnerHTML={{ __html: article.content }}></section>
                                                    </section>
                                                </article>
                                            </section>
                                        </div>
                                    </section>
                                </div>
                            </div>)
                    }
                </div>
            }


        </>
    )
}