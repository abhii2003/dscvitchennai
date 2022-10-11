import Title from "./Title";

const Vision = () => {
  const visions = [
    {
      id: 1,
      title: "Seminar",
      description: "Get updated with the latest news and announcements.",
      classes: "bg-[#f9eeb1] text-[#d8a209]",
    },
    {
      id: 2,
      title: "Projects",
      description: "Projects with a social impact that help a lot of people.",
      classes: "bg-[#efcabb] text-[#db4437]",
    },
    {
      id: 3,
      title: "Workshop",
      description: "Hands-on experience with the community",
      classes: "bg-[#d5e0ef] text-[#3975d8]",
    },
    {
      id: 4,
      title: "Hackthons",
      description: "Dreams, Explore. Wonder. Build it Together.",
      classes: "bg-[#c4e9d3] text-[#0f9d58]",
    },
  ];

  return (
    <div name="vision" className="w-full sm:mx-0" id="vision">
      <div className="w-full flex flex-col items-center justify-center h-full md:flex-row">
        <div className="w-full flex flex-col items-center">
          <Title title="Vision" />
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-sm flex flex-row py-2">
              <div className="flex flex-col">
                <p className="text-gray-500 text-xl text-center py-2">
                  {"GDSC VIT Chennai is inspired by Google Developer's Famiy"}
                </p>
                <p className="text-gray-500 text-xl text-center">
                  Our Goal is to learn,explore, innovate and create. And also,
                  having funn!
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-full grid grid-cols-2 sm:grid-cols-4 gap-8 py-8 sm:px-0 my-32 mx-16">
            {visions.map(({ id, title, description, classes }) => (
              <div key={id} className="flex flex-col">
                <div className="my-4">
                  <span
                    className={`font-bold rounded-lg px-4 py-3 ${classes} shadow-md text-xl`}
                  >
                    {title}
                  </span>
                </div>
                <p className="text-left w-1/2 mt-3 text-gray-500 text-md">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vision;
