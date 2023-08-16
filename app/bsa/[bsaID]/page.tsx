import Image from "next/image";

export default async function Page({ params }: { params: { bsaID: string } }) {
  return (
    <div className="h-[100vh]">
      <button className="btn">Agent Id: {params.bsaID}</button>
      <div className="badge">default</div>
      <div className="badge badge-neutral">neutral</div>
      <div className="badge badge-primary">primary</div>
      <div className="badge badge-secondary">secondary</div>
      <div className="badge badge-accent">accent</div>
      <div className="badge badge-ghost">ghost</div>
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
