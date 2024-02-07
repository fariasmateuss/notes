import Logo from '@/assets/logo.svg';
import { NoteCard } from '@/components/new-card';
import { NewNoteCard } from '@/components/new-note-card';

export default function App() {
  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6">
      <img src={Logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="placeholder:text-state-500 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-3 gap-6">
        <NewNoteCard />
        <NoteCard
          note={{
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            date: new Date(),
          }}
        />
      </div>
    </div>
  );
}
