import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { cn } from "@repo/ui/lib/utils";

export type MessageItemProps = {
  content: string;
  name: string;
  avatar_url: string;
  is_sender: boolean;
  created_at: string;
};

export function MessageItem({
  content,
  name,
  avatar_url,
  is_sender,
  created_at,
}: MessageItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 justify-end",
        is_sender ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div
        className={cn(
          "rounded-md p-3 max-w-[75%]",
          is_sender ? "bg-muted" : "bg-primary text-primary-foreground",
        )}
      >
        <p>{content}</p>
        <div
          className={cn(
            "text-xs mt-1",
            is_sender ? "text-muted-foreground" : "text-primary-foreground/80",
          )}
        >
          {created_at}
        </div>
      </div>
      <Avatar className="w-10 h-10 border">
        <AvatarImage src={avatar_url} alt={name} />
        <AvatarFallback>{name.slice(0, 2).toLocaleUpperCase()}</AvatarFallback>
      </Avatar>
    </div>
  );
}
