import React from "react"

import './style.css'

import A_m from "../../../../assets/img/ninefruit/Profile/임성훈(보컬).jpeg"
import B_m from "../../../../assets/img/ninefruit/Profile/전한영(보컬).jpeg"
import C_m from "../../../../assets/img/ninefruit/Profile/김수진(보컬).jpeg"
import D_m from "../../../../assets/img/ninefruit/Profile/강찬영(보컬).jpeg"
import E_m from "../../../../assets/img/ninefruit/Profile/홍석주(보컬).jpeg"
import F_m from "../../../../assets/img/ninefruit/Profile/김슬미나(보컬).jpeg"
import G_m from "../../../../assets/img/ninefruit/Profile/박륜성(기타).jpeg"
import H_m from "../../../../assets/img/ninefruit/Profile/고성은(피아노).jpeg"

const N_MEMBERS = () => {
    return(
        <React.Fragment>
            <div className="main_column_1080">
                <div className="catagory_title">
                    <p>[ NineFruit ]</p>
                    <h1>MEMBER_LIST</h1>
                </div>
            </div>

            <div className="img_gird">
                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={A_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={B_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={C_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={D_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={E_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={F_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={G_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>

                <div className="img_box">
                    <div className="img_select">
                        <div className="img_own">
                            <img width="100%" src={H_m} alt="A_m" />
                        </div>
                    </div>
                    <h3>임성훈</h3>
                    <div>보컬</div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default N_MEMBERS;