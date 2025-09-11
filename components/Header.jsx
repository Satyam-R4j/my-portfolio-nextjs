import Link from "next/link";
import {Button} from "./ui/button";
import Nav from "./Nav";



const Header = () => {
  return <header className="py-8 xl:py-12 text-white bg-pink-50/20 ">
    <div className="container  mx-auto flex justify-between ">
      <Link href="/">
        <h1 className="text-4xl font-semibold">Satyam-R4j<span className="text-red-500">.</span></h1>
      </Link>

      <div className="hidden xl:flex items-center gap">
      <Nav/>
      <Link href="/contact">
      <Button>Hire me</Button>
      </Link>
        
      </div>

      <div className="xl:hidden">mobile nav</div>
    </div>
  </header>;
};

export default Header;
