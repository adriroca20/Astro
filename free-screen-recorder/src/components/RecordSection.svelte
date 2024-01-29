<script>
    import RecorderOption from "./RecorderOption.svelte";
    import CameraIcon from "../icons/CameraIcon.svelte";
    import ScreenIcon from "../icons/ScreenIcon.svelte";
    import SpeakerIcon from "../icons/SpeakerIcon.svelte";
    import MicrophoneIcon from "../icons/MicrophoneIcon.svelte";
</script>
<section class="flex w-[60%] py-3 justify-start items-center flex-col gap-5">
    
    <div class="flex gap-2 flex-col w-full">
        <RecorderOption title="Screen">
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
    <button class="bg-white text-purple-500 py-1 px-2 rounded w-full"
        >Start recording</button
    >
</section>
