
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
    if (cate != null) {
        slug = '/' + cate[0].slug;
    }
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
    return numberOfWords + ' từ';
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
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return getSlugCate(cate) + '/' + str + '-' + id + '.html';
    }
}

export const equalCategorieName = slug => {
    switch (slug) {
        case 'van-hoa-giai-tri':
            return "Văn hóa giải trí";
            break;
        case 'cuoc-song-muon-mau':
            return "Cuôc sống muôn màu";
            break;
        case 'van-de-su-kien':
            return "Vấn đề sự kiện";
            break;
        default:
            return 'TTCT';
    }

}