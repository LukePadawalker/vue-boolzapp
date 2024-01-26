console.log("Vue is okay", Vue);

const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            user: data.user,
            contacts: data.contacts,
            currentUser: '',
            currentAvatar: '',
            textMessagesArray: [],
            textDetails: {
                id: [],
                text: [],
                status: [],
                date: [],
            },
            chatInput: '',
            chatSearchInput: '',
            isHovered: false,
            hoveredMessageId: null,
            showOptionsList: false,
        }
    },
    computed: {
        // Computed method to filter contacts based on search input
        filteredChat() {
            const lowercasedSearchInput = this.chatSearchInput.toLowerCase();
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(lowercasedSearchInput));
        },
    },
    methods: {
        // Method that returns the avatar path
        getAvatarUrl(avatar) {
            return `/assets/img/avatar${avatar}.jpg`;
        },

        // Method executed when a contact is clicked, displaying the chat with the selected contact
        showClickedContactChat(contactId, contactName, contactAvatar, contactMessages) {
            // Display contact information at the top
            this.currentUser = contactName;
            this.currentAvatar = contactAvatar;

            // Reset arrays to show messages
            this.textDetails = {
                id: [],
                text: [],
                status: [],
                date: [],
            };

            // Display messages
            this.textMessagesArray = contactMessages;
            contactMessages.forEach(message => {
                this.textDetails.id.push(message.id);
                this.textDetails.status.push(message.status);
                this.textDetails.date.push(message.date);
                this.textDetails.text.push(message.text);
            });
        },

        // Method that adds a message to the chat
        addMessageToChat() {
            const newMessage = {
                id: new Date().toISOString(),
                date: new Date().toLocaleTimeString(),
                text: this.chatInput,
                status: 'sent'
            }

            // Add the new message to the chat
            this.textMessagesArray.push(newMessage);

            // Clear chat input
            this.chatInput = '';

            // Simulate a received message after a delay
            setTimeout(() => {
                const receivedMessage = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleTimeString(),
                    text: 'ok',
                    status: 'received'
                };

                // Add the received message to the chat
                this.textMessagesArray.push(receivedMessage);
            }, 1000);
        },
        // Method to show the button during hover
        showButton(messageId) {
            this.isHovered = true;
            this.hoveredMessageId = messageId;
        },

        // Method to hide the button when leaving hover
        hideButton() {
            this.isHovered = false;
            this.hoveredMessageId = null;
        },

        // Method to show the options list on button click
        showOptions() {
            this.showOptionsList = !this.showOptionsList;
        },

        // Method to handle the click on an option
        removeMessage(messageId) {

            const indexToRemove = messageId;
            this.textMessagesArray.splice((indexToRemove - 1), 1)
            this.currentMessageId = null;
        }


    },
});

app.mount("#root");
