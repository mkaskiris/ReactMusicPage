import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import components
import { Home, About, Lyrics } from './pages';
//import styling

function App(){

    return(
        <>
        <Switch>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><About /></Route>
            <Route exact path='/lyrics'><Lyrics /></Route>
        </Switch>
        </>
    )
}

export default App;