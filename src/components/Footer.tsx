import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-8">
      <div className="container-page flex flex-col justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.fullName}.
          {" "}Built with Next.js.
        </p>

        <a
          href="/#home"
          className="w-fit text-accent hover:underline focus-ring"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}