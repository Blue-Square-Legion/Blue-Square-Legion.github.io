<script lang="ts">
    import {
        Accordion,
        AccordionItem,
        Button,
        Textarea,
    } from "flowbite-svelte";
    type InfoExtractProp = {
        teamName: string;
        projectName: string;
        teamGoal: string;
        // generalMeetingTime: string;
        specificMeetingTime: string;
        teamPost: string;
    };

    let {
        teamName = $bindable(""),
        projectName = $bindable(""),
        teamGoal = $bindable(""),
        specificMeetingTime = $bindable(""),
        teamPost = $bindable(""),
    }: InfoExtractProp = $props();
    let textareaprops = {
        id: "import-area",
        name: "import-area",
        label: "Import Seeking Team Post",
        rows: 20,
        placeholder: "Import Old Seeking Team Post to pre-fill data",
        readonly: false,
    };

    let text = $state("");

    function extractInformation() {
        teamName = /# (.+)\n*/gi.exec(text)?.at(1)?.trim() ?? "";
        projectName =
            /Project name.*:?\n?(.*)\n/gi.exec(text)?.at(1)?.trim() ?? "";
        teamGoal =
            /Goal statement.*:?\n?(?:> )?(.*)\n/.exec(text)?.at(1)?.trim() ??
            "";
        teamPost =
            /Link\s+to\s+team\s+forum\s+page:.*\n?(http(?:s?):\/\/discord\.com\/channels(\/\d+)+)/gi
                .exec(text)
                ?.at(1)
                ?.trim() ?? "";
        specificMeetingTime =
            /Meeting\s+time(?:s?).*\n?((?:.+\n)+)\n.+Project\s+name/
                .exec(text)
                ?.at(1)
                ?.trim() ?? "";
    }
</script>

<Accordion
    class=" bg-primary-200 dark:bg-primary-800 rounded-lg px-2 pb-1"
    classInactive="hover:dark:bg-slate-700"
    flush
>
    <AccordionItem tag="div">
        <span slot="header" class="ps-2">Import Old Post Data</span>
        <Button onclick={extractInformation} class="bg-green-400"
            >Extract Information</Button
        >
        <Textarea
            bind:value={text}
            {...textareaprops}
            class="block w-full text-lg"
        />
    </AccordionItem>
</Accordion>
<hr />
