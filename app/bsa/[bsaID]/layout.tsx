interface GeoLocation {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const getUser = async (id: String): Promise<User> => {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await data.json();
  return user;
};

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
];

export default async function BSALayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    bsaID: string;
  };
}) {
  const user = await getUser(params.bsaID);
  console.log(user.id, "user");
  return <div data-theme={themes[user.id - 1]}>{children}</div>;
}
