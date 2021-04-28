import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
/** get  load  pages */
import Index from '../pages/Index';
import { CategoryPage } from '../pages/category/CategoryPage';
import { Detail } from '../pages/detail/Detail';
import { ThemePage } from '../pages/theme/ThemePage';
import { TagPage } from '../pages/tag/TagPage';
import { ToipicalPage } from '../pages/topical/TopicalPage';
/** */

export default class Web extends React.Component {
    render() {

        const listPagesName = {
            categories: [
                '/cuoc-song-muon-mau',
                '/van-de-su-kien',
                '/van-hoa-giai-tri',
            ],
            topical: [
                '/chuyende'
            ],
            detail: [
                'cuoc-song-muon-mau',
                'van-de-su-kien',
                'van-hoa-giai-tri',

            ],
            theme: [
                '/themes'
            ],
            tag: [
                '/tags'
            ],

        }
        return (
            <>
                <Router>
                    < Switch >
                        <Route path="/" exact component={Index} />
                        <Route path="/:slug/"
                            exact
                            children={(match) => {
                                const pathName = match.location.pathname;
                                if (listPagesName.categories.includes(pathName))
                                    return <CategoryPage />
                                else if (listPagesName.topical.includes(pathName))
                                    return <ToipicalPage />
                                else
                                    return <Redirect to="/" />
                            }}
                        />

                        <Route path="/:category/:slug"
                            exact
                            children={(match) => {
                                const { category, slug } = match.match.params;
                                if (listPagesName.categories.includes('/' + category))
                                    return <Detail />
                                else if (listPagesName.theme.includes('/' + category))
                                    return <ThemePage />
                                else if (listPagesName.tag.includes('/' + category))
                                    return <TagPage />
                                else
                                    return <Redirect to="/" />
                            }}
                        />
                    </Switch >
                </Router>
            </>
        );
    }
}