import React, { useEffect, useState } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent';

import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs';

import PageNotFound from './pages/PageNotFound/PageNotFound';

import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import { useDispatch } from 'react-redux';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';

import ProjectManagement from './pages/CyberBugs/ProjectManagement/ProjectManagement';
import DrawerCyberBugs from './HOC/CyberbugsHOC/DrawerCyberBugs';


function App() {

  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'ADD_HISTORY', history: history });
    if (window.location.pathname === '/' || window.location.pathname === '') {
      window.location.href = '/login';
    }
  }, [])


  return (
    <div>
      {/* <Modal /> */}
      <LoadingComponent />
      <DrawerCyberBugs />
      <Switch>
        <UserLoginTemplate exact path='/login' Component={LoginCyberBugs} />

        <CyberbugsTemplate exact path='/projectmanagement' Component={ProjectManagement} />
 
        <CyberbugsTemplate exact path='/' Component={LoginCyberBugs} />
        <HomeTemplate path="*" component={PageNotFound} />
        
      </Switch>

    </div>
  );
}

export default App;
