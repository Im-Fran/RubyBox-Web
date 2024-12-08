import {Link} from "react-router-dom";
import {Box} from "lucide-react";
import {Button} from "@/components/ui/button/button.tsx";

const Navigation = () => <header className="px-4 lg:px-6 h-14 flex items-center bg-pink-50 dark:bg-transparent">
  <Link className="flex items-center justify-center" to={"/"}>
    <Box className="h-6 w-6 text-pink-600"/>
    <span className="ml-2 text-2xl font-bold">RubyBox</span>
  </Link>
  <nav className="ml-auto flex gap-4 sm:gap-6">
    <Link className="text-sm font-medium" to={"/auth/login"}>
      <Button>Acceder</Button>
    </Link>
  </nav>
</header>

export default Navigation