import { Component, Input, OnInit, Signal } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { TableModule } from 'primeng/table';
import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';

@Component({
  selector: 'app-tracks-list',
  standalone: true,
  imports: [
    TruncatePipe,
    TableModule,
    ArrayToStringPipe
  ],
  templateUrl: './tracks-list.component.html',
  styleUrl: './tracks-list.component.scss'
})
export class TracksListComponent implements OnInit {
  @Input() tracks: Signal<any>
  ngOnInit() {

  }

}
