import tailwind from "tailwindcss"
import postcss from "postcss"
import animationsPlugin from "../src/index.js"

const TAILWIND_BASE = "@tailwind utilities;"
export function generatePluginCSS(options = {}){
    const {inline = '',content = ''} = options

    return postcss([
        tailwind({
            plugins:[animationsPlugin],
            content:[{raw:content}]
        })
    ]).process(`${TAILWIND_BASE} ${inline}`)
    .then(res => res.css)
}

console.log(await generatePluginCSS(
    {
        content:'<div class="animate-zoom-in">Hello world</div>'
    }
))
