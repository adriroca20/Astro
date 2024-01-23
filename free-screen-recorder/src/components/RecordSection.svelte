<script>
    import RecorderOption from "./RecorderOption.svelte";
</script>
<section class="flex w-[60%] py-3 justify-start items-center flex-col gap-5">
    
    <div class="flex gap-2 flex-col w-full">
        <RecorderOption title="Screen"></RecorderOption>
        <RecorderOption title="Camera"></RecorderOption>
        <RecorderOption title="System Sound"></RecorderOption>
        <RecorderOption title="Microphone"></RecorderOption>
    </div>
    <button class="bg-white text-purple-500 py-1 px-2 rounded w-full"
        >Start recording</button
    >
</section>
