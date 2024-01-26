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

        // metodo che mi restituisce il percorso dell'avatar
        getAvatarUrl(avatar){
            return `/assets/img/avatar${avatar}.jpg`;
        },

        // metodo che viene eseguito al click di un contatto, mostra la chat con il contatto in questione
        showClickedContactChat(contactId, contactName, contactAvatar, contactMessages) {

            // mostra le info del contatto in alto
            this.currentUser = contactName;
            this.currentAvatar = contactAvatar;
            this.textId = [];
            this.textMessages = [];
            this.textStatus =[];
            this.textDate = [];

            
            // mostra i messaggi
            this.textMessagesArray = contactMessages;
            for (message in contactMessages){
                this.textId.push(contactMessages[message].id);
                this.textStatus.push(contactMessages[message].status);
                this.textDate.push(contactMessages[message].date);
                this.textMessages.push(contactMessages[message].text);
                
            }
        },

    
        // metodo che aggiunge il messaggio alla chat
        addMessageToChat(chatInput){
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: this.chatInput,
                status: 'sent'
            }


            this.textMessagesArray.push(newMessage);

            this.chatInput = '';

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

        // metodo "cerca chat"

        
        
    },

})

app.mount("#root");