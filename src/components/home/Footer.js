import React from "react";
import logo from "../../img/page/logo-3.png";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import tto from "../../img/icon/icon-tto.svg";
import ttnew from "../../img/icon/icon-ttnews.png";
import tttivi from "../../img/icon/icon-tttivi.svg";
/** ajax*/
import { getAllTheme } from '../../api/pages/home/Index';
/** */

/** Helper*/
import { getSlugTheme } from '../../helpers/Helper';
/** */

export default class Footer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {}
        this.fetchData();
        this.handleSearch = this.handleSearch.bind(this);
    }

    fetchData = async () => {
        const { themes } = await getAllTheme();
        this.setState({
            themes: (themes.data != undefined) ? themes.data : []
        });
    }

    handleSearch = () => {
        document.getElementsByClassName('modal-search')[0].style.display = 'none';
    }

    render() {
        return (
            <>
                <div>
                    <footer className="footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="outer-logo">
                                        <div className="wrapper-logo">
                                            <a className="logo-footer" href="#" title=""><img src={logo} alt="" /></a>
                                            <div className="inner-logo">
                                                <div className="h5">TUỔI TRẺ CUỐI TUẦN ONLINE</div>
                                                <ul className="list-logo">
                                                    <li>
                                                        <a href="#" title=""><img src={tto} /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><img src={ttnew} alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><img src={tttivi} alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="#" title=""><img src="img/icon/icon-ttnews.png" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className="copyright">Số 60A, Hoàng Văn Thụ, Phường 9, Quận Phú Nhuận, Thành phố Hồ Chí Minh,Việt Nam</p>
                                    </div>
                                </div>
                                <div class="col-lg-5 text-right">
                                    <span class="lbl-social">Kết nối với chúng tôi tại :</span>
                                    <ul class="footer-social">
                                        <li><a class="button" href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="button" href="#" title=""><i class="fab fa-youtube"></i></a></li>
                                        <li><a class="button" href="#" title=""><i class="fab fa-instagram"></i></a></li>
                                        <li class="zalo"><a class="button" href="#" title=""><i class="icon-zalo-black"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <span class="border-1"></span>
                            {
                                this.state.themes != null &&
                                <ul class="list-chuyende">
                                    {this.state.themes.map(theme =>
                                        <li key={theme.id}><Link to={'/themes/' + theme.slug + '-' + theme.id} title={theme.name}>{theme.name}</Link></li>
                                    )}
                                </ul>
                            }
                        </div>
                    </footer>
                    <a className="btn-top" href="javascript:void(0)" title=""><span className="icon">&#61736</span></a>
                    <div className="modal-search modal fade" id="searchModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="close-modal" data-dismiss="modal">
                            <span className="icon"></span>
                        </div>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="container">
                                    <div className="frm-search">
                                        <input className="txt-search" type="text" name="" placeholder="Tìm kiếm..." />
                                        <button className="btn-search"><span className="icon" onClick={this.handleSearch} ></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="modal-loading modal fade" id="loadingModal" tabindex="-1" role="dialog" aria-hidden="true">
                        <div className="modal-dialog">
                        </div>
                    </div>
                    <a href="javascript:void(0)" title="top" class="btn-top"><i class="fa fa-caret-up"></i></a>
                </div>
            </>
        );
    }
}

