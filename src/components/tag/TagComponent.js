import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import TagProviderApi from '../../api/providers/TagProviderApi';
import { ListTagComponent } from '../../components/tag/list/ListTagComponent';
export const TagComponent = React.memo((props) => {
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
        const { meta, data, error, status } = await TagProviderApi.getArticleByTag(id, [], page);
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
    return (
        <>

            {
                status == 200 && data.length != 0 &&
                <div class="container">
                    <section class="section section-top">
                        <div class="row row-style">
                            <section class="content borderRight">
                                <div class="title-more"><i>Tags</i><h1></h1></div>
                                <div class="list-art">
                                    {
                                        data.map(post =>
                                            <ListTagComponent data={post} />
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