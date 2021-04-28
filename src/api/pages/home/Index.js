import { useState, useEffect } from 'react'
import { AxiosTTCT } from '../../axios'

export const Feature = async () => {
    try {
        const res = await AxiosTTCT.get(`/fe/articles/list-feature`);
        if (res.status == 200)
            return res.data;
    } catch (error) {
        throw error;
    }
}

export const getListNewest = async (page) => {
    var articles, hasError = [];
    var isShowLoadMore = false;
    await AxiosTTCT.get(`fe/articles/list-newest?page=${page}&per_page=12&except=[]`)
        .then(res => {
            if (res.status == 200) {
                articles = res.data;
                isShowLoadMore = (articles.total_pages != page) ? true : false;
            }
        }).catch(error => {
            hasError = error;
        })
    return [articles, hasError, isShowLoadMore]
}


export const getAllTheme = async () => {
    var themes = [];
    await AxiosTTCT.get(`/fe/theme/list-theme?page=1&per_page=30`)
        .then(res => {
            if (res.status == 200) {
                themes = res.data;
            }
        }).catch(error => console.log(error));
    return { themes }
}