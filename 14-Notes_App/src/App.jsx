import { IdCard, Menu } from "lucide-react";
import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('')
  const [descp, setDescp] = useState('')

  const [note, SetNote] = useState([])

  const submitFunc = (e) => {
    e.preventDefault()

    const copyNote = [...note]

    copyNote.push({ title, descp })

    SetNote(copyNote)
    console.log(note);

    setTitle('')
    setDescp('')
  }

  const deleteNote = (idx) => {
    const copyNote = [...note]
    copyNote.splice(idx, 1);
    SetNote(copyNote)
  }


  return (
    <div className='app-bg w-full min-h-screen flex flex-col text-slate-900'>

      {/* Navbar */}
      <div className='navbar glass h-20 w-full flex justify-between items-center px-5 sm:px-8 lg:px-14 border-b border-slate-200/60 sticky top-0 z-10'>

        <div className="left flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 shadow-lg shadow-indigo-500/20 grid place-items-center">
            <IdCard size={18} className="text-white" />
          </div>
          <div className="leading-tight">
            <h3 className='font-black uppercase tracking-wide text-2xl sm:text-3xl bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 bg-clip-text text-transparent'>
              My Notes
            </h3>
            <p className="text-xs text-slate-600 hidden sm:block">
              {note.length} {note.length === 1 ? "note" : "notes"} saved
            </p>
          </div>
        </div>

        <div className="right flex items-center gap-3 sm:gap-4">
          <button className='group flex bg-white/70 hover:bg-white gap-2 items-center text-sm rounded-xl font-semibold px-3 sm:px-4 py-2 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200/70'>
            <span className='text-slate-700 hidden sm:inline'>Mohd Ayan</span>
            <img className='h-8 w-8 object-cover rounded-full ring-2 ring-white shadow-sm' src="/prof.jpg" alt="Profile" />
          </button>

          <button className='grid place-items-center bg-white/70 hover:bg-white text-sm rounded-xl font-semibold w-11 h-11 cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md border border-slate-200/70'>
            <Menu size={18} className='text-indigo-700' />
          </button>
        </div>

      </div>

      {/* Main Section */}
      <div className='main w-full flex flex-col flex-1 shrink-0'>

        {/* Input Section */}
        <div className="input w-full flex flex-1 px-5 sm:px-8 lg:px-14 py-8 border-b border-slate-200/60">

          <form
            className='w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10'
            onSubmit={e => {
              submitFunc(e)
            }}
          >
            <div className="lg:col-span-5">
              <div className="glass rounded-2xl border border-slate-200/60 shadow-sm p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Create a note</h4>
                    <p className="text-xs text-slate-600 mt-1">Capture ideas fast — title + description.</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="px-2 py-1 rounded-lg border border-slate-200 bg-white/60">Enter</span>
                    <span>to save</span>
                  </div>
                </div>

                <div className='mt-5 flex flex-col gap-4'>
                  <textarea
                    required
                    value={title}
                    placeholder='Title'
                    className='ui-field resize-none w-full rounded-2xl p-4 text-slate-900 outline-none text-xl sm:text-2xl font-black tracking-tight border border-slate-200/70 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200/60 transition-all duration-200 bg-white/85 placeholder:text-slate-400 min-h-[72px]'
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                  ></textarea>

                  <textarea
                    required
                    value={descp}
                    placeholder='Write something helpful…'
                    className='ui-field resize-none w-full rounded-2xl p-4 text-slate-700 outline-none text-[15px] leading-relaxed border border-slate-200/70 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-200/60 transition-all duration-200 bg-white/85 placeholder:text-slate-400 min-h-[140px]'
                    onChange={(e) => {
                      setDescp(e.target.value)
                    }}
                  ></textarea>

                  <button className='ui-primary-btn px-6 py-3 w-full rounded-2xl tracking-wide text-white font-bold cursor-pointer transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/25 active:scale-[0.99]'>
                    Create Note
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-end justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-base font-bold text-slate-900">Your notes</h4>
                  <p className="text-xs text-slate-600 mt-1">Click any card to scroll; delete when done.</p>
                </div>
                <div className="text-xs text-slate-500 bg-white/60 border border-slate-200 rounded-xl px-3 py-2">
                  Total: <span className="font-semibold text-slate-700">{note.length}</span>
                </div>
              </div>

              {/* Notes Container */}
              <div className="notesContainer notes-grid max-h-[520px] lg:max-h-[560px] flex flex-wrap gap-5 items-start justify-start overflow-auto pr-1">
                {note.length === 0 && (
                  <div className="w-full">
                    <div className="glass rounded-2xl border border-slate-200/60 p-6 sm:p-8 text-center">
                      <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 shadow-lg shadow-indigo-500/20 grid place-items-center">
                        <IdCard size={20} className="text-white" />
                      </div>
                      <h5 className="mt-4 text-base font-bold text-slate-900">No notes yet</h5>
                      <p className="mt-1 text-sm text-slate-600">Create your first note — it will appear here as a beautiful card.</p>
                    </div>
                  </div>
                )}

                {note.map((elem, idx) => {
                  return <div key={idx} className="w-full sm:w-[340px]">
                    <div className="note note-card shrink-0 gap-3 p-5 rounded-2xl flex flex-col justify-between bg-white/85 border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1">

                      <div className='flex-1 flex flex-col gap-3'>
                        <div className="flex items-start justify-between gap-3">
                          <h2 className='notesTitle max-h-20 text-lg sm:text-xl font-black text-slate-900 tracking-tight overflow-auto pr-1'>{elem.title}</h2>
                          <span className="note-badge hidden sm:inline-flex shrink-0 text-[11px] font-semibold px-2 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-600">
                            Note {idx + 1}
                          </span>
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-slate-200/40 via-slate-200 to-slate-200/40" />
                        <p className='notesDescp text-slate-600 text-sm leading-relaxed overflow-auto pr-1'>{elem.descp}</p>
                      </div>

                      <div className='mt-4'>
                        <button
                          className='ui-danger-btn w-full text-white font-semibold tracking-wide rounded-xl cursor-pointer py-2.5 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99]'
                          onClick={() => {
                            deleteNote(idx);
                          }}
                        >
                          Delete
                        </button>
                      </div>

                    </div>
                  </div>
                })}
              </div>
            </div>
          </form>

        </div>

      </div >
    </div >
  )
}

