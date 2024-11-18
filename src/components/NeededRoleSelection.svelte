<script lang="ts">
    import {
        ROLES,
        roleSelectionCount,
        type AllRoleNameType,
    } from "./CommonData.svelte.ts";
    import { Accordion, AccordionItem, Label, Range } from "flowbite-svelte";
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
            <AccordionItem tag="div" classInactive="hover:dark:bg-slate-700">
                <span slot="header" class="ps-2"
                    >{role.name}: {role.subDisipline.reduce((subtotal, d) => {
                        subtotal =
                            +subtotal + roleSelectionCount.getRoleCount(d);
                        return subtotal;
                    }, +roleSelectionCount.getRoleCount(role.name))}</span
                >
                {@render labeledRoleRange(role.name, true)}
                {#each role.subDisipline as discipline}
                    <Label class="space-y-2 mb-4 dark:text-slate-50">
                        {@render labeledRoleRange(discipline, false)}
                    </Label>
                {/each}
            </AccordionItem>
        {/each}
    </Accordion>
</Label>
