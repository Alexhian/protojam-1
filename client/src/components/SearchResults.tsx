import { useLoaderData } from "react-router-dom";
import type { LoaderFunction } from "react-router-dom";
import "./SearchBar.css";

interface PeopleArray {
  filter: (callback: (person: Person) => boolean) => Person[];
  results: {
    gender: string;
    name: { title: string; first: string; last: string };
    location: {
      street: { number: number; name: string };
      city: string;
      state: string;
      country: string;
    };
    dob: { date: string; age: number };
    picture: { large: string };
  }[];
}

interface Person {
  gender: string;
  name: { title: string; first: string; last: string };
  location: {
    street: { number: number; name: string };
    city: string;
    state: string;
    country: string;
  };
  dob: { date: string; age: number };
  picture: { large: string };
}

interface SearchResultsProps {
  searchQuery: string;
}

export const loader: LoaderFunction = async () => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  if (!response.ok) {
    throw new Error("Erreur du chargement des données.");
  }
  return response.json();
};

function SearchResults({ searchQuery }: SearchResultsProps) {
  const searchPeople = useLoaderData() as PeopleArray;

  if (!searchQuery.trim()) {
    return <></>;
  }

  const filteredResults = searchPeople.filter((person: Person) => {
    const fullName = `${person.name.first} ${person.name.last}`.toLowerCase();
    return fullName.includes(searchQuery.toLowerCase());
  });

  if (filteredResults.length === 0) {
    return <div>Aucun résultat trouvé.</div>;
  }

  return (
    <div>
      {filteredResults.map((person: Person) => (
        <div
          className="picturebox"
          key={`${person.name.first}-${person.name.last}`}
        >
          <img
            className="searchpicture"
            src={person.picture.large}
            alt={`${person.name.first} ${person.name.last}`}
          />
          <p>
            {person.name.first} {person.name.last}
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
