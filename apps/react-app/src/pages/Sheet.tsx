import Tiptap from "../components/Tiptap";
export default function Sheet() {
  return (
    <div className="App container mx-auto px-16 flex flex-col gap-4 max-w-[100ch]">
      <header className="flex flex-col gap-2 py-4 border-b border-slate-400">
        <section className="flex flex-row items-center gap-4">
          <a
            className="text-3xl link"
            href="https://github.com/Pawan2061/tiption"
          >
            tipTion <i className="i-mdi-github" />
          </a>
          <a
            className="text-blue-400 border border-blue-400 rounded-xl p-2 flex items-center justify-center hover:text-white hover:bg-blue-400 transition-all duration-200"
            href="https://github.com/sponsors/sereneinserenade"
          >
            <i className="i-mdi-heart mr-2 scale-150" /> Give me a star
          </a>
        </section>
        <p className="text-md pl-[1px]">
          Notion like editor built on top of{" "}
          <a className="underline" href="https://tiptap.dev/">
            Tiptap.
          </a>
        </p>

        {/* <p className="text-md pl-[1px]">
          A Big thank you to all my{" "}
          <a
            className="text-blue-400 underline"
            href="https://github.com/sponsors/sereneinserenade#sponsors"
          >
            <i className="i-mdi-heart-outline" /> sponsors.
          </a>{" "}
          You people are awesome.
        </p> */}
      </header>
      <main className="flex justify-start w-full">
        <Tiptap />
      </main>
    </div>
  );
}
