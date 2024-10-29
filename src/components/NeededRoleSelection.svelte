<script lang="ts">
    import { rolesNeeded } from "./CommonData.svelte.ts";
    import {
        Accordion,
        AccordionItem,
        Checkbox,
        Label,
    } from "flowbite-svelte";
</script>

<Label class="space-y-2 dark:text-primary-500"
    >Choose Role(s) Your Team Needs to Fill:
<Accordion multiple>
    {#each rolesNeeded.listOfRoles as roles, index}
        <AccordionItem>
            <Checkbox slot="header" class="dark:text-slate-50" bind:checked="{rolesNeeded.selectedRoles[index]}"
                ><span class="ps-2">{roles}</span></Checkbox
            >
            <div class="grid grid-cols-4 gap-4">
                {#each rolesNeeded.listOfToolsByRole[index]! as tool}
                    {@const checked = rolesNeeded.selectedTools.includes(tool)}
                    <Checkbox custom {checked} onclick={() => rolesNeeded.toggleTools(tool)} >
                        <div class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            {tool}
                        </div>
                    </Checkbox>
                {/each}
            </div>
        </AccordionItem>
    {/each}
</Accordion>
</Label
>