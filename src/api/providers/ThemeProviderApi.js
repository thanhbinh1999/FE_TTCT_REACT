import { AxiosTTCT } from '../axios';

class ThemeProviderApi {
    constructor() {
        this.resposeData = {
            meta: [],
            data: [],
            error: [],
            status: 200
        }
    }

    getArticleByTheme = async (id, except = [], page = 1, per_page = 10) => {
        return await AxiosTTCT.get(`/fe/theme/list-article?theme_id=${id}&except=${except}&page=${page}&per_page=${per_page}`)
            .then(res => this.resposeData = {
                meta: {
                    'total_items': res.data.total_items,
                    'total_pages': res.data.total_pages,
                    'current_page': res.data.current_page,
                    'per_page': res.data.per_page
                },
                data: res.data.list,
                erorr: [],
                status: res.status

            }).catch(resError => this.responseData = {
                meta: [],
                data: [],
                erorr: resError.message,
                status: (resError.response != undefined) ? resError.response.status : 502
            });
    }
}
export default new ThemeProviderApi();
