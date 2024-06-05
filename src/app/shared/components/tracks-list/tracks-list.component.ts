import { Component, computed, effect, input, Input, OnInit, signal, Signal } from '@angular/core';
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
  @Input() tracks = signal({tracks: []})
  customizedTracks = computed(() => this.tracks()?.tracks?.map((track: any) => ({...track, isActive: false })))
  ngOnInit() {
  }

  selectTrack(id: string) {
    const selectedTrack = this.customizedTracks().find((track: { id: string; }) => track.id === id)
    if(selectedTrack) {
      selectedTrack.isActive =!selectedTrack.isActive;
    }
  }

}
