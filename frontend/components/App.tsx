import Aurora from './Aurora';
import InformationSection from './InformationSection';
import Snow from './Snow';
import TeamsContainer from './TeamsContainer';
import TextBox from './TextBox';

const App = () => {
  return (
    <section className="text-white">
      <Snow />
      <Aurora />
      <div className="flex min-h-screen flex-col items-center">
        <div className="w-max pt-24 text-center font-bold">
          <h1 className="py-2 text-5xl">HÆLGA 2023</h1>
          <div className="border-[1px] border-white" />
        </div>
        <TeamsContainer />
      </div>
      <InformationSection />
      <div className="fixed bottom-0 h-32 w-full">
        <img className="h-full w-full object-cover object-top" src="/snow.png" alt="A snow bank" />
      </div>
    </section>
  );
};

export default App;
