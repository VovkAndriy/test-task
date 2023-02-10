import { IHero } from '../../../libs/lib-types/src/index';
import { getHeroes } from '../utils/fetch';

export const getAllHeroes = () => getHeroes<IHero[]>('/heros');