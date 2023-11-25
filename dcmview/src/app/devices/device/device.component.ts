import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Device, Status } from '../../app.component.model';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule, MatIconModule],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent {
  @Input() device: Device = { name: '', status: Status.OFF, services: []};
}
