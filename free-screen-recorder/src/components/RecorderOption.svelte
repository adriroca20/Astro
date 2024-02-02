<script lang="ts">
    import { createEventDispatcher } from "svelte";
    export let title:string;
    const eventDispatcher = createEventDispatcher();
    const toggleSelectedOption = (e:MouseEvent )=>{
        const checked:boolean = e.target.checked;
        console.log(checked);
        eventDispatcher("toggleSelectedOption", {title,checked});
    }
</script>

<article
    class="flex flex-col justify-between items-center h-full p-3 w-full aspect-[4/3] relative 
    sm:w-[20%] sm:font-semibold
    rounded-xl bg-white shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] 
    dark:bg-zinc-900 border border-[rgba(240,240,240,0.1]
    dark:before:pointer-events-none dark:before:absolute dark:before:-inset-px 
    dark:before:rounded-xl
    transition-colors 
    hover:dark:bg-zinc-950 
    has-[input:checked]:bg-slate-300 has-[input:checked]:text-zinc-900
    "
>
    <input type="checkbox" name="selectOption" id="{title}" class="hidden" on:click={(e)=>toggleSelectedOption(e)}/>
    <label for="{title}" class="absolute top-0 left-0 h-full w-full cursor-pointer"></label>
    <slot  class="flex-grow"/>
    <span>{title}</span>
</article>

<style>
</style>
