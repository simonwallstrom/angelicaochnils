'use client'

import { useActionState, useEffect, useState } from 'react'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { rsvpSchema } from './schema'
import { createContact } from './action'

export function Form() {
  const [attendingInfo, showAttendingInfo] = useState(false)

  const [lastResult, action, pending] = useActionState(createContact, undefined)

  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: rsvpSchema })
    },
    shouldValidate: 'onSubmit',
    shouldRevalidate: 'onInput',
  })

  useEffect(() => {
    const preventDefault = (event: Event) => {
      if (event.target === document.forms.namedItem(form.id)) {
        event.preventDefault()
      }
    }

    document.addEventListener('reset', preventDefault, true)

    return () => {
      document.removeEventListener('reset', preventDefault, true)
    }
  }, [form.id])

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
      className="mt-10 bg-white p-6 shadow-sm md:p-12"
      aria-label="RSVP formulär"
    >
      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="font-semibold select-none" htmlFor="firstName">
            Förnamn
          </label>
          <input
            type="text"
            key={fields.firstName.key}
            name={fields.firstName.name}
            defaultValue={fields.firstName.initialValue}
            id="firstName"
            aria-required="true"
            aria-invalid={!!fields.firstName.errors}
            aria-describedby={fields.firstName.errors ? 'firstName-error' : undefined}
          />
          {fields.firstName.errors && (
            <div className="text-red-600" id="firstName-error" role="alert">
              {fields.firstName.errors}
            </div>
          )}
        </div>
        <div className="grid gap-2">
          <label className="font-semibold select-none" htmlFor="lastName">
            Efternamn
          </label>
          <input
            type="text"
            key={fields.lastName.key}
            name={fields.lastName.name}
            defaultValue={fields.lastName.initialValue}
            id="lastName"
            aria-required="true"
            aria-invalid={!!fields.lastName.errors}
            aria-describedby={fields.lastName.errors ? 'lastName-error' : undefined}
          />
          <div className="text-red-600" id="lastName-error" role="alert">
            {fields.lastName.errors}
          </div>
        </div>
      </div>
      <div className="mt-6 grid gap-2">
        <label className="font-semibold select-none" htmlFor="emailAddress">
          E-postadress
        </label>
        <input
          type="email"
          key={fields.emailAddress.key}
          name={fields.emailAddress.name}
          defaultValue={fields.emailAddress.initialValue}
          id="emailAddress"
          aria-required="true"
          aria-invalid={!!fields.emailAddress.errors}
          aria-describedby={fields.emailAddress.errors ? 'emailAddress-error' : undefined}
        />
        <div className="text-red-600" id="emailAddress-error" role="alert">
          {fields.emailAddress.errors}
        </div>
      </div>
      <div className="mt-6 grid gap-2">
        <label className="font-semibold select-none" htmlFor="phoneNumber">
          Telefonnummer
        </label>
        <input
          type="tel"
          key={fields.phoneNumber.key}
          name={fields.phoneNumber.name}
          defaultValue={fields.phoneNumber.initialValue}
          id="phoneNumber"
          aria-required="true"
          aria-invalid={!!fields.phoneNumber.errors}
          aria-describedby={fields.phoneNumber.errors ? 'phoneNumber-error' : undefined}
        />
        <div className="text-red-600" id="phoneNumber-error" role="alert">
          {fields.phoneNumber.errors}
        </div>
      </div>
      <div className="mt-6 grid gap-1">
        <div className="font-semibold" id="attending-label">
          Kommer du?
        </div>
        <div
          className="mt-1 grid gap-2"
          role="radiogroup"
          aria-labelledby="attending-label"
          aria-required="true"
          aria-invalid={!!fields.isAttending.errors}
        >
          <label className="flex items-center gap-2">
            <input
              className="h-5 w-5"
              type="radio"
              key={fields.isAttending.key}
              name={fields.isAttending.name}
              id="attending-yes"
              value="true"
              onChange={() => showAttendingInfo(true)}
              aria-describedby={fields.isAttending.errors ? 'attending-error' : undefined}
            />
            <span>Ja, såklart!</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              className="h-5 w-5"
              type="radio"
              key={fields.isAttending.key}
              name={fields.isAttending.name}
              id="attending-no"
              value="false"
              onChange={() => showAttendingInfo(false)}
              aria-describedby={fields.isAttending.errors ? 'attending-error' : undefined}
            />
            <span>Nej, tyvärr inte</span>
          </label>
        </div>
        {fields.isAttending.errors && (
          <div className="mt-1 text-red-600" id="attending-error" role="alert">
            {fields.isAttending.errors}
          </div>
        )}
      </div>
      {attendingInfo ? (
        <>
          <div className="mt-6 grid gap-1">
            <div className="font-semibold" id="nights-label">
              Sover du kvar 1 eller 2 nätter?
            </div>
            <div
              className="mt-1 grid gap-2"
              role="radiogroup"
              aria-labelledby="nights-label"
              aria-required="true"
              aria-invalid={!!fields.numberOfNights.errors}
            >
              <label className="flex items-center gap-2" htmlFor="one-night">
                <input
                  className="h-5 w-5"
                  type="radio"
                  key={fields.numberOfNights.key}
                  name={fields.numberOfNights.name}
                  id="one-night"
                  value="1"
                  aria-describedby={fields.numberOfNights.errors ? 'nights-error' : undefined}
                />
                <span>1 natt</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="two-nights">
                <input
                  className="h-5 w-5"
                  type="radio"
                  key={fields.numberOfNights.key}
                  name={fields.numberOfNights.name}
                  id="two-nights"
                  value="2"
                  aria-describedby={fields.numberOfNights.errors ? 'nights-error' : undefined}
                />
                <span>2 nätter</span>
              </label>
            </div>
            <div className="text-red-600" id="nights-error" role="alert">
              {fields.numberOfNights.errors}
            </div>
          </div>
          <div className="mt-6 grid">
            <label className="font-semibold select-none" htmlFor="dietaryRequirements">
              Allergier/ Kostalternativ (Valfri)
            </label>
            <p className="mt-1 text-sm" id="diet-description">
              Berätta gärna om du har några allergier eller kostpreferenser, som vegetarisk eller
              glutenfri.
            </p>
            <textarea
              className="mt-3"
              key={fields.dietaryRequirements.key}
              name={fields.dietaryRequirements.name}
              defaultValue={fields.dietaryRequirements.initialValue}
              id="dietaryRequirements"
              aria-describedby="diet-description"
              aria-invalid={!!fields.dietaryRequirements.errors}
            ></textarea>
            <div className="mt-2 text-red-600" id="dietary-error" role="alert">
              {fields.dietaryRequirements.errors}
            </div>
          </div>
          <div className="mt-6 grid gap-1">
            <div className="font-semibold" id="kids-label">
              Tar du med barn under 1 år?
            </div>
            <div
              className="mt-1 grid gap-2"
              role="radiogroup"
              aria-labelledby="kids-label"
              aria-required="true"
              aria-invalid={!!fields.hasKids.errors}
            >
              <label className="flex items-center gap-2" htmlFor="kids-yes">
                <input
                  className="h-5 w-5"
                  type="radio"
                  key={fields.hasKids.key}
                  name={fields.hasKids.name}
                  id="kids-yes"
                  value="Ja"
                  aria-describedby={fields.hasKids.errors ? 'kids-error' : undefined}
                />
                <span>Ja</span>
              </label>
              <label className="flex items-center gap-2" htmlFor="kids-no">
                <input
                  className="h-5 w-5"
                  type="radio"
                  key={fields.hasKids.key}
                  name={fields.hasKids.name}
                  id="kids-no"
                  value="Nej"
                  aria-describedby={fields.hasKids.errors ? 'kids-error' : undefined}
                />
                <span>Nej</span>
              </label>
            </div>
            <div className="text-red-600" id="kids-error" role="alert">
              {fields.hasKids.errors}
            </div>
          </div>
          <div className="mt-6 grid gap-2">
            <label className="font-semibold select-none" htmlFor="favoriteSong">
              En låt jag absolut inte kan sitta still till… (Valfri)
            </label>
            <input
              type="text"
              key={fields.favoriteSong.key}
              name={fields.favoriteSong.name}
              defaultValue={fields.favoriteSong.initialValue}
              id="favoriteSong"
              aria-invalid={!!fields.favoriteSong.errors}
            />
            <div className="text-red-600" id="song-error" role="alert">
              {fields.favoriteSong.errors}
            </div>
          </div>
        </>
      ) : null}
      <div className="mt-6 grid">
        <label className="font-semibold select-none" htmlFor="code">
          Inbjudningskod
        </label>
        <p className="mt-1 text-sm" id="code-description">
          Ange koden som du hittar på din bröllopsinbjudan
        </p>
        <input
          className="mt-3"
          type="text"
          key={fields.code.key}
          name={fields.code.name}
          defaultValue={fields.code.initialValue}
          aria-describedby="code-description"
          id="code"
          aria-required="true"
          aria-invalid={!!fields.code.errors}
        />
        <div className="mt-2 text-red-600" id="code-error" role="alert">
          {fields.code.errors}
        </div>
      </div>
      <div className="mt-8">
        <button
          disabled={pending}
          aria-busy={pending}
          aria-disabled={pending}
          className="w-full cursor-pointer border border-black bg-gray-800 px-10 py-2 font-semibold text-white outline-offset-2 outline-blue-600 select-none hover:bg-black focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-60"
        >
          {pending ? 'Skickar...' : 'Skicka'}
        </button>

        <div className="mt-2 text-center text-red-600" role="alert">
          {form.errors}
        </div>
      </div>
    </form>
  )
}
