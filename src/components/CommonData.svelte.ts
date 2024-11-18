import { readonly } from "svelte/store";
import { SvelteMap, SvelteSet } from "svelte/reactivity";
const TEAM_PHASE_ARRAY = [
  {
    name: "Exploring",
    help:
      "Looking into various fields within game or software development to find my fit.",
  },
  {
    name: "Committing",
    help: "Focused on a specific role, aiming to expand my expertise in it.",
  },
  {
    name: "Showcasing",
    help:
      "Established and ready to compile a portfolio that'll open new doors.",
  },
  {
    name: "Contributing",
    help:
      "Already hired in the industry and seeking to come to give back by creating positive-impact products.",
  },
  { name: "Mentoring", help: "Seeking to mentor others who create." },
];

// AI Assited tools separation begin
const gameEngines = [
  "Unity",
  "Godot",
  "Unreal Engine",
  "Construct",
  "Clickteam Fusion",
  "CryENGINE",
  "Open3DEngine",
  "AppGameKit"
];

const programmingLanguages = [
  "Construct 3",
  "Adventure Game Studio",
  "RPG Maker",
  "PICO-8",
  "GDevelop",
  "Python",
  "Lua",
  "C#",
  "Java",
  "C++"
];

const audioDesignTools = [
  "Ableton Live",
  "Pro Tools",
  "FL Studio",
  "Logic Pro X",
  "GarageBand",
  "Audacity",
  "Reaper",
  "Cubase",
  "Nuendo",
  "Sibelius",
  "Adobe Audition",
  "Sound Forge",
  "Reason",
  "Cakewalk by BandLab",
  "Wwise",
  "FMOD Studio",
  "Renoise",
  "EastWest Quantum Leap",
  "Native Instruments Komplete"
];

const threeDArtTools = [
  "Blender",
  "Maya",
  "Houdini",
  "Photoshop",
  "Substance Painter",
  "Substance Designer",
  "ZBrush",
  "Mudbox",
  "3D Coat",
  "Quixel Suite",
  "Marvelous Designer",
  "Cinema 4D",
  "Autodesk 3ds Max",
  "DAZ Studio",
  "Poser",
  "LightWave 3D"
];

const twoDArtTools = [
  "Photoshop",
  "Substance Painter",
  "Substance Designer",
  "ZBrush",
  "Adobe Illustrator",
  "CorelDRAW",
  "GIMP",
  "Inkscape",
  "Affinity Designer",
  "SketchBook",
  "Clip Studio Paint",
  "Toon Boom Harmony",
  "Moho (Anime Studio)",
  "Dragonframe",
  "Pencil2D",
  "Spine",
  "TVPaint Animation",
  "Adobe Animate"
];

const animationSpecificTools = [
  "Blender (Animation)",
  "Maya (Animation)",
  "Houdini",
  "Autodesk MotionBuilder",
  "Adobe Character Animator",
  "Synfig Studio"
];


const projectManagementTools = [
  "Trello",
  "Jira",
  "ClickUp",
  "Asana",
  "Monday.com",
  "Basecamp",
  "Smartsheet",
  "Wrike",
  "Notion",
  "Miro",
  "Microsoft Project",
  "Confluence",
  "Redmine",
  "GitHub Projects",
  "Zoho Projects",
  "TeamGantt",
  "ProofHub",
  "MeisterTask",
  "Airtable",
  "GitHub",
  "GitLab",
  "Bitbucket",
  "Perforce Helix Core",
  "SVN (Apache Subversion)",
  "Assembla",
  "Plastic SCM",
  "Unity Collaborate"
];

const miscellaneousTools = [
  "Google Drive",
  "TeamViewer",
  "Parsec"
];

