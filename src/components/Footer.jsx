import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>by Francisco Praena</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/fransanchezp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Fran Praena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}