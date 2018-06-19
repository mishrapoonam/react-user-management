import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './landing/Home';
import UserListContainer from './user/UserListContainer'; 
import HeaderNav from './landing/Header'; 


const App = () => {
    return (
        <div >
            <BrowserRouter>
                <div>
                    <HeaderNav />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/users" component={UserListContainer} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};


export default App;