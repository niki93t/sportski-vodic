import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.nav.events({
    'click a': function(event){
        $('.button-collapse').sideNav('hide');
        console.log("uspesno");
    }
});