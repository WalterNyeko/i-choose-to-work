import React from "react";
import AccountSideNav from "./AccountSideNav";
import AccountHome from "./AccountHome";

const AccountLayout = (props) => {
    return (
        <div>
            <div class="dashboard-container">
                {/**Container */}
                <div class="dashboard-sidebar">
                    {/**Sider */}
                    <AccountSideNav />
                </div>
                {/**AccountSider End */}
                <div class="dashboard-content-container" data-simplebar>
                    {/** Contents Start */}

                   {props.children}
                    <AccountHome/>

                    {/** Content End */}
                    {/** Footer Start */}
                    <div class="container">
                        <AccountFooter />
                    </div>
                    {/** Footer End */}
                </div>
            </div>
        </div>
    );
};

export default AccountLayout;
