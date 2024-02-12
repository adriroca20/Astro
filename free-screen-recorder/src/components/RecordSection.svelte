<script lang="ts">
  import RecorderOption from "./RecorderOption.svelte";
  import CameraIcon from "../icons/CameraIcon.svelte";
  import ScreenIcon from "../icons/ScreenIcon.svelte";
  import SpeakerIcon from "../icons/SpeakerIcon.svelte";
  import MicrophoneIcon from "../icons/MicrophoneIcon.svelte";
  import CameraVideo from "../icons/CameraVideo.svelte";
  interface IRecordingOptions {
    screen: boolean;
    camera: boolean;
    microphone: boolean;
    systemSound: boolean;
  }
  const recordingOptions: IRecordingOptions = {
    screen: false,
    camera: false,
    microphone: false,
    systemSound: false,
  };
  let webcamVideoURL = "";
  const videoTag = document.querySelector("#webcamVideo")
  function handleClick({ detail }: CustomEvent) {
    const title: string = detail.title;
    if (title == "Screen") recordingOptions.screen = detail.checked;
    if (title == "Camera") recordingOptions.camera = detail.checked;
    if (title == "Microphone") recordingOptions.microphone = detail.checked;
    if (title == "System sound") recordingOptions.systemSound = detail.checked;
  }
  async function startRecording() {
    const devicesMedia = await navigator.mediaDevices.getDisplayMedia({
      audio: recordingOptions.systemSound,
      video: recordingOptions.screen && { frameRate: { ideal: 30 } },
    });

    const mediaRecorder = new MediaRecorder(devicesMedia, {
      mimeType: "video/webm;codecs=vp8,opus",
    });
    mediaRecorder.start();
    const [video] = devicesMedia.getVideoTracks();
    video.addEventListener("ended", () => {
      mediaRecorder.stop();
    });
    mediaRecorder.addEventListener("dataavailable", (e) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(e.data);
      link.download = "freeRecordedVideo.webm";
      link.click();
    });
  }
  const chunks: Blob[] = [];
  let userMediaRecorder:MediaRecorder;
  async function startRecordingUserMedia() {
    const userMedia = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    window.navigator.mediaDevices.getUserMedia({
      video:true
    }).then((stream)=>{
      videoTag.srcObject = stream;
      videoTag.onloadedmetadata = (e) => {
        videoTag.play();
  };
    })
    userMediaRecorder = new MediaRecorder(userMedia, {
      mimeType: "video/webm;codecs=vp8,opus",
    });
    userMediaRecorder.start();
    userMediaRecorder.ondataavailable = ({ data }) => {
      chunks.push(data);
      streamVideo(chunks);
    };
  }
  async function stopRecordingUserMedia() {
    userMediaRecorder.stop();
  }
  function streamVideo(data: Blob[]) {
    const blob = new Blob(data, { type: "video/mp4" });
    webcamVideoURL = window.URL.createObjectURL(blob);
  }
</script>

<section
  class="min-h-screen w-[60%] flex items-center justify-center flex-col gap-3 sm:w-[80%] xl:w-[60%]"
>
  <video src={webcamVideoURL}  autoplay loop controls class="h-44 aspect-video" id="webcamVideo"></video>
  <header class="flex w-full justify-start items-start flex-col py-3 gap-4">
    <h1 class="text-6xl">Free screen recorder online</h1>
    <h4>Select your settings</h4>
  </header>
  <main
    class="flex w-full py-3 justify-start items-center flex-col gap-5
sm:justify-center sm:gap-10"
  >
    <div
      class="flex gap-2 flex-col w-full sm:flex-row sm:justify-between sm:items-center sm:gap-4"
    >
      <RecorderOption title="Screen" on:toggleSelectedOption={handleClick}>
        <ScreenIcon></ScreenIcon>
      </RecorderOption>
      <RecorderOption title="Camera">
        <CameraIcon></CameraIcon>
      </RecorderOption>
      <RecorderOption title="System Sound">
        <SpeakerIcon></SpeakerIcon>
      </RecorderOption>
      <RecorderOption title="Microphone">
        <MicrophoneIcon></MicrophoneIcon>
      </RecorderOption>
    </div>
    <div class="flex w-full gap-2 justify-center items-center">
      <button
        class="bg-transparent border py-1 px-2 rounded w-full
    flex justify-center items-center gap-3 transition-colors
    sm:w-1/3 sm:py-2 sm:px-4 sm:text-xl sm:text sm:font-semibold
    hover:dark:bg-zinc-900"
        on:click={startRecordingUserMedia}
      >
        <span>Start recording</span>
        <CameraVideo></CameraVideo>
      </button>
      <button
        class="bg-transparent border py-1 px-2 rounded w-full
  flex justify-center items-center gap-3 transition-colors
  sm:w-1/3 sm:py-2 sm:px-4 sm:text-xl sm:text sm:font-semibold
  hover:dark:bg-zinc-900"
        on:click={stopRecordingUserMedia}
      >
        <span>Stop recording</span>
        <CameraVideo></CameraVideo>
      </button>
    </div>
  </main>
</section>
