import Menu from "./Menu";
import StructuredData from "./StructuredData";

export default function Layout({ children, isSmallScreen }) {
  return (
    <div>
      <StructuredData />
      <Menu currentPage="AproposDeMoi" isSmallScreen={isSmallScreen} />
      <main>{children}</main>
    </div>
  );
}
