var app = new Vue({
    el: '#root',
    data: {
        
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        currentIndex : 0,
        newMessage :{
            date: "",
            message:"",
            status:"received"
        },
        searchContact: ""

    },
    methods: {
        setIndex: function(index){
            this.currentIndex = index;
        },
        addMessage: function(){
            if (this.newMessage.message != ""){
                let newMessageSend = {
                    date:dayjs().format("DD/MM/YYYY HH:mm:ss"),
                    message: this.newMessage.message,
                    status: "sent"
                }
                this.contacts[this.currentIndex].messages.push(newMessageSend);
                this.newMessage.message = "";
                setTimeout(() => {
                  let  messageReceived = {
                        date:dayjs().format("DD/MM/YYYY HH:mm:ss"),
                        message:"ok",
                        status:'received'
                    }
                    this.contacts[this.currentIndex].messages.push(messageReceived);
                }, 3000);
            }
        },   
            isInContact:function(){
                for (let i=0; i < this.contacts.length; i++)
                    if (this.contacts[i].name.toLowerCase().includes(this.searchContact.toLowerCase())){
                    this.contacts[i].visible = true;
                } else{
                    this.contacts[i].visible = false;                }
               
            }

    }   
})

//   @keyup su funzione che dovrà  fare un ciclo for e vedere se il se searchcontact è includes in contact.name = visibile - true altrimenti visible - false
//   v-if dove cicli i contatti, dove controllerà il valore di visibile se è true lo rende visibile altrimeno no 

