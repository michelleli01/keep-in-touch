interface EmailTemplateProps {
  groupName: string;
  issueNumber: number;
  date: string;
}

export const EmailTemplate = ({
  groupName,
  issueNumber,
  date,
}: EmailTemplateProps) => (
  <div>
    <div>
      <h2>{groupName}</h2>
      <h3>
        Issue No.{issueNumber} - {date}
      </h3>
    </div>

    <section>
      <h4>Questions of the Week</h4>
    </section>
  </div>
);
