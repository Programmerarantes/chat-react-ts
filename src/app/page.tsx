"use client"

import { Chat } from "@/components/Chat"
import { ChatProvider } from "@/contexts/ChatContext"
import { UserProvider } from "@/contexts/UserContext"

const Page = () => {
  return (
    <div className="container mx-auto max-w-lg px-2">
      <UserProvider>
          <ChatProvider>
            <h1 className="text-center text-3xl my-3">Chat Simples</h1>

            <Chat />
          </ChatProvider>
      </UserProvider>

    </div>
  )
}

export default Page