import logo from "../../../assets/images/Header/arclogo.png";
import MenuIcon from "@mui/icons-material/Menu";

export const HeaderOne = () => {
  return (
    <header className="relative py-3 px-4 lg:px-24 flex justify-between items-center z-[99]">
      <img src={logo} className="h-12 md:h-16" alt="logo" />
      <MenuIcon
        sx={{
          color: "#fff",
          fontSize: "24px",
          "@media (min-width: 768px)": {
            fontSize: "35px",
          },
        }}
      />
    </header>
  );
};