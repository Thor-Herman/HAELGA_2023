import Aurora from './Aurora';
import Snow from './Snow';
import TeamsContainer from './TeamsContainer';


const App = () => {
  return (
    <section className="min-h-screen text-white">
      <Snow />
      <Aurora />
      <div className="flex flex-col items-center pb-36">
        <div className="w-max pt-24 text-center font-bold">
          <h1 className="py-2 text-5xl">HÆLGA 2023</h1>
          <div className="border-[1px] border-white" />
        </div>
        <TeamsContainer />
      </div>
      <div className="fixed bottom-0 h-32 w-full">
        <img className="h-full w-full object-cover object-top" src="/snow.png" alt="A snow bank" />
      </div>
    </section>
  );
};

export default App;
