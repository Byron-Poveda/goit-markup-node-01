const fs = require('fs').promises;

const contactsPath = __dirname

function listContacts() {
    console.log("listContacts")
}

function getContactById(contactId) {
    console.log("getContactById")
}

function removeContact(contactId) {
    console.log("removeContact")
}

function addContact(name, email, phone) {
    console.log("addContact")
}

module.exports = {listContacts, getContactById, removeContact, addContact}
