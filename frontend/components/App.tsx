import Aurora from './Aurora';
import Snow from './Snow';
import TeamsContainer from './TeamsContainer';
import TextBox from './TextBox';

const App = () => {
  return (
    <section className="text-white">
      <Snow />
      <Aurora />
      <div className="flex min-h-screen flex-col items-center pb-36">
        <div className="w-max pt-24 text-center font-bold">
          <h1 className="py-2 text-5xl">HÆLGA 2023</h1>
          <div className="border-[1px] border-white" />
        </div>
        <TeamsContainer />
      </div>
      <section className="px-4">
        <TextBox title="REGLER" bgColor="bg-lightBlue">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </TextBox>
        <TextBox title="FREDAG" bgColor="bg-green">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </TextBox>
      </section>
      <div className="fixed bottom-0 h-32 w-full">
        <img className="h-full w-full object-cover object-top" src="/snow.png" alt="A snow bank" />
      </div>
    </section>
  );
};

export default App;
