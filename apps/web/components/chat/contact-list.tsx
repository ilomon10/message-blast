import Link from "next/link";
import { ContactItem, ContactItemProps } from "./contact-item";
import { Avatar } from "@repo/ui/components/ui/avatar";

const contacts: ContactItemProps[] = [
  {
    name: "jaredpalmer",
    username: "jaredpalmer",
    avatar_url: "/placeholder-user.jpg",
    last_message: "Did you see the new design?",
  },
  {
    name: "jaredpalmer",
    username: "jaredpalmer",
    avatar_url: "/placeholder-user.jpg",
    last_message: "Did you see the new design?",
  },
  {
    name: "jaredpalmer",
    username: "jaredpalmer",
    avatar_url: "/placeholder-user.jpg",
    last_message: "Did you see the new design?",
  },
];

export function ContactList() {
  return (
    <div className="grid gap-2">
      {contacts.map((props, index) => (
        <ContactItem key={index} {...props} />
      ))}
    </div>
  );
}
