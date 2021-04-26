import React from 'react';
import $ from "jquery";
import logo from "../../img/page/logo.png";
import newspaper from "../../img/page/newspaper/1.jpg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    iconSearch = () => {
        return {
            __html: '&#61788'
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <>
                <div className="top-nav d-none d-xl-block">
                    <div className="inner">
                        <div className="container d-flex">
                            <span className="date">Thứ ba, 20/08/2020</span>
                            <ul className="navbar-nav ml-auto">
                                <li>
                                    <a className="button btn-find" data-toggle="modal" data-target="#searchModal" title="">
                                        <span className="icon"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="inner-bottom">
                        <div className="container">
                            <Link className="navbar-brand logo-1" to="/"><img src={logo} alt="" /> </Link>
                        </div>
                    </div>
                </div>
                <nav className="navbar menu navbar-expand-lg nav-style sticky-top" id="mainNav" >
                    <div className="container">
                        <a className="navbar-brand logo" href="#"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li>
                                    <a className="logo-list" href="#"><img src={logo} alt="" /></a>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/van-de-su-kien">Vấn đề sự kiện</Link>
                                    <div className="sub-menu">
                                        <div className="container">
                                            <a href="#" title="">Thời sự quốc tế</a>
                                            <a href="#" title="">Tiêu điểm</a>
                                            <a href="#" title="">Chuyên đề</a>
                                            <a href="#" title="">Vấn đề sự kiện</a>
                                            <a href="#" title="">Kinh tế</a>
                                        </div>
                                    </div>
                                    
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cuoc-song-muon-mau">Cuộc sống muôn màu</Link>
                                    <div className="sub-menu">
                                        <div className="container">
                                            <a href="#" title="">Công nghệ</a>
                                            <a href="#" title="">Hồ sơ</a>
                                            <a href="#" title="">Câu chuyện cuộc sống</a>
                                            <a href="#" title="">Cửa sổ khoa học</a>
                                            <a href="#" title="">Môi trường</a>
                                            <a href="#" title="">Thế giới không phẳng</a>
                                            <a href="#" title="">Khoa học</a>
                                            <a href="#" title="">Giáo dục</a>
                                            <a href="#" title="">Gặp gỡ và đối thoại</a>
                                            <a href="#" title="">Sức khỏe</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/van-hoa-giai-tri">Văn hóa giải trí</Link>
                                    <div className="sub-menu">
                                        <div className="container">
                                            <a href="#" title="">Truyện ngắn</a>
                                            <a href="#" title="">Văn hóa</a>
                                            <a href="#" title="">Điện ảnh</a>
                                            <a href="#" title="">Tạp bút</a>
                                            <a href="#" title="">Mỹ thuật</a>
                                            <a href="#" title="">Thể thao</a>
                                            <a href="#" title="">Âm nhạc</a>
                                            <a href="#" title="">Thư giãn cuối tuần</a>
                                            <a href="#" title="">Con mắt</a>
                                            <a href="#" title="">Thật - giả</a>
                                            <a href="#" title="">Đọc sách cùng bạn</a>
                                            <a href="#" title="">Lịch sử</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item btn-menu-1">
                                    <a className="nav-link" href="#">...</a>
                                    <div className="sub-menu">
                                        <div className="container">
                                            <a className="main-title" href="#" title="">Vấn đề sự kiện</a>
                                            <a href="#" title="">Thời sự quốc tế</a>
                                            <a href="#" title="">Tiêu điểm</a>
                                            <a href="#" title="">Chuyên đề</a>
                                            <a href="#" title="">Vấn đề sự kiện</a>
                                            <a href="#" title="">Kinh tế</a>
                                            <a className="main-title" href="#" title="">Cuộc sống muôn màu</a>
                                            <a href="#" title="">Công nghệ</a>
                                            <a href="#" title="">Hồ sơ</a>
                                            <a href="#" title="">Câu chuyện cuộc sống</a>
                                            <a href="#" title="">Cửa sổ khoa học</a>
                                            <a href="#" title="">Môi trường</a>
                                            <a href="#" title="">Thế giới không phẳng</a>
                                            <a href="#" title="">Khoa học</a>
                                            <a href="#" title="">Giáo dục</a>
                                            <a href="#" title="">Gặp gỡ và đối thoại</a>
                                            <a href="#" title="">Sức khỏe</a>
                                            <a className="main-title" href="#" title="">Văn hóa giải trí</a>
                                            <a href="#" title="">Truyện ngắn</a>
                                            <a href="#" title="">Văn hóa</a>
                                            <a href="#" title="">Điện ảnh</a>
                                            <a href="#" title="">Tạp bút</a>
                                            <a href="#" title="">Mỹ thuật</a>
                                            <a href="#" title="">Thể thao</a>
                                            <a href="#" title="">Âm nhạc</a>
                                            <a href="#" title="">Thư giãn cuối tuần</a>
                                            <a href="#" title="">Con mắt</a>
                                            <a href="#" title="">Thật - giả</a>
                                            <a href="#" title="">Đọc sách cùng bạn</a>
                                            <a href="#" title="">Lịch sử</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="subscribe">
                                <a href="#" title="">subscribe</a>
                                <img src={newspaper} alt="" />
                                <div className="inner-hover">
                                    <a href="#" title="">
                                        <img src={newspaper} alt="" />
                                    </a>
                                    <div className="des">
                                        <span className="date-1">Ngày xuất bản: <i>20/02/2020</i></span>
                                        <a className="btn-subscribe" href="#" title="">
                                            subscribe
                                                </a>
                                        <a className="link-kybao" href="#" title="">Kỳ báo <span className="icon">&#61812</span> </a>
                                    </div>
                                </div>
                                <ul className="navbar-nav ml-auto d-xl-none">
                                    <li className="user">
                                        <a className="nav-link link" data-toggle="modal" data-target="#loginModal">Hoài Phương</a>
                                        <a href="#" className="btn-out">Thoát</a>
                                    </li>
                                </ul>

                                <div className="find find-1 d-xl-none">
                                    <a className="button btn-find" data-toggle="modal" data-target="#searchModal" title=""><span
                                        className="icon">&#61788</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}