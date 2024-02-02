<script lang="ts">
    import RecorderOption from "./RecorderOption.svelte";
    import CameraIcon from "../icons/CameraIcon.svelte";
    import ScreenIcon from "../icons/ScreenIcon.svelte";
    import SpeakerIcon from "../icons/SpeakerIcon.svelte";
    import MicrophoneIcon from "../icons/MicrophoneIcon.svelte";
    import CameraVideo from "../icons/CameraVideo.svelte";
    const recordingOptions:any ={
        "Screen":false,
        "Camera":false,
        "Microphone":false,
        "System Sound":false,
    }

    function handleClick({detail} : CustomEvent ){
        console.log(detail);
        const title:string = detail.title
        recordingOptions[title] = detail.checked
    }
     async function startRecording() {
        console.log("Recording");
        const media = await navigator.mediaDevices.getDisplayMedia({
            audio: true,
            video:{frameRate:{ideal:30}}
        })
        const mediaRecorder = new MediaRecorder(media, {
            mimeType:"video/webm;codecs=vp8,opus"
        })
        mediaRecorder.start();
        const [video] = media.getVideoTracks();
        video.addEventListener("ended", ()=>{
            mediaRecorder.stop();
        })
        mediaRecorder.addEventListener("dataavailable", (e)=>{
            const link = document.createElement("a")
            link.href = URL.createObjectURL(e.data)
            link.download = "freeRecordedVideo.webm"
            link.click();
        })
    }

</script>
<section class="flex w-[60%] min-h-screen py-3 justify-start items-center flex-col gap-5
sm:justify-center sm:gap-10">
    
    <div class="flex gap-2 flex-col w-full sm:flex-row sm:justify-center sm:gap-4">
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
    <button 
    class="bg-transparent border py-1 px-2 rounded w-full
    flex justify-center items-center gap-3 transition-colors 
    sm:w-1/3 sm:py-2 sm:px-4 sm:text-xl sm:text sm:font-semibold
    hover:dark:bg-zinc-900"
    on:click={startRecording}>
        <span>Start recording</span>
        <CameraVideo></CameraVideo>
        </button>
</section>

