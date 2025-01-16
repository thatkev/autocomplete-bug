import MainDropdown from './components/MainDropdown';
import { options } from './components/Options';

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="flex flex-col items-center justify-center w-full flex-1">
        <h1 className="font-bold text-4xl">Minimal Reproducible Example</h1>
        <h2 className="text-xl">Autocomplete overlap bug</h2>
        <div className="mt-4">
          <MainDropdown options={options()}/>
        </div>
      </main>
    </div>
  );
}