// TODO: Improve this structure
export const TOOLS = {
  "Game Engines": new Set([
    "Unity",
    "Unreal",
    "Godot",
    "Construct",
    "Clickteam Fusion",
    "CryENGINE",
    "Open3DEngine",
    "AppGameKit",
  ]),
  "Programming Languages": new Set([
    "Construct 3",
    "Adventure Game Studio",
    "RPG Maker",
    "PICO-8",
    "GDevelop",
    "Python",
    "Lua",
    "C#",
    "Java",
    "C++"
  ]),
  "Audio Design Tools": new Set([
    "Ableton Live",
    "Pro Tools",
    "FL Studio",
    "Logic Pro X",
    "GarageBand",
    "Audacity",
    "Reaper",
    "Cubase",
    "Nuendo",
    "Sibelius",
    "Adobe Audition",
    "Sound Forge",
    "Reason",
    "Cakewalk by BandLab",
    "Wwise",
    "FMOD Studio",
    "Renoise",
    "EastWest Quantum Leap",
    "Native Instruments Komplete"
  ]),
  "3D Art Tools": new Set([
    "Blender",
    "Maya",
    "Houdini",
    "Photoshop",
    "Substance Painter",
    "Substance Designer",
    "ZBrush",
    "Mudbox",
    "3D Coat",
    "Quixel Suite",
    "Marvelous Designer",
    "Cinema 4D",
    "Autodesk 3ds Max",
    "DAZ Studio",
    "Poser",
    "LightWave 3D"
  ]),
  "2D Art Tools": new Set([
    "Photoshop",
    "Substance Painter",
    "Substance Designer",
    "ZBrush",
    "Adobe Illustrator",
    "CorelDRAW",
    "GIMP",
    "Inkscape",
    "Affinity Designer",
    "SketchBook",
    "Clip Studio Paint",
    "Toon Boom Harmony",
    "Moho (Anime Studio)",
    "Dragonframe",
    "Pencil2D",
    "Spine",
    "TVPaint Animation",
    "Adobe Animate"
  ]),
  "Animation Tools": new Set([
    "Photoshop",
    "Substance Painter",
    "Substance Designer",
    "ZBrush",
    "Adobe Illustrator",
    "CorelDRAW",
    "GIMP",
    "Inkscape",
    "Affinity Designer",
    "SketchBook",
    "Clip Studio Paint",
    "Toon Boom Harmony",
    "Moho (Anime Studio)",
    "Dragonframe",
    "Pencil2D",
    "Spine",
    "TVPaint Animation",
    "Adobe Animate"
  ]),
  "Project Management Tools": new Set([
    "Blender (Animation)",
    "Maya (Animation)",
    "Houdini",
    "Autodesk MotionBuilder",
    "Adobe Character Animator",
    "Synfig Studio"
  ]),
  "Miscellaneous Tools": new Set([
    "Google Drive",
    "TeamViewer",
    "Parsec"
  ]),
  
} as const;


// AI Assited tools separation end

export const ALL_TOOLS = new Set(gameEngines.concat(programmingLanguages, audioDesignTools, threeDArtTools, twoDArtTools, animationSpecificTools, projectManagementTools, miscellaneousTools))

const ROLE_TYPES = [
  {name: "Producer (Scrum, Agile, Leadership)", tools: projectManagementTools.concat(miscellaneousTools)},
  {name: "Artist (3D, 2D, UI, Technical, Procedural)", tools: twoDArtTools.concat( threeDArtTools)},
  {name: "Marketer (SEO, Social Media, Content, Strategic)", tools: projectManagementTools.concat(miscellaneousTools)},
  {name: "Sound Artist (Composition, Sound Effects, Foley, Mixing)", tools: audioDesignTools},
  {name: "Programmer (Gameplay, Engine, Tools, AI, Graphics)", tools: gameEngines.concat(programmingLanguages)},
  {name: "Animator (3D, 2D, Motion Capture, Rigging)", tools: animationSpecificTools},
  {name: "Designer (Gameplay, Level, UX, Narrative, Systems)", tools: projectManagementTools},
];

export const TIMEZONES = [
  "Asia Pacific Morning",
  "Asia Pacific Evening",
  "EU Morning",
  "EU Evening",
  "US East Coast Morning",
  "US East Coast Evening",
  "US West Coast Morning",
  "US West Coast Evening",
]

const NO_TEAM_PHASE = {name: "None Selected", help: "No current phase select"};