export default App



/* <div className="note shrink-0 w-full sm:w-80 md:w-72 lg:w-80 gap-3 p-5 rounded-xl flex flex-col justify-between bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1">

  <div className='flex-1 flex flex-col gap-3'>
    <h2 className='text-xl font-bold text-gray-800 border-b border-gray-200 pb-2'>Title</h2>
    <p className='text-gray-600 text-sm leading-relaxed line-clamp-4'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi illo eos animi distinctio, accusantium, optio similique cum natus esse alias possimus, tempora totam veritatis eligendi.
    </p>
  </div>

  <div className='mt-4'>
    <button className='w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold tracking-wide rounded-lg cursor-pointer py-2.5 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]'>
      Delete
    </button>
  </div>

</div> */

/* Additional sample note for better visual */
/* <div className="note shrink-0 w-full sm:w-80 md:w-72 lg:w-80 gap-3 p-5 rounded-xl flex flex-col justify-between bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-1">

  <div className='flex-1 flex flex-col gap-3'>
    <h2 className='text-xl font-bold text-gray-800 border-b border-gray-200 pb-2'>Another Note</h2>
    <p className='text-gray-600 text-sm leading-relaxed line-clamp-4'>
      This is a sample note to demonstrate the beautiful card layout. The design is clean, modern, and responsive.
    </p>
  </div>

  <div className='mt-4'>
    <button className='w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold tracking-wide rounded-lg cursor-pointer py-2.5 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]'>
      Delete
    </button>
  </div>

</div> */
