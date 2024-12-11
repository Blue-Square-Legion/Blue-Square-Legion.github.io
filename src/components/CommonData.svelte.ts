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
  "RPG Maker",
  "AppGameKit",
  "Adventure Game Studio",
  "Clickteam Fusion",
  "Construct 3",
  "CryENGINE",
  "GDevelop",
  "Open3DEngine",
  "PICO-8",
];

const programmingLanguages = [
  "C#",
  "C++",
  "GDScript",
  "C",
  "Java",
  "JavaScript",
  "Lua",
  "Python",
  "Rust",
  "TypeScript",
];

const audioDesignTools = [
  "Wwise",
  "FMOD Studio",
  "Ableton Live",
  "Adobe Audition",
  "Audacity",
  "Pro Tools",
  "FL Studio",
  "Logic Pro X",
  "GarageBand",
  "Reaper",
  "Cubase",
  "Nuendo",
  "Sibelius",
  "Sound Forge",
  "Reason",
  "Cakewalk by BandLab",
  "Renoise",
  "EastWest Quantum Leap",
  "Native Instruments Komplete"
];

const threeDArtTools = [
  "Blender",
  "Maya",
  "Houdini",
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
  "GitHub",
  "Miro",
  "Trello",
  "GitLab",
  "Notion",
  "Jira",
  "ClickUp",
  "Asana",
  "Monday.com",
  "Basecamp",
  "Smartsheet",
  "Wrike",
  "Microsoft Project",
  "Confluence",
  "Redmine",
  "GitHub Projects",
  "Zoho Projects",
  "TeamGantt",
  "ProofHub",
  "MeisterTask",
  "Airtable",
  "Bitbucket",
  "Perforce Helix Core",
  "SVN (Apache Subversion)",
  "Assembla",
  "Plastic SCM",
  "Unity Collaborate",
  "Google Drive",
  "TeamViewer",
  "Parsec"
];

// TODO: Improve this structure
export const TOOLS = {
  "Game Engines": new Set([
    "Unity",
    "Godot",
    "Unreal Engine",
    "RPG Maker",
    "AppGameKit",
    "Adventure Game Studio",
    "Clickteam Fusion",
    "Construct 3",
    "CryENGINE",
    "GDevelop",
    "Open3DEngine",
    "PICO-8",
  ]),
  "Programming Languages": new Set([
    "C#",
    "C++",
    "GDScript",
    "C",
    "Java",
    "JavaScript",
    "Lua",
    "Python",
    "Rust",
    "TypeScript",
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
    "Blender (Animation)",
    "Maya (Animation)",
    "Houdini",
    "Autodesk MotionBuilder",
    "Adobe Character Animator",
    "Synfig Studio"
  ]),
  "Project Management Tools": new Set([
    "GitHub",
    "Miro",
    "Trello",
    "GitLab",
    "Notion",
    "Jira",
    "ClickUp",
    "Asana",
    "Monday.com",
    "Basecamp",
    "Smartsheet",
    "Wrike",
    "Microsoft Project",
    "Confluence",
    "Redmine",
    "GitHub Projects",
    "Zoho Projects",
    "TeamGantt",
    "ProofHub",
    "MeisterTask",
    "Airtable",
    "Bitbucket",
    "Perforce Helix Core",
    "SVN (Apache Subversion)",
    "Assembla",
    "Plastic SCM",
    "Unity Collaborate",
    "Google Drive",
    "TeamViewer",
    "Parsec"
  ]),
} as const;


// AI Assited tools separation end

export const ALL_TOOLS = new Set(gameEngines.concat(programmingLanguages, audioDesignTools, threeDArtTools, twoDArtTools, animationSpecificTools, projectManagementTools))

