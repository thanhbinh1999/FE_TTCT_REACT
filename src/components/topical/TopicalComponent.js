import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad, { lazyload } from 'react-lazyload';
import TopicalProviderApi from '../../api/providers/TopicalProviderApi';
import { ListTopicalComponent } from './list/ListTopicalComponent';

export const TopicalComponent = React.memo(() => {
    const [state, setState] = useState({
        list: [],
        page: 1,
        per_page: 10,
        isLoadMoreBtn: false
    });
    useEffect(() => {
        fetch();
    }, [state.page])

    const fetch = async () => {
        const { meta, data, status, error } = await TopicalProviderApi.getListTopical(state.page, state.per_page);
        if (status == 200) {
            if (state.page == 1)
                setState(prevState => ({ ...prevState, list: data }));
            else
                setState(prevState => ({
                    ...prevState, list: state.list.concat(data)
                }));
            if (meta != null || meta.total_pages != undefined)
                setState(prevState => ({ ...prevState, isLoadMoreBtn: (state.page < meta.total_pages) ? true : false }));
            else
                setState(prevState => ({ ...prevState, isLoadMoreBtn: false }));
        }
    }

    const HandleClickLoadMoreBtn = () => {
        setState(prevState => ({ ...prevState, page: ++state.page }))
    }


    const loadMoreComponent = event => {
        if (state.isLoadMoreBtn)
            return (
                <div class="outer-more text-center" onClick={event}>
                    <a class="button btn-more" href="javascript:void(0)" title=""><span class="icon"></span></a>
                </div>
            );
            
    }

    return (
        <>
            {
                state.list != undefined && state.list.length > 0 &&
                <div class="container">
                    <section class="section section-spec mt-5">
                        <div class="list-art list-art-chuyende">
                            <div class="row row-mb">
                                {
                                    state.list.map(item =>
                                        <ListTopicalComponent topical={item} key={item.id} />
                                    )
                                }
                            </div>
                        </div>
                        {loadMoreComponent(HandleClickLoadMoreBtn)}
                    </section>
                </div>
            }

        </>
    )
})