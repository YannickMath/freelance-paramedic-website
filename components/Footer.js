import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const businessName = process.env.NEXT_PUBLIC_BUSINESS_NAME;

  return (
    <footer className="bg-gradient-to-r from-primary-200 via-primary-400 to-primary-300 font-roboto text-sm py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-white">
        <p className="text-center sm:text-left">
          © {currentYear} {businessName} · Tous droits réservés
        </p>
        <Link
          href="/MentionsLegales"
          className="hover:text-primary-900 transition-colors duration-200 underline-offset-4 hover:underline"
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
