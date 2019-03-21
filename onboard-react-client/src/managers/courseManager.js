var defaultModules = [
    {
        title: "Intro to slack",
        contents: [
            {
                type: "text",
                title: "Slack 101"
            },
            {
                type: "text",
                title: "Hello world"
            }
        ]
    },
    {
        title: "Interacting with people",
        contents: [
            {
                type: "text",
                title: "Learn to chat"
            },
            {
                type: "text",
                title: "Learn to add emojis"
            },
            {
                type: "text",
                title: "Learn to add reactions"
            },
            {
                type: "text",
                title: "Learn to make polls"
            }
        ]
    }
];

class CourseManager {
    constructor() {
        this.modules = defaultModules
    }

    allModules() {
        return this.modules
    }

    addModule() {
        const newModule = {
            title: "Not titled",
            contents: [
                {
                    type: "text",
                    title: "Slack 202"
                }
            ]
        };

        this.modules = [...this.modules, newModule];
    }
}

export default CourseManager