import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../user/user.class';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth, public alertController: AlertController ) { 
    afAuth.authState.subscribe( user => (this.isLogged = user));
  }



// Login
async onLogin (user:User){
  try{
    return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }catch(error)
  {
    console.log('Error al iniciar', error);
    
  }
}

//Registrarse
async onRegister(user:User){
  try{
    return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

  }catch(error){
    console.log('Error al registrarse', error);
  }
}


//Recuperar Contraseña
async onForgot(user: User){
  try{
    return await this.afAuth.auth.sendPasswordResetEmail(user.email);
  }catch(error){
    console.log('Error', error);
  }
}
}

