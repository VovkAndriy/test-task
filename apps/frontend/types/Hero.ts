export interface Hero {
  id: string,
  name: string,
  price: number,
  biography: {
    "full-name": string,
    "alter-egos": string,
    "aliases": object,
    "place-of-birth": string,
    "first-appearance": string,
    "publisher": string,
    "alignment": string
  },
  appearance: {
    "gender": string,
    "race": string,
    "height": string,
    "weight": string,
    "eye-color": string,
    "hair-color": string
  },
  connections: {
    "group-affiliation": string,
    "relatives": string,
    "alignment": object
  },
  image: {
    url: string
  },
  powerstats: {
    "intelligence": number,
    "strength": number,
    "speed": number,
    "durability": number,
    "power": number,
    "combat": number
  },
  work: {
    "occupation": string,
    "base": string
  }
}