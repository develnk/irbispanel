import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AppService, Message } from '../../../layouts/base/app.service';
import { Subject } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'sys-info',
  templateUrl: 'sysinfo.html',
  directives: [ROUTER_DIRECTIVES]
})
export class SysInfoComponent {
  private service:AppService = AppService.getInstance();
  private messages:Subject<Message[]> = AppService.getMessages();
  public systemInfo:string = '';
  public cpuInfo:string = '';

  constructor() {
    this.messages.subscribe(
      (message: Message[]) => {
        if (message[0].controller === 'system' && message[0].method === 'getsysinfo') {
          this.processSysInfo(<string>message[0].data);
          console.log(message[0].data)
        }
        if (message[0].controller === 'system' && message[0].method === 'getcpu') {
          this.processCPUInfo(<string>message[0].data);
          console.log(message[0].data)
        }
      },
      (err: ErrorEvent) => {console.log('Error: ' + err.message);}
    );

    let system_info = {
      data: {
        controller: 'system',
        method: 'getsysinfo',
        values: ''
      }
    };
    this.service.send(system_info);

    let cpu_info = {
      data: {
        controller: 'system',
        method: 'getcpu',
        values: ''
      }
    };
    this.service.send(cpu_info);
  };

  private processSysInfo(message: string) {
    this.systemInfo = message;
  }

  private processCPUInfo(message: string) {
    this.cpuInfo = message;
  }

}
