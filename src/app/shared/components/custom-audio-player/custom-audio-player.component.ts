import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
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
export class CustomAudioPlayerComponent implements OnInit, AfterViewInit {
  sliderValue = 0;
  constructor(private elementRef:ElementRef) {
  }

  ngAfterViewInit() {
      const audio: any = document.getElementById("audio");
      const playPauseButton = document.getElementById("play-pause");
      const prevButton = document.getElementById("prev-button");
      const nextButton = document.getElementById("next-button");
      const volumeControl: any = document.getElementById("volume");
      // const trackSlider: any = document.getElementById("track-slider");
      const currentTimeDisplay = document.getElementById("current-time");
      const totalDurationDisplay = document.getElementById("total-duration");
      const trackNameDisplay = document.getElementById("track-name");
      const albumPhoto: any = document.getElementById("album-photo");


      let isPlaying = false;
      let currentTrack = 0;
      let audioPosition = 0;


      // Array of Track URLs
      const trackList = [
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        "https://p.scdn.co/mp3-preview/2f37da1d4221f40b9d1a98cd191f4d6f1646ad17",
        // Add more tracks as needed
      ];

      audio.addEventListener('loadedmetadata', function () {
        totalDurationDisplay!.textContent = formatTime(audio.duration);
      })
      // Function to toggle between Play and Pause
      function togglePlayPause() {
        if (!isPlaying) {
          if (audioPosition === 0) {
            // Start from the beginning of the track
            audio!.src = trackList[currentTrack];
          }
          audio.load();
          audio.currentTime = audioPosition; // Set the audio position
          audio
            .play()
            .then(() => {
              console.log("i n play")
              playPauseButton!.innerHTML ="<i class='fa-solid fa-pause absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'></i>";
              isPlaying = true;
              updateTrackName(currentTrack);

            })
            .catch((error: { message: string; }) => {
              console.error("Audio Playback Error: " + error.message);
            });
        } else {
          console.log(" in pause")
          audioPosition = audio.currentTime; // Store the current audio position
          audio.pause();
          playPauseButton!.innerHTML = "<i class=\"fa-solid fa-play absolute top-1/2 left-[53%] translate-y-[-50%] translate-x-[-50%]\"></i>";
          isPlaying = false;
        }
      }

      playPauseButton!.addEventListener("click", togglePlayPause);


      // Function to play the next track
      nextButton!.addEventListener("click", function () {
        if (currentTrack < trackList.length - 1) {
          currentTrack++;
        } else {
          currentTrack = 0;
        }
        playTrack(currentTrack);
      });


      // Function to play the previous track
      prevButton!.addEventListener("click", function () {
        if (currentTrack > 0) {
          currentTrack--;
        } else {
          currentTrack = trackList.length - 1;
        }
        playTrack(currentTrack);
      });


      // Function to play a specific track
      function playTrack(trackIndex: number) {
        audio.play();
        isPlaying = true;
        setUpAudio(trackIndex)

        updateTrackName(trackIndex); // Updating the track name
      }


      function setUpAudio(trackIndex: number) {
        audio.src = trackList[trackIndex];
        // audio.currentTime = 0; // Set the audio position
        console.log(audio.currentTime )
        audio.load();
        playPauseButton!.innerHTML ="<i class='fa-solid fa-pause absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'></i>";
        const currentTime = formatTime(audio.currentTime);
        const totalDuration = formatTime(audio.duration);
        currentTimeDisplay!.textContent = currentTime;
        totalDurationDisplay!.textContent = totalDuration;
      }


      // Function to update the track name
      function updateTrackName(trackIndex: number) {
      }

      volumeControl!.addEventListener("input", function () {
        audio.volume = volumeControl!.value;
      });


      // Update the audio time displays
      audio.addEventListener("timeupdate",  () => {
        const currentTime = formatTime(audio.currentTime);
        const totalDuration = formatTime(audio.duration);
        currentTimeDisplay!.textContent = currentTime;
        totalDurationDisplay!.textContent = totalDuration;
        console.log(currentTime)
        console.log(totalDuration)

        // Update the track slider as the audio plays
        const position = (audio.currentTime / audio.duration) * 100;
        this.sliderValue = position;
      });


      // Seek to a position when the user interacts with the track slider




      // Handle track ending and play the next track
      audio.addEventListener("ended", function () {
        if (currentTrack < trackList.length - 1) {
          currentTrack++;
        } else {
          currentTrack = 0;
        }
        playTrack(currentTrack);
      });

      function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
      }




    // this.elementRef.nativeElement.querySelector('my-element')
    //   .addEventListener('click', this.onClick.bind(this));
  }

  onSliderChange(event: any) {
    console.log(event)
    console.log(this.sliderValue, "val")
      const audio: any = document.getElementById("audio");
    console.log(audio!.duration, "duration")
    console.log(this.sliderValue, "slideraval")
      audio!.currentTime = (this.sliderValue / 100) * audio!.duration;
    console.log(audio!.currentTime, "currentTime")
  }


  ngOnInit() {

  }


}
