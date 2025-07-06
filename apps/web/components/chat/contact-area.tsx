import { Button } from "@repo/ui/components/ui/button";
import { ContactList } from "./contact-list";
import { PlusIcon } from "lucide-react";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import React from "react";

export function ContactArea() {
  return (
    <React.Fragment>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Chats</h2>
        <Button variant="ghost" size="icon">
          <PlusIcon className="w-5 h-5" />
          <span className="sr-only">New Chat</span>
        </Button>
      </div>
      <ScrollArea className="grow pb-4">
        <ContactList />
      </ScrollArea>
    </React.Fragment>
  );
}
