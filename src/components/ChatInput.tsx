import { useChat } from "@/contexts/ChatContext"
import { KeyboardEvent, useState } from "react"

type Props = {
    name: string
}

export const ChatInput = ( {name}: Props ) => {
    const chatCtx = useChat()
    const [textInput, setTextInput] = useState('')

    const handleKeyUpAction = (event: KeyboardEvent) => {
        if(event.code.toLocaleLowerCase() === 'enter') {
            if(textInput.trim() !== '') {
                chatCtx?.addMessage(name, textInput.trim())
                setTextInput('')
            }
        }
    }
    return (
        <input 
            className="w-full bg-transparent text-white text-md outline-none"
            placeholder={`${name}, digite uma mensagem`}
            value={textInput}
            onChange={e =>  setTextInput(e.target.value)}
            onKeyUp={handleKeyUpAction}
        />
    )
}