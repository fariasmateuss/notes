import * as React from 'react';

import Logo from '@/assets/logo.svg';
import { NewNoteCard } from '@/components/new-note-card';
import { NoteCard } from '@/components/note-card';

type Note = {
  id: string;
  date: Date;
  content: string;
};

export default function App() {
  const [search, setSearch] = React.useState('');
  const [notes, setNotes] = React.useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes');

    if (notesOnStorage) {
      return JSON.parse(notesOnStorage);
    }

    return [];
  });

  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray));
  };

  const onNoteDeleted = (id: string) => {
    const notesArray = notes.filter((note) => note.id !== id);

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    setSearch(query);
  };

  const filteredNotes =
    search !== ''
      ? notes.filter((note) =>
          note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
        )
      : notes;

  return (
    <div className="mx-auto my-12 max-w-6xl space-y-6 px-5">
      <img src={Logo} alt="NLW Expert" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque em suas notas..."
          className="placeholder:text-state-500 w-full bg-transparent text-3xl font-semibold tracking-tight outline-none"
          onChange={handleSearch}
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid auto-rows-[250px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => {
          return (
            <NoteCard onNoteDeleted={onNoteDeleted} key={note.id} note={note} />
          );
        })}
      </div>
    </div>
  );
}
