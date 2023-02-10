import { useContext, useState } from "react";
import { HeroesFilter } from "../types/HeroesFilter";
import { AppContext } from './AppContext';

export const SearchForm = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedFilter,
    setSelectedFilter,
  } = useContext(AppContext);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="max-w-screen-sm mb-10"
    >
      <label
        className="inline-block w-full py-2 my-2 text-2xl"
      >
        Search by name
        <input
          placeholder="Enter heroes name"
          className="max-w-xs max-h-xs rounded border-6 w-6/12 ml-2 border-2 border-black border-solid"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </label>
      <select
        className="block px-4 py-2 rounded-full border-2 border-slate-800 border-solid"
        value={selectedFilter}
        onChange={(event) => {
          if (Object.values<string>(HeroesFilter).includes(event.target.value)) {
            return setSelectedFilter(event.target.value);
          }
        }}
      >
        <option>{HeroesFilter.ALL}</option>
        <option>{HeroesFilter.MALES}</option>
        <option>{HeroesFilter.FEMALES}</option>
      </select>
    </form>
  );
}
