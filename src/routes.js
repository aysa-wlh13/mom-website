import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import MomRegistration from './Components/MomRegistration/MomRegistration';
import ClientRegistration from './Components/ClientRegistration/ClientRegistration';
import Home from './Components/Home/Home';
import CommunityResources from './Components/CommunityResources/CommunityResources';
import Client from './Components/Client/Client';
import Stripe from './Components/Stripe/Stripe';
import Dental from './Components/Resources/Dental/Dental';
import Education from './Components/Resources/Education/Education';
import Eyes from './Components/Resources/Eyes/Eyes';
import Food from './Components/Resources/Food/Food';
import Hjoes from './Components/Resources/Hjoes/Hjoes';
import Medical from './Components/Resources/Medical/Medical';
import MentalHealth from './Components/Resources/MentalHealth/MentalHealth';
import AgencyResources from './Components/Resources/AgencyResources /AgencyResources';


export default (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/m-register' component={MomRegistration}/>
        <Route path='/c-register' component={ClientRegistration}/>
        <Route path='/home' component={Home}/>
        <Route path='/com-res' component={CommunityResources}/>
        <Route path='/client' component={Client}/>
        <Route path='/donate' component={Stripe}/>
        <Route path='/agency-res' component={AgencyResources}/>
        <Route path='/dental' component={Dental}/>
        <Route path='/education' component={Education}/>
        <Route path='/eyes' component={Eyes}/>
        <Route path='/food' component={Food}/>
        <Route path='/hjoes' component={Hjoes}/>
        <Route path='/medical' component={Medical}/>
        <Route path='/mental-health' component={MentalHealth}/>
    </Switch>
)