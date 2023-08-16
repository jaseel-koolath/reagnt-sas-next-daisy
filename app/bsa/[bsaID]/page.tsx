import Image from "next/image";
import Link from "next/link";

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

export default async function Page({ params }: { params: { bsaID: string } }) {
  const user = await getUser(params.bsaID);
  return (
    <div className="h-[100vh]">
      <Link href="/">
        <button className="btn btn-primary">Go back Home</button>
      </Link>
      <button className="btn">Agent Id: {params.bsaID}</button>
      <button className="btn">Agent Name: {user.name}</button>
      <div>
        <div className="badge">default</div>
        <div className="badge badge-neutral">neutral</div>
        <div className="badge badge-primary">primary</div>
        <div className="badge badge-secondary">secondary</div>
        <div className="badge badge-accent">accent</div>
        <div className="badge badge-ghost">ghost</div>
      </div>
      <div className="flex gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                className="rounded-t-lg"
                width={500}
                height={600}
                src="https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg"
                alt="Shoes"
              />
            </figure>
            <div>
              <div className="card-body">
                <h2 className="card-title">
                  Home !<div className="badge badge-secondary">NEW</div>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam
                </p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">2 BHK</div>
                  <div className="badge badge-outline">
                    Total Area: 1200 sqft
                  </div>
                </div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-1"
                    className="mask mask-star"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </div>
  );
}
