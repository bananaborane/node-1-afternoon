let id = 0;
let messages = [];
let usernames = [];


module.exports = {
    create: (req, res)=>{
        const { text, time } = req.body;
        let newText = {
            id,
            text,
            time
        }
        messages.push(newText);
        id++;
        res.status(200).send(messages)
    },
    read: (req, res)=>{
        res.status(200).send(messages)
    },
    update: (req, res)=>{
        let indy = null;
        const { text, time } = req.body
        messages.forEach((msg, i)=>{
            if(msg.id === parseInt(req.params.id))
            indy = i;
        })
        messages[indy] = {
            id: messages[indy].id,
            text: text || messages[indy].text,
            time: time || messages[indy].time
        };
        res.status(200).send(messages)
    },
    delete: (req, res)=>{
        let indy = null;
        messages.forEach((msg, i)=>{
            if(msg.id === parseInt(req.params.id))
            indy = i;
        })
        messages.splice(indy, 1);
        res.status(200).send(messages)
    }
};


// module.exports = {
//     create: ( req, res ) => {
//       const { text, time } = req.body;
//       messages.push({ id, text, time });
//       id++;
//       res.status(200).send( messages );
//     },
  
//     read: ( req, res ) => {
//       res.status(200).send( messages );
//     },
  
//     update: ( req, res ) => {
//       const { text } = req.body;
//       const updateID = req.params.id;
//       const messageIndex = messages.findIndex( message => message.id == updateID );
//       let message = messages[ messageIndex ];
  
//       messages[ messageIndex ] = {
//         id: message.id,
//         text: text || message.text,
//         time: message.time
//       };
  
//       res.status(200).send( messages );
//     },
  
//     delete: ( req, res ) => {
//       const deleteID = req.params.id;    
//       messageIndex = messages.findIndex( message => message.id == deleteID );
//       messages.splice(messageIndex, 1);
//       res.status(200).send( messages );
//     }
//   };
