import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider)
          .then((userCretentials) => {
            console.log(userCretentials);
            console.log(this.afAuth.authState);
          });
  }

  logout() {
    this.afAuth.auth.signOut()
    .then(() => {
      const loggedUser = this.afAuth.authState;
      console.log(loggedUser);
    });
  }
}
