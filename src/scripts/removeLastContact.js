import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (!contacts.length) {
      return console.log('No contacts to remove.');
    } else {
      contacts.pop();
      await writeContacts(contacts);
    }
  } catch {
    (error) => error.message;
  }
};

removeLastContact();
