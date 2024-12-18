'use client'

import { useState } from 'react'

export function Form() {
  const [attendingInfo, showAttendingInfo] = useState(false)

  return (
    <form className="mt-10 bg-white p-6 shadow-sm md:p-12" action="">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="font-semibold select-none" htmlFor="first_name">
            Förnamn
          </label>
          <input type="text" name="first_name" id="first_name" />
        </div>
        <div className="grid gap-2">
          <label className="font-semibold select-none" htmlFor="last_name">
            Efternamn
          </label>
          <input type="text" name="last_name" id="last_name" />
        </div>
      </div>
      <div className="mt-6 grid gap-2">
        <label className="font-semibold select-none" htmlFor="email">
          E-postadress
        </label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="mt-6 grid gap-2">
        <label className="font-semibold select-none" htmlFor="phone">
          Telefonnummer
        </label>
        <input type="tel" name="phone" id="phone" />
      </div>
      <div className="mt-6 grid gap-1">
        <div className="font-semibold">Kommer du?</div>
        <div className="mt-1 grid gap-2">
          <label className="flex items-center gap-2" htmlFor="attending-yes">
            <input
              className="h-5 w-5"
              type="radio"
              name="attending"
              id="attending-yes"
              value="yes"
              onChange={() => showAttendingInfo(true)}
            />
            <span>Ja, såklart!</span>
          </label>
          <label className="flex items-center gap-2" htmlFor="attending-no">
            <input
              className="h-5 w-5"
              type="radio"
              name="attending"
              id="attending-no"
              value="no"
              onChange={() => showAttendingInfo(false)}
            />
            <span>Nej, tyvärr inte</span>
          </label>
        </div>
      </div>
      {attendingInfo ? (
        <>
          <div className="mt-6 grid gap-1">
            <div className="font-semibold">Sover du kvar 1 eller 2 nätter?</div>
            <div className="mt-1 grid gap-2">
              <label className="flex items-center gap-2" htmlFor="one-night">
                <input
                  className="h-5 w-5"
                  type="radio"
                  name="nights"
                  id="one-night"
                  value="one-night"
                />
                <span>1 natt</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="two-nights">
                <input
                  className="h-5 w-5"
                  type="radio"
                  name="nights"
                  id="two-nights"
                  value="two-nights"
                />
                <span>2 nätter</span>
              </label>
            </div>
          </div>
          <div className="mt-6 grid">
            <label className="font-semibold select-none" htmlFor="email">
              Allergier/ Kostalternativ
            </label>
            <p className="mt-1 text-sm">
              Berätta gärna om du har några allergier eller kostpreferenser, som vegetarisk eller
              glutenfri. Om du inte har några, kan du lämna fältet tomt.
            </p>
            <textarea className="mt-3" name="email" id="email"></textarea>
          </div>
          <div className="mt-6 grid gap-1">
            <div className="font-semibold">Tar du med barn under 1 år?</div>
            <div className="mt-1 grid gap-2">
              <label className="flex items-center gap-2" htmlFor="kids-yes">
                <input
                  className="h-5 w-5"
                  type="radio"
                  name="kids"
                  id="kids-yes"
                  value="kids-yes"
                />
                <span>Ja</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="kids-noe">
                <input
                  className="h-5 w-5"
                  type="radio"
                  name="kids"
                  id="kids-noe"
                  value="kids-noe"
                />
                <span>Nej</span>
              </label>
            </div>
          </div>
          <div className="mt-6 grid gap-2">
            <label className="font-semibold select-none" htmlFor="song">
              En låt jag absolut inte kan sitta still till…
            </label>
            <input type="text" name="song" id="song" />
          </div>
        </>
      ) : null}
      <div className="mt-8">
        <button className="cursor-pointer border border-black bg-gray-800 px-10 py-2 font-semibold text-white outline-offset-2 outline-emerald-600 hover:bg-black focus-visible:outline-2">
          Skicka
        </button>
      </div>
    </form>
  )
}
