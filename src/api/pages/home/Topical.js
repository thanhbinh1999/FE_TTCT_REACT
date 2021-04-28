import { AxiosTTCT } from '../../axios';
export const TopicalHighLight = () => {
    const response = AxiosTTCT.get(`/fe/topical/list-topical-highlight`);
    return response.then(res => {
        if (res.status == 200)
            return res.data;
    }).catch(error => console.log(error));
}