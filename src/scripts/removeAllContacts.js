import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
  } catch {
    (error) => error.message;
  }
};

removeAllContacts();
