import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "X-lite",
    description:
      "Full stack x-clone with features of post, like, comment and profile",
    image: "/projects/p1.png",
    tags: ["React", "TailwindCSS", "MongoDB", "Nodejs", "express"],
    demoUrl: "https://x-lite.onrender.com",
    githubUrl: "https://github.com/amitutkarsh06/x-lite",
  },
  {
    id: 2,
    title: "Chat It",
    description:
      "A real time communication chat app with personalized Avatar feature",
    image: "/projects/p2.png",
    tags: ["React", "Nodejs", "expressjs", "socket.io"],
    demoUrl: "https://chat-app-ebne.onrender.com",
    githubUrl: "https://github.com/amitutkarsh06/chat-app",
  },
  {
    id: 3,
    title: "Recipe-Finder app",
    description:
      "Find the recipe of your favourite food with just one search with favourites feature",
    image: "/projects/p3.png",
    tags: ["React", "axios", "Tailwind CSS"],
    demoUrl: "https://recipe-finder-app-omega.vercel.app/",
    githubUrl: "https://github.com/amitutkarsh06/recipeFinder-app",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/amitutkarsh06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
