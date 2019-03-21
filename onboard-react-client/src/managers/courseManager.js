var defaultModules = [
    {
        title: "Intro to slack",
        sections: [
            {
                title: "Slack 101",
                contents: [
                    {
                        type: "text",
                        text: "hello world"
                    }
                ]
            },
            {
                title: "Hello world",
                contents: []
            }
        ]
    },
    {
        title: "Interacting with people",
        sections: [
            {
                title: "Learn to chat",
                contents: []
            },
            {
                title: "Learn to add emojis",
                contents: []
            },
            {
                title: "Learn to add reactions",
                contents: []
            },
            {
                title: "Learn to make polls",
                contents: []
            }
        ]
    }
];

class CourseManager {

    didChangeModules = () => {}

    constructor() {
        this.modules = defaultModules
    }

    allModules() {
        return this.modules
    }

    addModule() {
        const newModule = {
            title: "Not titled",
            sections: [
                {
                    title: "Slack 202",
                    contents: []
                }
            ]
        };

        const modules = [...this.modules, newModule]
        this.modules = modules
        
        this.handleChange()
    }

    handleChange() {
        this.didChangeModules(this.modules)
    }
}

export default CourseManager