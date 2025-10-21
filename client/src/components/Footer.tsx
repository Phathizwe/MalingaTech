import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/logo.png" 
              alt="malinga.tech" 
              className="h-12 mb-4"
            />
            <p className="text-muted-foreground text-sm max-w-md">
              Africa's technology future, compounded. We build profitable ventures
              using invisible technology that serves Africa's evolving needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Phathizwe/MalingaTech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@malingatech.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MalingaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

