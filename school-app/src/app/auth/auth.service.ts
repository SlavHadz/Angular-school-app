import { Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged = false;


  constructor(private afAuth: AngularFireAuth) { }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider)
          .then((userCretentials) => {
            console.log(userCretentials);
          });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  loggedIn () {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userLogged = true;
      } else {
        this.userLogged = false;
      }
    });

    return this.userLogged;
  }
}