const ROLE_TYPES = [
  {name: "Producer (Scrum, Agile, Leadership)", tools: projectManagementTools},
  {name: "Artist (3D, 2D, UI, Technical, Procedural)", tools: twoDArtTools.concat( threeDArtTools)},
  {name: "Marketer (SEO, Social Media, Content, Strategic)", tools: projectManagementTools},
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
  {name: "Producer", tools: projectManagementTools, subDisipline: ["Scrum Master", "Agile", "Team Lead"] } ,
  {name: "Marketer (SEO, Social Media, Content, Strategic)", tools: projectManagementTools, subDisipline: [] } ,
  {name: "Artist", tools: twoDArtTools.concat( threeDArtTools), subDisipline: ["3D Artist", "2D Artist", "UI Artist", "Technical Artist", "Procedural Artist"] } ,
  {name: "Sound Artist", tools: audioDesignTools, subDisipline: ["Music Composer", "Sound Effects/Foley Artist", "Audio Engineer"] } ,
  {name: "Programmer", tools: gameEngines.concat(programmingLanguages), subDisipline: ["Gameplay Programmer", "Engine Programmer", "Tools Programmer", "AI Programmer", "Graphics Programmer"] } ,
  {name: "Animator", tools: animationSpecificTools, subDisipline: ["3D Animator", "2D Animator", "Motion Capture Animator", "Animation Rigger"] } ,
  {name: "Designer", tools: projectManagementTools, subDisipline: ["Gameplay Designer", "Level Designer", "UX Designer", "Narrative Designer", "Systems Designer"] } ,
] as const;

export const ROLE_NAMES = ROLES.map(r => r.name);

export type RoleNameType = typeof ROLES[number]["name"];
export type SubRoleNameType = typeof ROLES[number]["subDisipline"][number];
export type AllRoleNameType = RoleNameType | SubRoleNameType;

class TeamToolCollector{
  #toolsUsed: SvelteSet<string> = new SvelteSet();
  #additionalTools: SvelteSet<string> = new SvelteSet();
  toolsNeeded: SvelteMap<string, SvelteSet<string>> = new SvelteMap();
  
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

  get listOfToolsUsed(): Set<string> {
    return this.#toolsUsed.union(this.#additionalTools);
  }

  toolsUsedToggle(tool: string){
    // NOTE: if delete opetation is false,
    //       tool is not in toolsUsed,
    //       then add tool to it
    this.#toolsUsed.delete(tool) || this.#toolsUsed.add(tool)
  } ;
  
  toolsNeedToggle(tool: string, role: string){
    // If tool not yet added, add it now with empty set
    if (!this.toolsNeeded.has(tool)){
      this.toolsNeeded.set(tool, new SvelteSet());
    }
    // NOTE: if delete opetation is false,
    //       role is not in toolsNeeded[tool],
    //       then add role to it
    this.toolsNeeded.get(tool)!.delete(role) || this.toolsNeeded.get(tool)!.add(role)
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

export const MAX_MEETING_AMOUNT = 5;

export class MeetingInfo {
  onMon: boolean = $state(false);
  onTue: boolean = $state(false);
  onWed: boolean = $state(false);
  onThu: boolean = $state(false);
  onFri: boolean = $state(false);
  startTime: string = $state("12:30");
  startHour?: number = $state(0);
  startMinute?: number = $state(0);
  endHour?: number = $state(0);
  endMinute?: number = $state(0);
  duration?: number = $state(0);

  constructor() {}

  get meetingDays(): string[] {
      const days = [
          this.onMon && "Mon.",
          this.onTue && "Tue.",
          this.onWed && "Wed.",
          this.onThu && "Thu.",
          this.onFri && "Fri.",
      ];
      return days.filter((d) => d !== false);
  }

  get meetingStartTimeStamp(): string {
    const d = new Date();
    var converted = new Date(d.toString().split(":")[0]!.slice(0,-2) + this.startTime);
    return `<t:${Math.floor(converted.getTime()/1000)}:t>`;
  }
}

export class MeetingsArray {
  #capacity = 0;
  #size = $state(1);
  meetings: MeetingInfo[] = $state([]);

  constructor(size: number = MAX_MEETING_AMOUNT){
    this.#capacity = size;
    this.meetings = Array(this.#capacity)
                .fill(0)
                .map((_) => new MeetingInfo());
  }

  get length(): number{
    return this.#size
  }

  set size(value: number){
    this.#size = Math.min(Math.max(value,0), this.#capacity)
  }

  meetingsText(daySep: string = "/", timeSep:string ="@", meetingSep: string = "\n"): string{
    return this.meetings.filter((m, i) => i < this.#size && m.meetingDays.length > 0).map(
      (m) => `${m.meetingDays.join(daySep)}${timeSep}${m.meetingStartTimeStamp}`,
  ).join(meetingSep)
  }
}

export const meetingsList = new MeetingsArray();