import Aurora from './Aurora';
import TeamBox from './TeamBox';

const App = () => {
  return (
    <section className="min-h-screen text-white">
      <Aurora />
      <div className="flex flex-col items-center">
        <div className="w-max pt-24 text-center font-bold">
          <h1 className="py-2 text-5xl">HÆLGA 2023</h1>
          <div className="border-[1px] border-white" />
        </div>
        <div className="w-full px-4">
          <div className="absolute h-max border-l-[1px] border-white" />
          <TeamBox index={1} />
          <TeamBox index={2} />
          <TeamBox index={3} />
        </div>
      </div>
    </section>
  );
};

export default App;
