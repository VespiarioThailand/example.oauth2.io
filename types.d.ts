type TokenType = {
  access_token: string
  expires_in: number
  token_type: string
  scope: string
  refresh_token: string
}

type RefreshTokenType = {
  data: TokenType
}

type ProfileType = {
  id: string
  vespisti_code: string
  email: string
  phone_number: string
  full_name: string
  gender: string
  birth_day: string
  profile_image: string
  created_at: string
  updated_at: string
}
