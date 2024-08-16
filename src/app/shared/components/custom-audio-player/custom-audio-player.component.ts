import {
  AfterViewInit,
  Component, effect,
  ElementRef, EventEmitter, inject,
  Input, OnDestroy, OnInit, Output, Signal,
  ViewChild
} from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, filter, shareReplay, tap } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-custom-audio-player',
  standalone: true,
  imports: [
    SliderModule,
    FormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './custom-audio-player.component.html',
  styleUrl: './custom-audio-player.component.scss'
})
export class CustomAudioPlayerComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('playerRef') playerRef: ElementRef<HTMLAudioElement>;
  @ViewChild('volumeRef') volumeRef: ElementRef<HTMLAudioElement>;
  @Input() track$: BehaviorSubject<any>
  @Input() audioPlayPauseToggleClicked$: BehaviorSubject<any>
  @Input() isPlayerActiveSignal: Signal<boolean>;
  @Output() playPauseToggleClicked = new EventEmitter<boolean>();
  track = { preview: '' };
  destroyed$ = new BehaviorSubject(false);
  // tracksListHistory$ = this.tracksService.tracksHistory;
  // tracksListHistory: any[] = [];

  constructor() {

  }
  ngOnInit() {

    const playPauseButton = document.getElementById("play-pause");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const currentTimeDisplay = document.getElementById("current-time");
    const totalDurationDisplay = document.getElementById("total-duration");

    const togglePlayPause = () => {
      this.track$.pipe(
        shareReplay(1),
        filter(track => track!== null && track!== undefined && Object.keys(track).length > 0),
        tap((track) => {
          this.$player.src = track.preview;
          this.audioPosition = 0;
          this.$player.currentTime = this.audioPosition;
          setTimeout( () => {
            this.$player
              .play()
              .then()
          }, 1);
          playPauseButton!.innerHTML = "<i class='fa-solid fa-pause absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'></i>";


        })
      ).subscribe();

      this.audioPlayPauseToggleClicked$.pipe(
        filter(val => val),
        tap((val) => {
          if (this.isPlayerActiveSignal()) {
            this.$player.pause();
            playPauseButton!.innerHTML = "<i class=\"fa-solid fa-play absolute top-1/2 left-[53%] translate-y-[-50%] translate-x-[-50%]\"></i>";
          } else {
            this.audioPosition = this.$player.currentTime;
            setTimeout( () => {
              this.$player
                .play()
                .then()
            }, 1);
            playPauseButton!.innerHTML = "<i class='fa-solid fa-pause absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'></i>";
          }
        })
      ).subscribe()

      // Function to play the next track
      // nextButton!.addEventListener("click", () => {
      //   if (this.currentTrack < this.tracksListHistory.length - 1) {
      //     this.currentTrack++;
      //   } else {
      //     this.currentTrack = 0;
      //   }
      //   playTrack(this.currentTrack);
      // });


      // Function to play the previous track
      // prevButton!.addEventListener("click", () => {
      //   if (this.currentTrack > 0) {
      //     this.currentTrack--;
      //   } else {
      //     this.currentTrack = this.tracksListHistory.length - 1;
      //   }
      //   playTrack(this.currentTrack);
      // });

      this.$player?.addEventListener("timeupdate", () => {
        const currentTime = this.formatTime(this.$player.currentTime);
        const totalDuration = this.formatTime(this.$player.duration);
        currentTimeDisplay!.textContent = currentTime;
        if (!isNaN(this.$player.duration)) {
          totalDurationDisplay!.textContent = totalDuration;
        }
        // Update the track slider as the audio plays
        this.sliderValue = (this.$player.currentTime / this.$player.duration) * 100;
      });

      // Handle track ending and play the next track
      // this.$player.addEventListener("ended", () => {
      //   if (this.currentTrack < this.tracksListHistory.length - 1) {
      //     this.currentTrack++;
      //   } else {
      //     this.currentTrack = 0;
      //   }
      //   playTrack(this.currentTrack);
      // });


      // Function to play a specific track
      const playTrack = (trackIndex: number) => {
        this.$player.play();
        // this.isPlayerActive.set(true);
        this.setUpAudio(trackIndex)

      }
      // Update the audio time displays


      // this.setUpAudio(this.track);
    }

    this.track$.pipe(
      // takeUntil(this.destroyed$),
      filter(track => !!track && track.preview)
    ).subscribe(track => {
      this.track = track;
      this.setUpAudio(track);
      togglePlayPause();
    })



  }



  get $player(): HTMLAudioElement {
    return this.playerRef?.nativeElement;
  }

  get $volume(): HTMLElement {
    return this.volumeRef.nativeElement;
  }


  sliderValue = 0;
  volumeValue = 50;
  prevValue = 50;
  // isPlayerActive = this.tracksService.isPlayerActive;
  currentTrack = 0;
  audioPosition = 0;
  isMuted = false;


  setUpAudio(track: any)  {
    // const track = this.tracksListHistory[trackIndex];
    if (track.preview && this.$player) {
      const currentTimeDisplay = document.getElementById("current-time");
      const totalDurationDisplay = document.getElementById("total-duration");
      this.$player.src = track.preview;
      const currentTime = this.formatTime(this.$player.currentTime);
      const totalDuration = this.formatTime(this.$player.duration);
      currentTimeDisplay!.textContent = currentTime;
      if (!isNaN(this.$player.duration)) {
        totalDurationDisplay!.textContent = totalDuration;
      }



    }
  }




  ngAfterViewInit() {
    //
    // const totalDurationDisplay = document.getElementById("total-duration");
    //
    // this.$player.addEventListener('loadedmetadata', () => {
    //   totalDurationDisplay!.textContent = this.formatTime(this.$player.duration);
    // })


  }

  onSliderChange() {
    this.$player!.currentTime = (this.sliderValue / 100) * this.$player!.duration;
    this.audioPosition = this.$player.currentTime;
  }


  onVolumeChange(event: any) {
    this.prevValue = event.value;
    this.$player.volume = event.value / 100;
    if (this.$player.volume === 0) {
      this.$volume!.innerHTML = "<i class='pi pi-volume-off '></i>";
    }  else {
      this.$volume!.innerHTML = "<i class='pi pi-volume-down'></i>";
    }
  }

  onMuteUnmute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.$player.volume = 0;
      this.$volume!.innerHTML = "<i class='pi pi-volume-off '></i>";
    } else {
      this.$player.volume = this.prevValue / 100;
      this.$volume!.innerHTML = "<i class='pi pi-volume-up'></i>";
    }
  }


   formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }


  onPlayPauseClick() {
    this.playPauseToggleClicked.next(true)
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

}
