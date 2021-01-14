

interface IEmail {
    id: string;
    subject: string;
    sender: string;
    body: string;
    tags: string[];
    date: string;
}

interface IEmailTag {
    [tag: string]: number
}

export type {
    IEmail,
    IEmailTag,
};
