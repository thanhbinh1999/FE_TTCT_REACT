import { AxiosTTCT } from '../axios';
class TopicalProviderApi {
    constructor() {
        this.response = {
            status: 200,
            meta: [],
            data: [],
            error: [],

        }
    }


    /**
     * @description: get  all list topical 
     * @methods :  get
     * @params :  page|int->default:1, per_page|int->default:10
     * @return : promise
     */

    getListTopical = async (page = 1, per_page = 10) => {
        return await AxiosTTCT.get(`/fe/topical/list-topical?page=${page}&per_pages=${per_page}`)
            .then(res =>
                this.response = {
                    status: res.status,
                    meta: {
                        'total_pages': res.data.total_pages,
                        'total_items': res.data.total_items,
                        'current_page': res.data.current_page
                    },
                    data: res.data.data,
                    error: []

                }).catch(resError =>

                    this.response = {
                        meta: [],
                        data: [],
                        error: resError.message,
                        status: (resError.response != undefined) ? resError.response.status : 502
                    }
                )
    }

    getContent = async (id) => {
        return await AxiosTTCT.get(`/fe/topical/topical-detail?id=${id}`)
            .then(res =>
                this.response = {
                    status: res.status,
                    meta: [],
                    data: res.data,
                    error: []
                }).catch(resError =>
                    this.response = {
                        meta: [],
                        data: [],
                        error: resError.message,
                        status: (resError.response != undefined) ? resError.response.status : 502
                    }
                )
    }

}

export default new TopicalProviderApi();