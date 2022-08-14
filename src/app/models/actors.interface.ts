export interface Actor {
  birthdate: string;
  bornCity: string;
  first_name: string;
  gender: Gender;
  id: number;
  img: null | string;
  last_name: string;
  movies: number[];
  rating: number;
}

export enum Gender {
  Female = 'Female',
  Male = 'Male',
}
