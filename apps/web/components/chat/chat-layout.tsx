import { ContactArea } from "./contact-area";
import { MessageArea } from "./message-area";

export function ChatLayout() {
  return (
    <div className="flex size-full">
      <div className="border-r bg-background px-4 pt-4 flex flex-col">
        <ContactArea />
      </div>
      <div className="flex-1 flex flex-col">
        <MessageArea />
      </div>
    </div>
  );
}
