import { LEVELS } from "./levels.enum";


export class Task {
    name ="";
    descriptions = "";
    completed = false;
    level = LEVELS.normal;

    constructor(name, description, completed, level) {
        this.name = name;
        this.descriptions = description;
        this.completed = completed;
        this.level = level;
    }
}