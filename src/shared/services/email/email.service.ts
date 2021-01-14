import {IEmail, IEmailTag} from './email.interface';
import emails from './emails.json';


const getEmails = async (): Promise<IEmail[]> => {
    return emails.messages;
};

const getEmailTags = async (): Promise<IEmailTag> => {
    const emailTags: IEmailTag = {};

    for (const email of emails.messages) {
        if (email.tags) {
            for (const tag of email.tags) {
                emailTags[tag] = (emailTags[tag]) ? emailTags[tag] + 1 : 1;
            }
        }
    }
    return emailTags;
};

export default {
    getEmails,
    getEmailTags,
};

export type {
    IEmail,
    IEmailTag,
};
