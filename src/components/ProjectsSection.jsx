import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restaurant",
    description: "A beautiful restaurant website with modern design and responsive layout.",
    image: "/projects/portadarestaurante.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/fransanchezp/restaurant-website",
  },
  {
    id: 2,
    title: "Travelling",
    description: "A stunning travel website featuring destination guides, booking systems, and travel inspiration with modern UI design.",
    image: "/projects/portadaviajes.png",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/fransanchezp/egypt-travel-website",
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
          These are the projects I'm currently working on independently. I'll be uploading them to GitHub soon, so stay tuned for updates!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                
                {/* Botón de GitHub */}
                <div className="flex justify-end items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    title="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/fransanchezp"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};