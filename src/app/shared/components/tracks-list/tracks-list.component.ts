import {
  Component,
  computed,
  effect,
  EventEmitter,
  inject,
  input,
  Input,
  OnInit,
  Output,
  signal,
  Signal
} from '@angular/core';
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
  @Input() tracks = signal([]);
  @Input() isPlayerActiveSignal: Signal<boolean>;
  customizedTracks = computed(() => this.tracks()?.map((track: any) => ({...track, isActive: false })))
  @Output() trackSelected = new EventEmitter();

  ngOnInit() {

  }

  selectTrack(id: string) {
      this.trackSelected.emit(id);
      this.customizedTracks().forEach((track: { id: string; isActive: boolean; }) => {
        track.isActive = track.id === id;
    });

  }

}
