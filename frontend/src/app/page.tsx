import Footer from "@/components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  const features = [
    {
      title: "Broadcast to Multiple Platforms",
      description:
        "Expand your audience reach by streaming to multiple platforms simultaneously.",
      imageSrc:
        "https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g",
    },
    {
      title: "Engage with a Wider Audience",
      description:
        "Connect and interact with viewers on various streaming platforms.",
      imageSrc:
        "https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g",
    },
    {
      title: "Stream on Your Terms",
      description:
        "Customize your streaming experience and go live on your own schedule.",
      imageSrc:
        "https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g",
    },
    {
      title: "Connect with Your Audience",
      description:
        "Build a strong connection with your viewers and foster a loyal community.",
      imageSrc:
        "https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g",
    },
  ];

  return (
    <main className="bg-purple-400">
      <NavBar />
      <div className="px-4 py-8 mt-20 text-center">
        <h1 className="text-4xl font-semibold mb-8">
          Welcome to Multi
        </h1>
        <p className="text-lg mb-12">
          Multi allows you to reach a broader audience and engage with
          viewers on multiple streaming platforms simultaneously. Whether you're
          a gamer, content creator, or business professional, Multi is
          the key to expanding your online presence.
        </p>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="relative block group">
          <span className="absolute inset-0 border-2 border-white border-dashed rounded-lg"></span>
          <div className="transition bg-black border-2 border-white rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="p-6 ">
              <p className="mt-4 text-lg font-medium">Create Your First Multistream</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="border w-auto glass rounded-xl flex mx-auto">
                <img
                  src={feature.imageSrc}
                  alt={feature.title}
                  width="150"
                  height="150"
                  className="rounded-2xl p-2"
                />
              </div>
              <h2 className="mt-4 text-2xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
    
  );
}
