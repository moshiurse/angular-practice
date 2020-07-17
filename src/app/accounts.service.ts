import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService{

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      constructor(private loggingService: LoggingService){}

    addAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatus('A server created named: ' + name + ' Status: '+ status, status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        this.loggingService.logStatus('A server status changed, new status: ' + status, status);
    }
}