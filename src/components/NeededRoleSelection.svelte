<script lang="ts">
    import {
        ROLES,
        roleSelectionCount,
        teamTool,
        type AllRoleNameType,
    } from "./CommonData.svelte.ts";
    import {
        Accordion,
        AccordionItem,
        Checkbox,
        Label,
        Range,
    } from "flowbite-svelte";
</script>

{#snippet labeledRoleRange(name: AllRoleNameType, isGeneral = false)}
    <Label class="space-y-2 mb-4 dark:text-slate-50">
        <span
            >{isGeneral ? "General " : ""}{name}: {roleSelectionCount.getRoleCount(
                name,
            )}</span
        >
        <Range
            id={`range-${name}`}
            min="0"
            max="3"
            step="1"
            size="sm"
            onchange={(e) => {
                /* @ts-ignore becasue e has value even though it may not appear to */
                roleSelectionCount.updateRoleCount(name, e.target.value);
            }}
        />
    </Label>
{/snippet}

<Label class="space-y-2 dark:text-primary-500"
    >Choose Role(s) Your Team Needs to Fill:
    <Accordion multiple>
        {#each ROLES as role}
            {@const count = role.subDisipline.reduce((subtotal, d) => {
                subtotal = +subtotal + roleSelectionCount.getRoleCount(d);
                return subtotal;
            }, +roleSelectionCount.getRoleCount(role.name))}
            <AccordionItem tag="div" classInactive="hover:dark:bg-slate-700">
                <span slot="header" class="ps-2">{role.name}: {count}</span>
                {@render labeledRoleRange(role.name, true)}
                {#each role.subDisipline as discipline}
                    <Label class="space-y-2 mb-4 dark:text-slate-50">
                        {@render labeledRoleRange(discipline, false)}
                    </Label>
                {/each}
                {#if count > 0}
                    <div class="grid grid-cols-2 gap-6">
                        {#each teamTool.listOfToolsUsed as tool}
                            {@const checked =
                                teamTool.toolsNeeded
                                    .get(tool)
                                    ?.has(role.name) ?? false}
                            <Checkbox
                                custom
                                {checked}
                                class="mt-4"
                                onclick={() =>
                                    teamTool.toolsNeedToggle(tool, role.name)}
                            >
                                <div
                                    class="font-normal p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-primary-400 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    {tool}
                                </div>
                            </Checkbox>
                        {/each}
                    </div>
                {/if}
            </AccordionItem>
        {/each}
    </Accordion>
</Label>
