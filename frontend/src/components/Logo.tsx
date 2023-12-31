import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image"; // Import the Image component
import logo from '@/assets/shop/logo.png';

interface Props {
  className?: string;
  spanClassName?: string;
}

const Logo = ({ className, spanClassName }: Props) => {
  return (
    <Link href="/" className={cn(
      "text-zinc-950 text-xl underline underline-offset-4 decoration-[1px] group",
      className
    )}>
      <Image src={logo} alt="Logo" width={70} height={50} />

    </Link>
  );
};

export default Logo;
