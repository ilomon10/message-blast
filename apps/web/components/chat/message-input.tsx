import { AutosizeTextarea } from "@repo/ui/components/ui/autosize-textarea";
import { Button } from "@repo/ui/components/ui/button";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { SendIcon } from "lucide-react";

export function MessageInput() {
  return (
    <div>
      <div className="relative">
        <AutosizeTextarea
          maxHeight={250}
          minHeight={42}
          placeholder="Type your message..."
          className="pr-14 rounded-xl resize-none"
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <SendIcon className="w-5 h-5" />
          <span className="sr-only">Send</span>
        </Button>
      </div>
    </div>
  );
}
