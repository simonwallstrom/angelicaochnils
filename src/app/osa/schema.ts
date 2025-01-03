import { z } from 'zod'

export const rsvpSchema = z
  .object({
    firstName: z
      .string({
        required_error: 'Förnamn är obligatoriskt',
      })
      .min(1, 'Förnamn är obligatoriskt'),
    lastName: z
      .string({
        required_error: 'Efternamn är obligatoriskt',
      })
      .min(1, 'Efternamn är obligatoriskt'),
    emailAddress: z
      .string({
        required_error: 'E-postadress är obligatoriskt',
      })
      .email('Ogiltig e-postadress'),
    phoneNumber: z
      .string({
        required_error: 'Telefonnummer är obligatoriskt',
      })
      .min(1, 'Telefonnummer är obligatoriskt'),
    isAttending: z.enum(['true', 'false'], {
      required_error: 'Du måste välja om du kommer eller inte',
    }),
    numberOfNights: z.enum(['one', 'two']).optional().nullable(),
    dietaryRequirements: z.string().optional(),
    hasKids: z.enum(['true', 'false']).optional().nullable(),
    favoriteSong: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.isAttending === 'true') {
      if (!data.numberOfNights) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Du måste välja antal nätter när du kommer',
          path: ['numberOfNights'],
        })
      }
      if (!data.hasKids) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Du måste välja om du tar med barn',
          path: ['hasKids'],
        })
      }
    }
  })
