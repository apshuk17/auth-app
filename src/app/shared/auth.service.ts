import { User } from './user.interface';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

declare var firebase;

@Injectable()
export class AuthService {

    constructor(private router: Router) {}

    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
            console.log(error);
        });
    }

    signinUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .catch(function(error) {
            console.log(error);
        });
    }

    logout() {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            }).catch(function(error) {
                console.log(error);
            });
         this.router.navigate(['/signin']);
    }

    isAuthenticated() {
        var user = firebase.auth().currentUser;

        if (user) {
            return true;
        } else {
            return false;
        }
    }
}