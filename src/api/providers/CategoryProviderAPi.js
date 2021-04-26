import { AxiosTTCT } from '../axios';
class CategoryProviderApi {
    constructor() {

        this.responseData = {
            datas: [],
            meta: [],
            errors: [],
            status: 200,
        }
    }
    /**
     * @method:get
     * @descritions : get all list category 
     * @return:  data:array 
     * @return:  status:interger
     * @return:  errors:array
     */
    getListCategorys = async () => {

        await AxiosTTCT.get(`/fe/categories/list-cat?page=1&per_page=10`).then(res => {
            this.responseData = {
                status: res.status,
                datas: res.data.data,
                metas: {
                    per_page: res.data.per_page,
                    total_pages: res.data.total_pages,
                    current_page: res.data.current_page
                },
                errors: []
            }
        }).catch(resError => {
            this.responseData = {
                status: resError.response.status,
                datas: [],
                errors: resError
            }
        });

        return this.responseData;
    }

    /**
     * @method:get
     * @params :  slug:string
     * @return: json 
     */

    getCategoryIdBySlug = async slug => {
        await this.getListCategorys();
        try {
            if (slug != null) {
                var { id } = this.responseData.datas.find(item => item.slug == slug)
            }
            return id;
        } catch (error) {
            return error;

        }
    }

    /**
     * @params : id:integer
     * @params : page:number => @default: 1
     * @params : perPage:number => @defaut : 10
     * @return : json
     */

    getArticleByCate = async (id, page = 1, perPage = 10) => {
        await AxiosTTCT.get(`/fe/articles/list-by-cat?page=${page}&per_page=${perPage}&except=[]&cat_id=${id}`)
            .then(res => {
                this.responseData = {
                    datas: res.data.list,
                    errors: [],
                    status: res.status,
                    metas: {
                        per_page: res.data.per_page,
                        total_pages: res.data.total_pages,
                        current_page: res.data.current_page
                    },
                }
            }).catch(resError => {
                this.responseData = {
                    datas: [],
                    errors: resError,
                    status: resError.response.status,
                    metas: []
                }
            });
        return this;
    }

    /** 
     * @return json 
     */

    first = () => {
        return {
            metas: this.responseData.metas,
            datas: this.responseData.datas[0]
        }
    }

    /**
     * @return: json
     */

    get = () => {
        return {
            metas: this.responseData.metas,
            datas: this.responseData.datas
        }
    }
}

export default new CategoryProviderApi();