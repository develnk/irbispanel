import {Component, OnDestroy} from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { Router } from "@angular/router";
import { WebSocketService, Message }       from "../../services/websocket.service";
import { ChatChannelService } from "../../services/chat.channel.service";
import { Globals } from "../../globals";

@Component({
  moduleId: module.id,
  selector: 'sys-info',
  templateUrl: 'sysinfo.html'
})
export class SysInfoComponent implements OnDestroy {
  public systemInfo:string = '';
  public cpuInfo:string = '';
  private messages: Subject<Message[]> = new Subject<Message[]>();
  newMessageData: Message;
  chatSubscribed:boolean = false;


  constructor(private chatChannelService:ChatChannelService, private webSocketService:WebSocketService, private router: Router, private globals: Globals) {
    this.webSocketService.start('wss://localhost:' + location.port + '/api/v1');
    this.chatChannelService.subscribed.subscribe( ( data:boolean ) => {
      this.chatSubscribed = data;
      if( data ) {
        this.getAllMessages();
      }
    });

    this.chatChannelService.observableData.subscribe((message: Message) => {
          if (message.controller === 'system' && message.method === 'getsysinfo') {
            this.processSysInfo(<string>message.data);
          }
          if (message.controller === 'system' && message.method === 'getcpu') {
            this.processCPUInfo(<string>message.data);
          }
        },
        (err: ErrorEvent) => {
          console.log('Error: ' + err.message);
    });

    let system_info : Message = <Message> {
      controller: 'system',
      method: 'getsysinfo',
      data: ''
    };

    let cpu_info : Message = <Message> {
      controller: 'system',
      method: 'getcpu',
      data: ''
    };

    this.sendMessage(system_info);
    this.sendMessage(cpu_info);
  };

  ngOnDestroy():void {
    this.chatChannelService.unsubscribe();
    this.webSocketService.close();
  }

  private sendMessage(message: Message) :void{
    this.chatChannelService.send(message);
  }

  private processSysInfo(message: string) {
    this.systemInfo = message;
  }

  private processCPUInfo(message: string) {
    this.cpuInfo = message;
  }

  private getAllMessages():void {
    // this.chatChannelService.send({ controller:'User', method:'login', values: {}});
  }

}
