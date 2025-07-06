import { SiteHeader } from "@repo/ui/components/site-header";

import { ChatLayout } from "#components/chat/chat-layout";

export default function InboxPage() {
  return (
    <>
      <SiteHeader title="Inbox" />
      <div className="flex flex-1 flex-col h-[1px] grow">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 md:gap-6 h-full">
            <ChatLayout />
          </div>
        </div>
      </div>
    </>
  );
}
