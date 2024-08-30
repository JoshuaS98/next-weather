export type City = {
  name: string
  country: string
  lat: number
  lon: number
  demonym: string
}

export const cities: City[] = [
  { name: 'Valencia', country: 'ES', lat: 39.4697065, lon: -0.3763353, demonym: 'Valencian' },
  { name: 'Bern', country: 'CH', lat: 46.9482713, lon: 7.4514512, demonym: 'Bernese' },
  // { name: 'Helsinki', country: 'FI', lat: 60.1674881, lon: 24.9427473, demonym: 'Helsinkian' },
  // { name: 'Paris', country: 'FR', lat: 48.8588897, lon: 2.3200410217200766, demonym: 'Parisian' },
  // { name: 'Tokio', country: 'JP', lat: 35.6828387, lon: 139.7594549, demonym: 'Tokyoite' },
  // {
  //   name: 'San Francisco',
  //   country: 'US',
  //   lat: 37.7790262,
  //   lon: -122.419906,
  //   demonym: 'San Franciscan',
  // },
  // { name: 'Berlin', country: 'DE', lat: 52.5170365, lon: 13.3888599, demonym: 'Berliner' },
  // { name: 'New York', country: 'US', lat: 40.7127281, lon: -74.0060152, demonym: 'New Yorker' },
  // { name: 'London', country: 'GB', lat: 51.4875167, lon: -0.1687007, demonym: 'Londoner' },
  // { name: 'Cape Town', country: 'ZA', lat: -33.928992, lon: 18.417396, demonym: 'Capetonian' },
  // { name: 'Hongkong', country: 'CN', lat: 22.2793278, lon: 114.1628131, demonym: 'Hong Konger' },
  // { name: 'São Paulo', country: 'BR', lat: -23.5506507, lon: -46.6333824, demonym: 'Paulista' },
  // {
  //   name: 'Kuala Lumpur',
  //   country: 'MY',
  //   lat: 3.1516964,
  //   lon: 101.6942371,
  //   demonym: 'Kuala Lumpurian',
  // },
  // { name: 'Melbourne', country: 'AU', lat: -37.8142176, lon: 144.9631608, demonym: 'Melburnian' },
  // { name: 'Havana', country: 'CU', lat: 23.135305, lon: -82.3589631, demonym: 'Habanero' },
]
