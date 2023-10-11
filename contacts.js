const fs = require('fs');
const path = require("path")
const contactsPath = __dirname

function listContacts() {
    fs.readFile(
        path.join(contactsPath, "contacts.json"),
        {
            encoding: "ascii",
            flag: "r",
        }, 
        (error, data) => {
            if(error) return console.log("hay un error:", error)
            console.log("CONTACTS")
            console.table(JSON.parse(data))
        })
}

function getContactById(contactId) {
    fs.readFile(
        path.join(contactsPath, "contacts.json"),
        {
            encoding: "ascii",
            flag: "r",
        }, 
        (error, data) => {
            if(error) return console.log("hay un error:", error)
            const contacts = JSON.parse(data)
        for (let contact of contacts){
            if (contact.id === contactId){
                console.log(`Contacto con el ID ${contactId} encontrado:`)
                console.table(contact)
                return
            }
        }
        console.log(`Contacto con el ID ${contactId} no encontrado:`)
        })
}

function removeContact(contactId) {
    fs.readFile(
        path.join(contactsPath, "contacts.json"),
        {
            encoding: "ascii",
            flag: "r",
        }, 
        (error, data) => {
            if(error) return console.log("hay un error:", error)
            const contacts = JSON.parse(data)
            const idDelete = contacts.findIndex((contacto) => {
                return contacto.id === contactId;
            });
            if (idDelete !== -1) {
                contacts.splice(idDelete, 1);
            
                const newContent = JSON.stringify(contacts);
            
                fs.writeFile(path.join(contactsPath, "contacts.json"), newContent, (error) => {
                    if (error) {
                    console.error('Error al escribir el archivo de contactos:', error);
                    } else {
                    console.log(`Se ha eliminado el contacto`);
                    }
                });
                } else {
                console.log(`No se encontró el contacto`);
                }
        })
}

function addContact(name, email, phone, id = new Date()) {
    if(!name || !email || !phone) return console.log("Para agregar un contacto necesitas un nombre, un email y un numero de celular, verifica q esten los 3")
    const newContact = {
        id,
        name,
        email,
        phone,
    }
    fs.readFile(
        path.join(contactsPath, "contacts.json"),
        {
            encoding: "ascii",
            flag: "r",
        }, 
        (error, data) => {
            if(error) return console.log("hay un error:", error)
            const contacts = JSON.parse(data)

            contacts.push(newContact)
            
            const newContent = JSON.stringify(contacts);
            
            fs.writeFile(path.join(contactsPath, "contacts.json"), newContent, (error) => {
                if (error) {
                console.error('Error al agregar el nuevo contacto al archivo de contactos:', error);
                } else {
                console.log(`Se ha agregado el contacto`);
                console.table(contacts)
                }
            });
        })
}

module.exports = {listContacts, getContactById, removeContact, addContact}
