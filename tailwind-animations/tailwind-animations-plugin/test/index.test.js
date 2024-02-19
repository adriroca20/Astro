import { generatePluginCSS } from "./utils";
import {describe,it,expect} from "vitest"

describe("tailwindcss-animations plugins", ()=>{
    it("Use a predefined animation", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-zoom-in">Hello world</div>'
        })
        expect(css).toMatch("@keyframes zoom-in{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}.animate-zoom-in{animation:zoom-in 0.6s ease-out both}")
    })
    it("Use a predefined animation with delay", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-delay-100">Hello world</div>'
        })
        expect(css).toMatch(".animate-delay-100{animation-delay:100ms}")
    })
    
    it("Use a custom animation with delay", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-delay-[33ms]">Hello world</div>'
        })
        expect(css).toMatch(".animate-delay-\\[33ms\\]{animation-delay:33ms}")
    })
    it("Use a predefined animation duration", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-duration-100">Hello world</div>'
        })
        expect(css).toMatch(".animate-duration-100{animation-duration:100ms}")
    })
    
    it("Use a custom animation duration", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-duration-[33ms]">Hello world</div>'
        })
        expect(css).toMatch(".animate-duration-\\[33ms\\]{animation-duration:33ms}")
    })
    it("Use a timing function animation", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-linear">Hello world</div>'
        })
        expect(css).toMatch(".animate-linear{animation-timing-function:linear}")
    })
    it("Use a named animation duration function animation", async ()=>{
        const css = await generatePluginCSS({
            content:'<div class="animate-duration-slow">Hello world</div>'
        })
        expect(css).toMatch(".animate-duration-slow{animation-duration:400ms}")
    })
})