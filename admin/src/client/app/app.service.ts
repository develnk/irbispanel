import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { $WebSocket, WebSocketSendMode } from 'angular2-websocket/angular2-websocket';

@Injectable()
export class AppService {
  private static wsMessages:Subject<Message[]> = new Subject<Message[]>();
  private static _instance:AppService = new AppService();
  private ws:$WebSocket;
  private wss:WebSocket;

  public static getInstance():AppService {
    return AppService._instance;
  }

  public static getMessages():Subject<Message[]> {
    return AppService.wsMessages;
  }

  constructor() {
    if(AppService._instance) {
      throw new Error('Error: Instantiation failed: Use AppService.getInstance() instead of new.');
    }
    this.ws = new $WebSocket('wss://localhost:' + location.port + '/api/v1');
    this.wss = new WebSocket("wss://localhost:8081/api/v1");
    // this.subscribe();
    AppService._instance = this;
  }

  public send(data:any) {
    console.log('Send through AppService');
    // if (this.ws.getDataStream().isStopped) {
    //   this.subscribe();
    // }
    this.wss.send(data);
  }

  private subscribe() {
    this.ws.getDataStream().subscribe(
      (message) => {
        console.log('Data: ' + message.data);
        AppService.wsMessages.next([<Message>JSON.parse(message.data)]);
      },
      (err) => {console.log('Error: ' + err.message);},
      () => {
        console.log('Completed');
        // this.ws.getDataStream().unsubscribe();
        // this.wsMessages.unsubscribe();
      }
    );
  }

}

export interface Message {
  controller: string;
  method: string;
  data: Object;
}
