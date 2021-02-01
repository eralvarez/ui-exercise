

interface IEmail {
    id: string;
    subject: string;
    sender: string;
    body: string;
    tags: string[];
    date: string;
    checked?: boolean;
    dateString?: string;
}

interface IEmailTag {
    [tag: string]: number
}

export type {
    IEmail,
    IEmailTag,
};
