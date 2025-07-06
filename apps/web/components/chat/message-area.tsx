import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { MessageInput } from "./message-input";
import { MessageList } from "./message-list";
import { Button } from "@repo/ui/components/ui/button";
import {
  MoveHorizontalIcon,
  PhoneIcon,
  SendIcon,
  VideoIcon,
} from "lucide-react";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Textarea } from "@repo/ui/components/ui/textarea";
import React from "react";

export function MessageArea() {
  return (
    <React.Fragment>
      <div className="border-b bg-background p-4">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Acme Inc</p>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <PhoneIcon className="w-5 h-5" />
              <span className="sr-only">Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <VideoIcon className="w-5 h-5" />
              <span className="sr-only">Video Call</span>
            </Button>
            <Button variant="ghost" size="icon">
              <MoveHorizontalIcon className="w-5 h-5" />
              <span className="sr-only">More</span>
            </Button>
          </div>
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <MessageList />
      </ScrollArea>
      <div className="border-t bg-background p-4">
        <MessageInput />
      </div>
    </React.Fragment>
  );
}
