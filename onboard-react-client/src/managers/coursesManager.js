class CoursesManager {

    didChangeCourses = () => {
    }

    constructor() {
        this.courses = []
        this.getData()
    }

    async getData() {
        return await fetch('http://ec2-35-183-119-218.ca-central-1.compute.amazonaws.com:3000/courses/')
            .then(data => data.json())
            .then((data) => {
                if (!data.length) {
                    return
                }
                this.courses = data
                this.handleChange()
            });
    }

    handleChange() {
        this.didChangeCourses(this.courses)
    }
}

export default CoursesManager