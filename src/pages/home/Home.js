import React from "react";
import Featured from "../../components/featuredInfo/Featured";
import Chart from "../../components/chart/Chart";
import "./home.css";
import { userData } from "../../userData";
import WidgetSm from "../../components/widgetSmall/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const home = () => {
  return (
    <div className="home">
      <Featured />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home-widget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default home;
