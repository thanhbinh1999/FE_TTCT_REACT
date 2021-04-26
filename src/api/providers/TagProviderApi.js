import { AxiosTTCT } from '../axios';
class TagProviderApi {
    constructor() {
        this.responseData = {
            meta: [],
            data: [],
            erorr: [],
            status: 200
        }
    }

    getArticleByTag = async (id,except = [], page = 1, per_page = 10) => {
        return await AxiosTTCT.get(`/fe/articles/list-by-tag?page=${page}&per_page=${per_page}&except=${except}&tag_id=${id}`)
            .then(res => this.responData = {
                meta: {
                    total_items: res.data.total_items,
                    total_pages: res.data.total_pages,
                    current_page: res.data.current_page
                },
                data: res.data.list,
                error: [],
                status: res.status
            }).catch(resError => this.responseData = {
                meta: [],
                data: [],
                error: resError.messages,
                status: (resError.response != undefined) ? resError.response.status : 502

            })

    }
}
export default new TagProviderApi();