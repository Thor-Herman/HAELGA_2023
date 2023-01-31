import TextBox from './TextBox';

const InformationSection = () => {
  return (
    <section className="mx-auto mb-32 max-w-xl grid-cols-2 gap-x-4 px-4 md:grid md:max-w-5xl">
      <TextBox title="INFO" bgColor="bg-lightBlue">
        <p>
          For å sende inn bevis på oppgaver du har fullført, send melding Magnus Hanesand eller Eva Kvalø på slack.
          <br />
          Gruppe 1-6 sender til Magnus og gruppe 7-12 sender til Eva.
        </p>
      </TextBox>
      <TextBox title="FREDAG" bgColor="bg-green">
        <p>
          15:00 (<i>R5</i>) - HÆLGA-kickoff <br />
          15:30 - Workshops <br />
          17:30 - Middagsgrupper <br />
        </p>
      </TextBox>
      <TextBox title="LØRDAG" bgColor="bg-green">
        <p>
          11:30 (<i>Hovedbygget</i>) - Ekspedisjonsløp! <br />
          13:30 (<i>R5/R8</i>) - Lyntaler <br />
          16:00 - Bussen kjører til ?̶͓̎?̶̞͋?̸̢̋?̵̈́͜?̴̰͝?̸̧͘ <br />
          00:30 - Bussen kjører tilbake til Hovudbygget <br />
        </p>
      </TextBox>
      <TextBox title="SØNDAG" bgColor="bg-green">
        <p>Frivillig HÆNGA med AbaHÆNG ❤️</p>
      </TextBox>
    </section>
  );
};

export default InformationSection;
