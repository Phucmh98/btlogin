import {applyMiddleware, combineReducers, createStore} from 'redux';

import LoadingReducer from './reducers/LoadingReducer';

import reduxThunk from 'redux-thunk'


//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { HistoryReducer } from './reducers/HistoryReducer';
import { UserLoginCyberBugsReducer } from './reducers/UserCyberBugsReducer';


import { drawerReducer } from './reducers/DrawerCyberbugs';

import { ProjectListIdReducer } from './reducers/ProjectListIdReducer';
import { UserReducer } from './reducers/UserReducer';


const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    //reducer khai báo tại đây
    
    LoadingReducer,
    
    HistoryReducer,
    UserLoginCyberBugsReducer,
    drawerReducer, 
    ProjectListIdReducer,
    UserReducer,
})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;

