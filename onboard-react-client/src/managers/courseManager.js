class CourseManager {

    didChangeModules = () => {
    }

    constructor(courseId) {
        this.modules = []
        this.courseId = courseId
        this.getData()
    }

    async getData() {
        return await fetch('http://ec2-35-183-119-218.ca-central-1.compute.amazonaws.com:3000/course/' + this.courseId)
            .then(data => data.json())
            .then((data) => {

                if (!data.length) {
                    return
                }
                this.title = data[0].title
                this.modules = data[0].modules
                this.handleChange()
            });
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
        if (clickedItem.key.includes("section")) {
            this.addSection(clickedItem.moduleindex, clickedItem.sectionindex)
        } else {
            this.addModule(clickedItem.moduleindex)
        }
        fetch('http://ec2-35-183-119-218.ca-central-1.compute.amazonaws.com:3000/course/' + this.courseId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.title,
                modules: this.modules,
            })
        })
    }

    saveSectionContents(moduleIndex, sectionIndex, contents) {
        this.modules[moduleIndex].sections[sectionIndex].contents = contents;
        fetch('http://ec2-35-183-119-218.ca-central-1.compute.amazonaws.com:3000/course/' + this.courseId, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: this.title,
                modules: this.modules,
            })
        })
    }

    handleChange() {
        this.didChangeModules(this.modules)
    }
}

export default CourseManager