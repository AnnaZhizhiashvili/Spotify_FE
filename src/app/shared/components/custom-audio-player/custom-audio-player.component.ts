import {
  AfterViewInit,
  Component, computed,
  effect,
  ElementRef,
  Input,
  signal,
  ViewChild
} from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-audio-player',
  standalone: true,
  imports: [
    SliderModule,
    FormsModule
  ],
  templateUrl: './custom-audio-player.component.html',
  styleUrl: './custom-audio-player.component.scss'
})
export class CustomAudioPlayerComponent implements AfterViewInit {
  @ViewChild('playerRef') playerRef: ElementRef<HTMLAudioElement>;
  @ViewChild('volumeRef') volumeRef: ElementRef<HTMLAudioElement>;
  @Input() track = signal<{ preview_url: string } | any>({});
  trackList: string[] = [];
  // Array of Track URLs
  trackListSignal: any = computed(() => {
    console.log("computed")
    const currentTrackUrl = this.track().preview_url;
    console.log("computed 1")
    if (currentTrackUrl && !this.trackList.includes(currentTrackUrl)) {
      this.trackList.push(currentTrackUrl);
      console.log(this.trackList, "this.trackList, after push")
    }
    this.currentTrack = this.trackList.length - 1;
    console.log(this.currentTrack, "currentTrack")
    return [...this.trackList, currentTrackUrl];
  });


  constructor() {
    effect(() => {
      this.setUpAudio(this.currentTrack);
    })
  }



  get $player(): HTMLAudioElement {
    return this.playerRef.nativeElement;
  }

  get $volume(): HTMLElement {
    return this.volumeRef.nativeElement;
  }

  sliderValue = 0;
  volumeValue = 50;
  prevValue = 50;
  isPlaying = false;
  currentTrack = 0;
  audioPosition = 0;
  isMuted = false;


  setUpAudio(trackIndex: number)  {
    const currentTimeDisplay = document.getElementById("current-time");
    const totalDurationDisplay = document.getElementById("total-duration");
    this.$player.src = this.track().preview_url;
    this.$player.load();
    const currentTime = this.formatTime(this.$player.currentTime);
    const totalDuration = this.formatTime(this.$player.duration);
    currentTimeDisplay!.textContent = currentTime;
    totalDurationDisplay!.textContent = totalDuration;
  }




  ngAfterViewInit() {

    const playPauseButton = document.getElementById("play-pause");
    const prevButton = document.getElementById("prev-button");
    const nextButton = document.getElementById("next-button");
    const currentTimeDisplay = document.getElementById("current-time");
    const totalDurationDisplay = document.getElementById("total-duration");

      this.$player.addEventListener('loadedmetadata',  () => {
          totalDurationDisplay!.textContent = this.formatTime(this.$player.duration);
        })
      // Function to toggle between Play and Pause
      const togglePlayPause = () => {
        if (!this.isPlaying) {
          if (this.audioPosition === 0) {
            // Start from the beginning of the track
            this.$player!.src = this.track().preview_url;
          }
          this.$player.load();
          this.$player.currentTime = this.audioPosition; // Set the audio position
          this.$player
            .play()
            .then(() => {
              playPauseButton!.innerHTML ="<i class='fa-solid fa-pause absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'></i>";
              this.isPlaying = true;
            })
            .catch((error: { message: string; }) => {
            });
        } else {
          this.audioPosition = this.$player.currentTime; // Store the current audio position
          this.$player.pause();
          playPauseButton!.innerHTML = "<i class=\"fa-solid fa-play absolute top-1/2 left-[53%] translate-y-[-50%] translate-x-[-50%]\"></i>";
          this.isPlaying = false;
        }
      }

      playPauseButton!.addEventListener("click", togglePlayPause);

      // Function to play the next track
      nextButton!.addEventListener("click",  () => {
        if (this.currentTrack < this.trackListSignal().length - 1) {
          this.currentTrack++;
        } else {
          this.currentTrack = 0;
        }
        playTrack(this.currentTrack);
      });


      // Function to play the previous track
      prevButton!.addEventListener("click",  () => {
        if (this.currentTrack > 0) {
          this.currentTrack--;
        } else {
          this.currentTrack = this.trackListSignal().length - 1;
        }
        playTrack(this.currentTrack);
      });

    this.$player.addEventListener("timeupdate",  () => {
      const currentTime = this.formatTime(this.$player.currentTime);
      const totalDuration = this.formatTime(this.$player.duration);
      currentTimeDisplay!.textContent = currentTime;
      totalDurationDisplay!.textContent = totalDuration;
      // Update the track slider as the audio plays
      this.sliderValue = (this.$player.currentTime / this.$player.duration) * 100;;
    });

    // Handle track ending and play the next track
    this.$player.addEventListener("ended",  () => {
      if (this.currentTrack < this.trackListSignal().length - 1) {
        this.currentTrack++;
      } else {
        this.currentTrack = 0;
      }
      playTrack(this.currentTrack);
    });


      // Function to play a specific track
      const playTrack = (trackIndex: number) => {
        this.$player.play();
        this.isPlaying = true;
        this.setUpAudio(trackIndex)

      }
      // Update the audio time displays


    this.setUpAudio(this.currentTrack);
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

}
