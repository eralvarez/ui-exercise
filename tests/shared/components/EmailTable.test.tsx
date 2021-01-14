import { render, screen } from '@testing-library/react'

import EmailTable from '../../../src/shared/components/email-table/EmailTable'
import emailList from '../../../src/shared/services/email/emails.json';
import { IEmail } from '../../../src/shared/services/email/email.service';


describe('EmailTable component', () => {
    it('should display all emails in the table', async () => {
        const emails: IEmail[] = emailList.messages;

        render(
        	<EmailTable
        		emails={emails}
        	/>
        )
        
        const emailRows = await screen.getAllByTestId('emailRow');
        expect(emailRows.length).toBe(emails.length);
    })

})
