import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import Link from "next/link";

export type ContactItemProps = {
  name: string;
  username: string;
  avatar_url: string;
  last_message: string;
};

export function ContactItem({
  name,
  username,
  avatar_url,
  last_message,
}: ContactItemProps) {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 rounded-md p-2 hover:bg-muted transition-colors"
      prefetch={false}
    >
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={avatar_url} alt={username} />
        <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <div className="flex-1 truncate">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-muted-foreground truncate">{last_message}</p>
      </div>
      <div className="text-xs text-muted-foreground">2h</div>
    </Link>
  );
}
