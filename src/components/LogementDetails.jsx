import Dropdown from "./Dropdown";

function LogementDetails({ location }) {
  return (
    <div className="locaation-details-container mx-10 md:mx-20 lg:mx-36 pb-10">
      <div className="title-tag-host-container flex flex-col md:flex-row lg:flex-row justify-start md:justify-between pb-3">
        <div className="title-tag-container flex flex-col gap-3">
          <h1 className="text-custom-red text-lg md:text-2xl lg:text-4xl">
            {location.title}
          </h1>
          <p className="font-semibold text-sm md:text-lg">
            {location.location}
          </p>
          <ul className="flex flex-row gap-2">
            {location.tags.map((tag, index) => (
              <li
                className="bg-custom-red rounded-2xl text-white font-semibold px-4 py-1 text-[10px] md:text-xs lg:text-sm"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="host-ratings-container flex flex-row-reverse md:flex-col lg:flex-col justify-between md:justify-center items-center">
          <div className="flex flex-row justify-start items-center gap-6">
            <p className="text-custom-red md:text-right font-semibold">
              {location.host.name}
            </p>
            <img
              className="rounded-full w-[64px]"
              src={location.host.picture}
              alt={location.host.name}
            />
          </div>
          <p className="flex flex-row justify-end gap-2 mt-3">
            {Array(5)
              .fill(0)
              .map((_, index) =>
                index < location.rating ? (
                  <i key={index} className="fas fa-star text-custom-red"></i>
                ) : (
                  <i key={index} className="fas fa-star text-custom-star"></i>
                )
              )}
          </p>
        </div>
      </div>
      <div className="dropdown-location w-full flex flex-col gap-4 mt-3 lg:flex-row">
        <Dropdown
          className="w-full"
          title="Description"
          content={location.description}
        />
        <Dropdown
          className="w-full"
          title="Equipements"
          content={location.equipments.map((equip, index) => (
            <p key={index}>- {equip}</p>
          ))}
        />
      </div>
    </div>
  );
}

export default LogementDetails;
