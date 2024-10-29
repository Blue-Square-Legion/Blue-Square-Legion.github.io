<script lang="ts">
    import { Textarea, Button } from "flowbite-svelte";
    let {
        text = "",
        rows = 30,
        placeholder = "Nothing here yet",
    }: { text: string; rows?: number; placeholder?: string } = $props();
    let textareaprops = {
        id: "copyable-area",
        name: "copyable-area",
        label: "Resulting Text",
        rows,
        placeholder,
        readonly: true,
    };

    function copyText() {
        if (navigator?.clipboard) {
            navigator.clipboard.writeText(text);
        }
    }
</script>

<Button onclick="{copyText}" class=" bg-green-400"
    >Copy Below Text To Clipboard</Button
>
<Textarea bind:value="{text}" {...textareaprops} class="block w-full text-lg" />
