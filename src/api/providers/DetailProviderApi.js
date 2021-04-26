import { AxiosTTCT } from '../axios';

class DetailProviderApi {
    constructor() {
        this.responseData = {
            data: [],
            status: 500
        }
    }

    getPostDetail = async (id )=> {
        await AxiosTTCT.get(`fe/articles/article-detail?id=${id}`).then( async res => {
            this.responseData = {
                status: res.status,
                data: res.data,
                errors : []
            };
        }).catch(resError => {
            this.responseData = {
                status: resError,
                data: [],
                errors: resError
            }
        });
        return this.responseData;
    }
    




}
export default new DetailProviderApi();