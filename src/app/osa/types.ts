export interface ContactAttributes {
  telefonnummer: string
  'kommer-du': 'Ja' | 'Nej'
  'antal-natter'?: string
  kostalternativ?: string
  barn?: 'Ja' | 'Nej'
  favoritlat?: string
}

export interface ContactList {
  hash: string
}

export interface ContactResponse {
  url: string
  first_name: string
  last_name: string
  email: string
  created: string
  updated: string
  attributes: ContactAttributes
  lists: ContactList[]
  active: boolean
  channels: {
    sms: null | string
  }
}

export interface CreateContactRequest {
  first_name: string
  last_name: string
  email: string
  lists: ContactList[]
  attributes: ContactAttributes
}
