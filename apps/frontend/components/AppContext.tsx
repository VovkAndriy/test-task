import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { IHero } from '../../../libs/lib-types/src/index';
import { HeroesFilter } from '../types/HeroesFilter';
import { getAllHeroes } from '../utils/api';

type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  searchQuery: string,
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  selectedFilter: HeroesFilter | string,
  setSelectedFilter: React.Dispatch<React.SetStateAction<HeroesFilter | string>>,
  loader: boolean,
  visibleHeroes: IHero[],
};

export const AppContext = createContext<AppContextInterface>({
  searchQuery: '',
  setSearchQuery: () => { },
  selectedFilter: '',
  setSelectedFilter: () => { },
  loader: false,
  visibleHeroes: [],
});

export function AppWrapper ({ children }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<HeroesFilter>(HeroesFilter.ALL);
  const [heroes, setHeroes] = useState<IHero[]>([]);
  const [loader, setLoader] = useState(false);

  const getHeroesFromServer = async () => {
    try {
      setLoader(true);
      const heroesFromServer = await getAllHeroes();

      setHeroes(heroesFromServer);
    } catch {
      throw new Error();
    } finally {
      setLoader(false);
    }
  };

  const getVisibleHeroes = () => {
    let visibleHeroes = heroes;
    let normalizeQuery = searchQuery.trim().toLocaleLowerCase();

    if (normalizeQuery.length > 0) {
      visibleHeroes = visibleHeroes.filter(hero => hero.name.toLocaleLowerCase().includes(normalizeQuery) || hero.biography['full-name'].toLocaleLowerCase().includes(normalizeQuery))
    }

    switch (selectedFilter) {
      case HeroesFilter.MALES:
        return visibleHeroes = visibleHeroes.filter(hero => hero.appearance.gender === 'Male')

      case HeroesFilter.FEMALES:
        return visibleHeroes = visibleHeroes.filter(hero => hero.appearance.gender === 'Female')

      case HeroesFilter.ALL:
        return visibleHeroes

      default:
        return visibleHeroes;
    }
  }

  useEffect(() => {
    getHeroesFromServer();
  }, []);

  const visibleHeroes = getVisibleHeroes();

  console.log(visibleHeroes)

  const contextValue = {
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
    loader,
    visibleHeroes,
  }

  return (
    <AppContext.Provider value={contextValue} >
      {children}
    </AppContext.Provider>
  );
}
