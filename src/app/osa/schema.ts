import { z } from 'zod'

export const createContactSchema = z.object({
  first_name: z.string().trim(),
  email: z.string().email(),
})

export const rsvpSchema = z.object({
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
  numberOfNights: z
    .enum(['one', 'two'])
    .optional()
    .nullable()
    .superRefine((val, ctx) => {
      const isAttending = (ctx.path[0] as any).isAttending
      if (isAttending === 'true' && !val) {
        ctx.addIssue({
          code: 'custom',
          message: 'Du måste välja antal nätter när du kommer',
          path: ['numberOfNights'],
        })
      }
    }),
  dietaryRequirements: z.string().optional(),
  hasKids: z
    .enum(['true', 'false'])
    .optional()
    .nullable()
    .superRefine((val, ctx) => {
      const isAttending = (ctx.path[0] as any).isAttending
      if (isAttending === 'yes' && !val) {
        ctx.addIssue({
          code: 'custom',
          message: 'Du måste välja om du tar med barn',
          path: ['hasKids'],
        })
      }
    }),
  favoriteSong: z.string().optional(),
})
