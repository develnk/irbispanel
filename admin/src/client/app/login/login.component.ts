import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Rx';
import { WebSocketService, Message }       from "../services/websocket.service";
import { ChatChannelService } from "../services/chat.channel.service";
import { AuthService } from "../auth.service";
import { Globals } from "../globals";

/**
 *    This class represents the lazy loaded LoginComponent.
 */
@Component({
    moduleId: module.id,
    selector: 'login-cmp',
    templateUrl: 'login.component.html'
})
export class LoginComponent implements OnDestroy {
    // private service: AppService = AppService.getInstance();
    // private messages: Subject<Message[]> = AppService.getMessages();
    private messages: Subject<Message[]> = new Subject<Message[]>();
    newMessageData: Message;
    private username: string;
    private password: string;
    chatSubscribed:boolean = false;

    private static loginOperation(data: LoginData, router: Router, globals: Globals) {
        if (data.ses_id) {
            if (data.status == 1) {
                sessionStorage.setItem('current_user', JSON.stringify(data));
                globals.USER = <LoginData>data;
                router.navigate(['/dashboard/home']);
                console.log(JSON.parse(sessionStorage.getItem('current_user')));
            }
            // else {
            //   // User is blocked. Show message about it for user.
            // }
        }
    }

    constructor(private chatChannelService:ChatChannelService, private webSocketService:WebSocketService, private router: Router, public authService: AuthService, private globals: Globals ) {
        let key:string = sessionStorage.getItem('current_user');
        if (key) {
            globals.USER = <LoginData>JSON.parse(key);
            router.navigate(['/dashboard/home']);
        }

        this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
        let self = this;
        this.chatChannelService.subscribed.subscribe((data:boolean ) => {
            self.chatSubscribed = data;
            if( data ) {
                this.getAllMessages();
            }
        });

        this.chatChannelService.observableData.subscribe((message: Message) => {
                LoginComponent.loginOperation(<LoginData>message.data, router, globals);
            },
            (err: ErrorEvent) => {
                console.log('Error: ' + err.message);
            });
    }

    private getAllMessages():void {
        // this.chatChannelService.send({ controller:'User', method:'login', values: {}});
    }

    ngOnDestroy():void {
        this.chatChannelService.unsubscribe();
        this.webSocketService.close();
    }

    private sendMessage():void{
        this.chatChannelService.send( { controller:'User', method:'login', data: { login: this.username, pass: this.password}} );
        this.newMessageData = { controller:'User', method:'login', data: {}};
    }

    private logout() {
        this.authService.logout();
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
