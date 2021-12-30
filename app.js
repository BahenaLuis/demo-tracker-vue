new Vue({
    el: '#app',

    data() {
        return {
            courses: [],
            title: "",
            time: 0            
        }
    },

    computed: { 
        totalTime: function() {  
            let suma = 0;
            this.courses.forEach(course => {
                suma += parseInt(course.time);                
            });
            return suma;
        }
    },

    methods: { 
        saveCourse() {
            if (this.title != "" && this.time > 0) {
                let course = {
                    title: String,
                    time: Number
                } 
                course.title = this.title;
                course.time = this.time;
    
                this.courses.push(course);
                this.title = "";
                this.time = 0;
            }            
        }
    }
})