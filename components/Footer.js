import Image from "next/image";
import git from "../public/assets/logos/GitHubLogo.svg";
import linked from "../public/assets/logos/linkedinLogo.svg";
// import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-transparent w-full p-2 fixed bottom-0">
      <ul className="flex flex-wrap items-center justify-start text-xl">
        <li className="px-3 hover:scale-75">
          <a target={"_blank"} href="https://github.com/wrightw404">
            <Image src={git} width='50' height='50' />
          </a>
        </li>
        <li className="px-3 hover:scale-75">
          <a target={"_blank"} href="https://www.linkedin.com/in/williamwallacewright/">
            <Image src={linked} width='50' height='50'/>
          </a>
        </li>
      </ul>
    </div>
  );
}
