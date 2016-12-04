import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService, Message } from '../../../app.service';
import { Subject } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector : 'login-form',
  templateUrl : 'login.html'
})
export class LoginComponent {
  private service:AppService = AppService.getInstance();
  private messages:Subject<Message[]> = AppService.getMessages();
  private username:string;
  private password:string;

  private static loginOperation(data:LoginData, router: Router) {
    if (data.ses_id) {
      if (data.status === 1) {
        sessionStorage.setItem('current_user', JSON.stringify(data));
        router.navigate(['/dashboard/home']);
        console.log(JSON.parse(sessionStorage.getItem('current_user')));
      }
      // else {
      //   // User is blocked. Show message about it for user.
      // }
    }
  }

  onSubmit() { console.log("Submitted!"); }

  constructor(private router: Router) {
    this.messages.subscribe(
      (message: Message[]) => {
        if (message[0].controller === 'User' && message[0].method === 'login') {
          LoginComponent.loginOperation(<LoginData>message[0].data, router);
        }
      },
      (err: ErrorEvent) => {console.log('Error: ' + err.message);}
    );
  }

  public SendData() {
    let data = {
      data: {
        controller: 'User',
        method: 'login',
        values: {
          login: this.username,
          pass: this.password,
        }
      }
    };
    this.service.send(data);
  }

}

export interface LoginData {
  ses_id: string;
  status: number;
  name: string;
  mail: string;
  permissions: Array<Permissions>;
}

export interface Permissions {
  module: string;
  permission: string;
  rid: number;
  r_name: string;
}
