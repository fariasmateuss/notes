import * as Dialog from '@radix-ui/react-dialog';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { X } from 'lucide-react';

type NoteCardProps = {
  note: {
    content: string;
    date: Date;
  };
};

export function NoteCard({ note }: NoteCardProps) {
  const { date, content } = note;

  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative flex flex-col space-y-3 overflow-hidden rounded-md bg-slate-800 p-5 text-left outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {date.toISOString()}
        </span>

        <p className="text-sm leading-6 text-slate-400">{content}</p>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50">
          <Dialog.Content className="fixed left-1/2 top-1/2 flex h-[60vh] w-full max-w-[40rem] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-md bg-slate-700 outline-none">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>

            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                {formatDistanceToNow(date, {
                  locale: ptBR,
                  addSuffix: true,
                })}
              </span>

              <p className="text-sm leading-6 text-slate-400">{content}</p>
            </div>

            <button
              type="button"
              className="w-ful group bg-slate-800 py-4 text-center text-sm font-medium text-slate-300 outline-none"
            >
              Deseja{' '}
              <span className="text-red-400 group-hover:underline">
                apagar essa nota?
              </span>
            </button>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
