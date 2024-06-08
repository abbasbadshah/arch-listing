import { HeaderOne } from "../common/header";
import { Footer } from "../common/footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <HeaderOne />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
