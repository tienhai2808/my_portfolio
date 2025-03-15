import IconCloud from "./magicui/icon-cloud";
import { slugs } from "../helpers/SlugIcon";
import { IconHexagon } from "@tabler/icons-react";

export function Loader() {
  return (
    <div className="relative flex h-full w-full animate-[ping_0.8s_ease-in-out_1_2.5s] items-center justify-center px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
      <IconHexagon className="absolute -z-10 animate-[spin_3s_linear_infinite]" size={120} color="#8cf8f8" stroke={1.25} />
      <div className="absolute font-mono text-primaryColor font-semibold text-6xl -z-10">H</div>
    </div>
  );
}
