import { Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged = false;
  userName = '';

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  loginWithFacebook() {
    this.afAuth.auth.signInWithPopup( new auth.FacebookAuthProvider)
          .then((userCretentials) => {
            this.userName = userCretentials.user.displayName;
            this.router.navigate(['/home']);
          });
  }

  signUp(email, password) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            console.log(userCredentials);
          });
  }

  signIn(email, password) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
          .then((userCredentials) => {
            console.log(userCredentials);
          });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.userName = '';
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
