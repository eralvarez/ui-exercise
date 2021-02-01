import { GetStaticProps } from 'next';

import Layout from '@shared/components/layout/Layout';
import EmailTable from '@shared/components/email-table/EmailTable';
import emailService, {IEmail, IEmailTag} from '@shared/services/email/email.service';


interface IProps {
    emails: IEmail[],
    emailTags: IEmailTag,
}

const Index = (props: IProps) => {
    return (
        <Layout emailTags={props.emailTags}>
            <EmailTable emails={props.emails}></EmailTable>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const emails = await emailService.getEmails();
    const emailTags = await emailService.getEmailTags();

    return {
        props: {
            emails,
            emailTags,
        },
    };
};
export default Index;
