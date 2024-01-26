console.log("vue ok", Vue)

const { createApp } = Vue;


const app = createApp({
    data() {
        return{
            user: data.user,
            contacts: data.contacts,
            currentUser: '',
            currentAvatar: '',
            textMessagesArray: [],
            textId: [],
            textMessages: [],
            textStatus: [],
            textDate: [],
            chatInput: '',
            chatSearchInput: '',
        }
    },


    methods: {
        getAvatarUrl(avatar){
            return `/assets/img/avatar${avatar}.jpg`;
        },

        showClickedContactChat(contactId, contactName, contactAvatar, contactMessages) {

            // show the contact info on right header
            this.currentUser = contactName;
            this.currentAvatar = contactAvatar;
            this.textId = [];
            this.textMessages = [];
            this.textStatus =[];
            this.textDate = [];

            // devo linkare al v-for delle chat, l'array completo
            
            // show the messages 
            this.textMessagesArray = contactMessages;
            for (let i = 0; i < contactMessages.length; i++){
                this.textId.push(contactMessages[i].id);
                this.textStatus.push(contactMessages[i].status);
                this.textDate.push(contactMessages[i].date);
                this.textMessages.push(contactMessages[i].text);
                
            }
            console.log(this.textId);
            console.log(this.textDate);
            console.log(this.textMessages);
            console.log(this.textStatus);

            // devi mostrare a schermo la chat
        },
    
        addMessageToChat(chatInput){
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: this.chatInput,
                status: 'sent'
            }


            this.textMessagesArray.push(newMessage);





            setTimeout(() => {
                const receivedMessage = {
                  id: new Date().toISOString(),
                  date: new Date().toLocaleDateString(),
                  text: 'ok',
                  status: 'received'
                };
          
                this.textMessagesArray.push(receivedMessage);
              }, 1000);
        }
        
    },

})

app.mount("#root");