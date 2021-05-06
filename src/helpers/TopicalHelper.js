import { NEXT_OR_PREV_BUTTON_TYPE } from '../constants/TopicalConstant';
export const isArticleOfTopical = props => {
    return props.type == NEXT_OR_PREV_BUTTON_TYPE ? true : false;
}
export const styleTopicBar = {
    display: 'block'
}

export const getSlugCate = categories => {
    const firstCat = categories[0] || [];
    if (firstCat != null)
        return firstCat.slug;
    else
        return '';

}

export const renderNextLink = (props, html ) => {
    const { next_article } = props || [];
    if (next_article != null) {  
        const articleInfo = {
            id: next_article.id,
            slug: next_article.slug,
            cateSlug: getSlugCate(next_article.categories)
        }
        return `/${articleInfo.cateSlug + '/' + articleInfo.slug + '-' + articleInfo.id + '.html'}`;
    } else {
        return null;
    }

}
export const renderPrevLink = props => {
    const { prev_article } = props || [];
    if (prev_article != null) {
        const articleInfo = {
            id: prev_article.id,
            slug: prev_article.slug,
            cateSlug: getSlugCate(prev_article.categories)
        }
        return `/${articleInfo.cateSlug + '/' + articleInfo.slug + '-' + articleInfo.id + '.html'}`;
    } else {
        return null;
    }

}