import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { MessageItem, MessageItemProps } from "./message-item";

const messages: MessageItemProps[] = [
  {
    name: "shadcn",
    avatar_url: "/placeholder-user.jpg",
    content: "Hey, how's it going?",
    created_at: "2:30 PM",
    is_sender: true,
  },
  {
    name: "jaredpalmer",
    avatar_url: "/placeholder-user.jpg",
    content: "Pretty good, just working on a new project. You?",
    created_at: "2:31 PM",
    is_sender: false,
  },
  {
    name: "shadcn",
    avatar_url: "/placeholder-user.jpg",
    content: "That's great! I'd love to hear more about it.",
    created_at: "2:32 PM",
    is_sender: true,
  },
  {
    name: "jaredpalmer",
    avatar_url: "/placeholder-user.jpg",
    content: "Sure, let me tell you about it...",
    created_at: "2:33 PM",
    is_sender: false,
  },
];

export function MessageList() {
  return (
    <div className="grid gap-4">
      {messages.map((props, index) => (
        <MessageItem key={index} {...props} />
      ))}
    </div>
  );
}
