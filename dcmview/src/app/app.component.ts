import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DeviceComponent } from './devices/device/device.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Device, Status } from './app.component.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DeviceComponent,
    MatTabsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'dcmview';

  deviceList: Device[] = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.deviceList = [
      { name: 'Domain', status: Status.ON, services: [
        { name: 'LDAP', status: Status.ON },
        { name: 'DNS', status: Status.OFF },
      ]},
      { name: 'Zimbra', status: Status.ON, services: [
        { name: 'LDAP', status: Status.ON },
        { name: 'SMTP', status: Status.ON },
        { name: 'IMAP', status: Status.ON },
        { name: 'POP3', status: Status.OFF },
      ]},
      { name: 'Proxy', status: Status.OFF, services: [
        { name: 'SQUID', status: Status.OFF },
      ]},
      { name: 'Hosting', status: Status.OFF, services: [
        { name: 'HTTP', status: Status.OFF },
        { name: 'HTTPS', status: Status.OFF },
      ]},
    ]
  }
}
