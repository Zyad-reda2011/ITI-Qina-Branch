import Course from "./Course";
export class OnlineCourse extends Course
{
    constructor(title,duration,platform)
    {
        super(title,duration)
        this.platform = platform
    }
    display()
    {
        console.log(`Online Course: ${title}, Duration: ${duration} w3. Create at least:${platform}`)
    }
}