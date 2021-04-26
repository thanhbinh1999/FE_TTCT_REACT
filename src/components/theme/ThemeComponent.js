import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Lazyload from 'react-lazyload';
import ThemeProviderApi from '../../api/providers/ThemeProviderApi';
import author from '../../img/author.jpg';
import { CountString, resizeThumb, getSlugCate, toSlug, getCategoryName, convertTime } from '../../helpers/Helper';
export const ThemeComponent = React.memo(() => {
    const { slug } = useParams();
    const id = slug.split('-').pop().replace('.html', '');
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(null);
    const [per_page, setPerPage] = useState(10);
    const [isLoadMoreBtn, setLoadMoreBtn] = useState(false);

    useEffect(() => {
        fetch();
    }, [page, id]);

    const fetch = async () => {
        const { meta, data, error, status } = await ThemeProviderApi.getArticleByTheme(id, [], page);
        if (page == 1)
            setData(data);
        else
            setData((prevData) => prevData.concat(data));
        setStatus(status);
        if (page < meta.total_pages)
            setLoadMoreBtn(true);
        else
            setLoadMoreBtn(false);
    }

    const HandleLoadMore = () => {
        setPage((prevPage) => ++prevPage);
    }
    const postNameCategori = () => {
        return data[0].cate[0].description || '';
    }

    return (
        <>

            {
                status == 200 && data.length != 0 &&
                <div class="container">
                    <section class="section section-top">
                        <div class="row row-style">
                            <section class="content borderRight">
                                <div class="title-more"><i>Chủ đề</i><h1>{postNameCategori()}</h1></div>
                                <div class="list-art">
                                    {
                                        data.map(post =>
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
                                        )
                                    }
                                    {
                                        isLoadMoreBtn &&
                                        <div class="outer-more text-center">
                                            <a class="button btn-more" href="javascript:void(0)" title="" onClick={HandleLoadMore}><span class="icon"></span></a>
                                        </div>
                                    }
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            }
        </>
    )
})