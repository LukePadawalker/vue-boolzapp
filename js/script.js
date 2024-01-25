console.log("vue ok", Vue)

const { createApp } = Vue;


const app = createApp({
    data() {
        return{
            user: data.user,
            contacts: data.contacts,
            currentUser: '',
            currentAvatar: '',
            textMessages: '',
            textStatus: '',
            textDate: '',

        }
    },
    methods: {
        showClickedContactChat(contactId, contactName, contactAvatar, contactMessages) {
            console.log(contactId);
            console.log(contactName);
            console.log(contactAvatar);
            console.log(contactMessages);

            // this.currentUser = contactName;
            // this.currentAvatar = contactAvatar;
            // this.textMessages = contactMessages.text;
            // console.log(textMessages)
            // this.textStatus = messages.status;
            // this.textDate = messages.date;
            // console.log(textMessages);
            // console.log(textStatus);
        }
    },

    computed: {
        chatInputSearch: '',

    }
})

app.mount("#root");