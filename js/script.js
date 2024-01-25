console.log("vue ok", Vue)

const { createApp } = Vue;


const app = createApp({
    data() {
        return{
            user: data.user,
            contacts: data.contacts,
        }
    },
    methods: {
        showClickedContact(contactName, contactAvatar) {
            console.log(contactName);
            console.log(contactAvatar);
        }
    }
})

app.mount("#root");