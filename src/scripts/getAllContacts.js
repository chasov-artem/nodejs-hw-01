import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('All contacts:', contacts);
  } catch {
    (error) => error.message;
  }
};

console.log(await getAllContacts());
