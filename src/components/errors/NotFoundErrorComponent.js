import React from 'react';
import thumb404 from "../../img/404.png";
export const NotFoundErrorComponent = () => {
    return (
        <>
            <section class="page-404">
                <div class="jumbotron text-center">
                    <h1 class="title-404">404 PAGE NOT FOUND!</h1>
                    <h3>Không thể tìm thấy nội dung bạn yêu cầu!</h3>
                    <div class="text-center">
                        <img style={{ width: '500px' }} src={thumb404} />
                        <br />
                        <b-button size="lg" variant="outline-danger">
                            <b-icon icon="house-fill"></b-icon>Quay Về Trang Chủ
              v           </b-button>
                    </div>
                </div>
            </section>
        </>
    )
}