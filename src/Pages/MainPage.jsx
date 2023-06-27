/* eslint-disable react/prop-types */
import { useMemo } from "react";
import Header from "../components/Header";
import MainTabs from "../components/MainTabs";
import Calculator from "../components/Calculator";
import History from "../components/History";

const MainPage = ({username, setIsAuthenticated}) => {

  const tabs = useMemo(() => [
    {title:"Calculator", component: <Calculator />},
    {title:"History", component: <History />},
],[])


  return (
    <div>
      <Header tabs={tabs} username={username} setIsAuthenticated={setIsAuthenticated}/>
      <MainTabs tabs={tabs}/>
    </div>
  );
};

export default MainPage;
