import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { $WebSocket, WebSocketSendMode, WebSocketConfig } from 'angular2-websocket/angular2-websocket';

@Injectable()
export class AppService {
  private static wsMessages:Subject<Message[]> = new Subject<Message[]>();
  private static _instance:AppService = new AppService();
  private ws:$WebSocket;
  private wsConfig:WebSocketConfig;

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
    this.wsConfig = {initialTimeout: 500, maxTimeout: 300000, reconnectIfNotNormalClose: true};
    this.ws = new $WebSocket('wss://localhost:' + location.port + '/api/v1', null, this.wsConfig, 'arraybuffer');
    // this.subscribe();
    AppService._instance = this;
    this.ws.onMessage(
        (message: MessageEvent)=> {
          console.log("onMessage ", message.data);
        },
        {autoApply: false}
    );

  }

  public send(data:any) {
    console.log('Send through AppService');
    if (this.ws.getDataStream().isStopped) {
      this.subscribe();
    }
    this.ws.send(data, WebSocketSendMode.Direct);

  }

  private subscribe() {
    this.ws.getDataStream().subscribe(
        (msg)=> {
          console.log("next", msg.data);
          this.ws.close(false);
        },
        (msg)=> {
          console.log("error", msg);
        },
        ()=> {
          console.log("complete");
        }
    );
  }

}

export interface Message {
  controller: string;
  method: string;
  data: Object;
}
