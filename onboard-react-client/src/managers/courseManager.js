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

    addModule(clickedIndex) {
        const newModule = {
            title: "New Module",
            sections: [
                {
                    title: "New Section",
                    contents: []
                }
            ]
        };

        this.modules.splice(clickedIndex + 1, 0, newModule)
        
        this.handleChange()
    }

    addSection(moduleIndex, sectionIndex) {
        const newSection = {
            title: "New Section",
            contents: []
        };

        this.modules[moduleIndex].sections.splice(sectionIndex + 1, 0, newSection)

        this.handleChange()
    }

    add(clickedItem) {
        if (clickedItem.key.includes("header")) {
            this.addModule(clickedItem.moduleindex)
        } else {
            this.addSection(clickedItem.moduleindex, clickedItem.sectionindex)
        }
    }

    handleChange() {
        this.didChangeModules(this.modules)
    }
}

export default CourseManager