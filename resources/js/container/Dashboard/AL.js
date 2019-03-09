import React from "react";
import AccountFooter from "../components/AccountFooter";
import AccountSideNav from "../components/AccountSideNav";
import AccountHome from "../components/AccountHome";

const Dashboard = () => {
    return (
        <div>
            {/**This is for demostrations Account layout */}
            <div class="dashboard-container">
                {/**Container */}
                <div class="dashboard-sidebar">
                    {/**Sider */}
                    <AccountSideNav />
                </div>
                {/**AccountSider End */}
                <div class="dashboard-content-container" data-simplebar>
                    <AccountHome/>
                    <div class="container">
                        <AccountFooter/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
