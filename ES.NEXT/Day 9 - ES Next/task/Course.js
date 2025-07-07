export default class Course
{
    constructor(title,duration)
    {
        this.title = title
        this.duration = duration
    }
    display()
    {
        console.log(`Course: ${title}, Duration: ${duration} weeks`)
    }
}