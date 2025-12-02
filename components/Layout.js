import Menu from "./Menu";
import StructuredData from "./StructuredData";

export default function Layout({ children, isSmallScreen }) {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <Menu currentPage="AproposDeMoi" isSmallScreen={isSmallScreen} />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
