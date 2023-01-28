import TextBox from './TextBox';

const InformationSection = () => {
  return (
    <section className="mx-auto mb-32 max-w-xl grid-cols-2 gap-x-4 px-4 md:grid md:max-w-5xl">
      <TextBox title="REGLER" bgColor="bg-lightBlue">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
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