class TeamPhase {
  #phaseIndex: number = $state(0);
  #teamPhaseLenght = TEAM_PHASE_ARRAY.length;
  currentPhase = $derived(this.getPhaseInfo(this.#phaseIndex));
  constructor() {}

  get phaseIndex(): number {
    return this.#phaseIndex;
  }

  set phaseIndex(newValue: number){
    // Update phase index IF within range
    if (0 <= this.#phaseIndex && this.#phaseIndex < this.#teamPhaseLenght){
      this.#phaseIndex = newValue
    }
  }

  getPhaseInfo(index:number): { name: string; help: string; } {
    return 0 <= index && index < this.#teamPhaseLenght ? TEAM_PHASE_ARRAY[index]! : NO_TEAM_PHASE;
  }

  get numberOfPhases(): number {
    return this.#teamPhaseLenght;
  }
}

class RolesNeed {
  listOfRoles = ROLE_TYPES.map(role => role.name);
  listOfToolsByRole = ROLE_TYPES.map(role => role.tools) ?? [];
  selectedRoles: number[] = $state([]);
  selectedTools: string[] = $state([]);

  rolesText: string = $derived(this.selectedRoles.map((roleSelected, i) => roleSelected ? ROLE_TYPES[i]!.name : "").filter(role => role).join("\n") || "None");
  toolsText: string = $derived(this.selectedTools.join(", "));

  toggleTools(tool: string){
    $inspect(this.selectedTools)
    const toolIndex = this.selectedTools.indexOf(tool);
    // Not found - Add to array
    if(toolIndex < 0) {
      this.selectedTools.push(tool);
    }
    // Else - Remove from array
    else {
      this.selectedTools.splice(toolIndex, 1);
    }
  }
}

// Using `as const` to force TypeScript to treat strings as literals
export const ROLES = [
  {name: "Producer", tools: projectManagementTools.concat(miscellaneousTools), subDisipline: ["Scrum Master", "Agile", "Leadership"] } ,
  {name: "Marketer", tools: projectManagementTools.concat(miscellaneousTools), subDisipline: ["SEO", "Social Media", "Content", "Strategic"] } ,
  {name: "Artist", tools: twoDArtTools.concat( threeDArtTools), subDisipline: ["3D", "2D", "UI", "Technical", "Procedural"] } ,
  {name: "Sound Artist", tools: audioDesignTools, subDisipline: ["Composition", "Sound Effects", "Foley", "Mixing"] } ,
  {name: "Programmer", tools: gameEngines.concat(programmingLanguages), subDisipline: ["Gameplay", "Engine", "Tools", "AI", "Graphics"] } ,
  {name: "Animator", tools: animationSpecificTools, subDisipline: ["3D", "2D", "Motion Capture", "Rigging"] } ,
  {name: "Designer", tools: projectManagementTools, subDisipline: ["Gameplay", "Level", "UX", "Narrative", "Systems"] } ,
] as const;

export const ROLE_NAMES = ROLES.map(r => r.name);

export type RoleNameType = typeof ROLES[number]["name"];
export type SubRoleNameType = typeof ROLES[number]["subDisipline"][number];
export type AllRoleNameType = RoleNameType | SubRoleNameType;

class TeamToolCollector{
  #toolsUsed: SvelteSet<string> = new SvelteSet();
  #additionalTools: SvelteSet<string> = new SvelteSet();
  toolsNeeded: SvelteSet<string> = new SvelteSet();
  
  set additionalTools(value: string){
    if(value){
      this.#additionalTools.clear();
      value.split("\n")
      .forEach((tool) => this.#additionalTools.add(tool.trim()))
    }
  }

  get toolsUsedFormatted(): string {
    return [...this.#toolsUsed].concat([...this.#additionalTools]).join("\n");
  }

  has(tool: string): boolean{
    return this.#toolsUsed.has(tool);
  }

  toolsUsedToggle(tool: string){
    // NOTE: if delete opetation is false,
    //       tool is not in toolsUsed,
    //       then add tool to it
    this.#toolsUsed.delete(tool) || this.#toolsUsed.add(tool)
  } ;
}
  

class RoleCounter {
  neededRolesCount: SvelteMap<AllRoleNameType, number> = new SvelteMap();

  constructor(){
    $effect.root(
      () => {$effect(() => {
        this.neededRolesCount;
      })}
    )
  }

  getRoleCount(name: AllRoleNameType): number {
    return this.neededRolesCount.get(name) ?? 0;
  }

  updateRoleCount(name: AllRoleNameType, count: number) {
    if (count <= 0){
      this.neededRolesCount.delete(name);
    }
    else {
      this.neededRolesCount.set(name, count);
    }
  }

  formatRolesNeeded(): string{
    return [...roleSelectionCount
            .neededRolesCount
            .entries()]
            .map(([role, count]) => `${count}x ${role}`)
            .reduce((paragraph, line) => {paragraph += line + "\n"; return paragraph}, "")
            .trimEnd()
  }
}

export const teamPhase = new TeamPhase();
export const rolesNeeded = new RolesNeed();
export const teamTool = new TeamToolCollector();
export const roleSelectionCount = $state(new RoleCounter());