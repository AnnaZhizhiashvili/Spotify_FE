import { Component, computed, effect, inject, input, Input, OnInit, Output, signal, Signal } from '@angular/core';
import { TruncatePipe } from '../../pipes/truncate.pipe';
import { TableModule } from 'primeng/table';
import { ArrayToStringPipe } from '../../pipes/array-to-string.pipe';
import { CustomAudioPlayerComponent } from '../custom-audio-player/custom-audio-player.component';
import { TracksService } from '../../services/tracks.service';

@Component({
  selector: 'app-tracks-list',
  standalone: true,
  imports: [
    TruncatePipe,
    TableModule,
    ArrayToStringPipe,
    CustomAudioPlayerComponent
  ],
  templateUrl: './tracks-list.component.html',
  styleUrl: './tracks-list.component.scss'
})
export class TracksListComponent implements OnInit {
  private tracksService = inject(TracksService);
  @Input() tracks = signal({tracks: []})
  customizedTracks = computed(() => this.tracks()?.tracks?.map((track: any) => ({...track, isActive: false })))
  ngOnInit() {
  }

  selectTrack(id: string) {
    this.tracksService.selectedTrack.set('');
    this.customizedTracks().forEach((track: { id: string; isActive: boolean; }) => {
      if (track.id === id) {
        track.isActive = !track.isActive;
      } else {
        track.isActive = false;
      }
    })
    const selectedTrack = this.customizedTracks().find((track: { id: string; }) => track.id === id)
    this.tracksService.selectedTrack.set(selectedTrack.name);
  }

}
