<script lang="ts">
    import {
        Accordion,
        AccordionItem,
        Checkbox,
        Label,
        Textarea,
    } from "flowbite-svelte";
    import { teamTool, TOOLS } from "./CommonData.svelte";
</script>

<Label class="space-y-2 dark:text-primary-500"
    >Choose Tools Your Team Uses:
    <Accordion multiple>
        {#each Object.entries(TOOLS) as [categories, tools]}
            <AccordionItem tag="div" classInactive="hover:dark:bg-slate-700">
                <span slot="header" class="ps-2">{categories}</span>
                <div class="grid grid-cols-4 gap-4">
                    {#each tools as tool}
                        {@const checked = teamTool.has(tool)}
                        <Checkbox
                            custom
                            {checked}
                            onclick="{() => teamTool.toolsUsedToggle(tool)}"
                        >
                            <div
                                class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                            >
                                {tool}
                            </div>
                        </Checkbox>
                    {/each}
                </div>
            </AccordionItem>
        {/each}
    </Accordion>
</Label>

<Label class="space-y-2 text-primary-500">
    <span>Additional Tools not listed above your team uses:</span>
    <Textarea
        placeholder="List of additional tools (place each on new lines)"
        bind:value="{teamTool.additionalTools}"
    />
</Label>
