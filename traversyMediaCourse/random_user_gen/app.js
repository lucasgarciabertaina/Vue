const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser(){
            const resp = await fetch('https://randomuser.me/api')
            const data = await resp.json()

            this.firstName = data.results[0].name.first
            this.lastName = data.results[0].name.last
            this.email = data.results[0].email
            this.gender = data.results[0].gender
            this.picture = data.results[0].picture.large
        },
    },
})

app.mount('#app')