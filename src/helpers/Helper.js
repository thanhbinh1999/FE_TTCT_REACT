
export const getSlugTheme = (theme) => {
    const slug = null;
    if (theme != null) {
        slug = theme[0].map(value => {
            return process.env.REACT_APP_BASE_URL + '/' + value.slug + '-' + value.id + '.html';
        });
    }
    return slug;
}

export const getSlugCate = (cate) => {
    let slug = null;
    if (cate != undefined)
        slug = '/' + cate[0].slug;
    return slug;
}

export const getSlugTopical = (slug, id) => {
    return '/chuyende/' + slug + '-' + id + '.html';
}

export const getCategoryName = cate => {
    return cate[0].description;
}

export const getSlugTag = tag => {
    return '/tags/' + tag.slug + '-' + tag.id + '.html';
}

export const getLinkTopcial = (slug, id) => {
    return '/chuyende/' + slug + '-' + id + '.html';
}
export const resizeThumb = (size = 0, widthPC = 0, heightPC = 0, widthMobile = 0, heightMobile = 0, base_url = 0, thumb_name) => {
    const domain = process.env.REACT_APP_THUMB_URL + '/';
    const ttct = 'ttct';
    const tto = 'tto';
    const SizePC = 767;
    const SizeMobile = 766;
    const index = 3;
    let staticRepo = null;
    let regex = null;
    let full_url = null;
    let width = 0;
    let height = 0;

    if (size > 0 && widthPC && widthMobile != 0 && base_url && thumb_name != null) {
        try {
            regex = base_url.split('/');

            regex = (regex != null && regex[index]) ? regex[index] : ttct;

            if (size >= SizePC) {
                width = widthPC;
                height = heightPC;
            } else if (size <= SizeMobile) {
                width = widthMobile;
                height = heightMobile;
            }
            if (regex != null) {
                switch (regex) {
                    case ttct:
                        staticRepo = ttct;
                        break;
                    case tto:
                        staticRepo = tto;
                        break;
                    default:
                        staticRepo = null;
                }
            }
            if (staticRepo != ttct) {
                full_url = domain + width + '/' + height + '/' + staticRepo + '/' + 'r/' + thumb_name;
            } else {

                full_url = domain + width + '/' + height + '/' + staticRepo + '/' + thumb_name;
            }
            return full_url;

        } catch (Exception) {
            return;
        }
    }

}
export const CountString = (str) => {
    var text2 = str.replace(/\s+/g, ` `);
    var text3 = text2.split(` `);
    var numberOfWords = (text3.length) - 1;
    return numberOfWords + ' t???';
}
export const convertTime = (pubday) => {
    var a = new Date(pubday * 1000);
    var year = a.getFullYear();
    var month = a.getMonth() + 1;
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    if (min < 10) {
        min = "0" + a.getMinutes();
    }
    var time =
        date + "/" + month + "/" + year + "  " + hour + ":" + min + " GMT+7";
    return time;
}
export const toSlug = (cate, str, id) => {
    if (str) {
        // Chuy???n h???t sang ch??? th?????ng
        str = str.toLowerCase();
        // x??a d???u
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, 'a');
        str = str.replace(/(??|??|???|???|???|??|???|???|???|???|???)/g, 'e');
        str = str.replace(/(??|??|???|???|??)/g, 'i');
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???)/g, 'o');
        str = str.replace(/(??|??|???|???|??|??|???|???|???|???|???)/g, 'u');
        str = str.replace(/(???|??|???|???|???)/g, 'y');
        str = str.replace(/(??)/g, 'd');
        // X??a k?? t??? ?????c bi???t
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // X??a kho???ng tr???ng thay b???ng k?? t??? -
        str = str.replace(/(\s+)/g, '-');

        // x??a ph???n d??? - ??? ?????u
        str = str.replace(/^-+/g, '');

        // x??a ph???n d?? - ??? cu???i
        str = str.replace(/-+$/g, '');

        // return
        return getSlugCate(cate) + '/' + str + '-' + id + '.html';
    }
}

export const equalCategorieName = slug => {
    switch (slug) {
        case 'van-hoa-giai-tri':
            return "V??n h??a gi???i tr??";
            break;
        case 'cuoc-song-muon-mau':
            return "Cu??c s???ng mu??n m??u";
            break;
        case 'van-de-su-kien':
            return "V???n ????? s??? ki???n";
            break;
        case 'chuyende':
            return 'Chuy??n ????? ';
        default:
            return 'TTCT';
    }

}