import { useEffect, useState } from 'react'
import { type Message, ChatLine, LoadingChatLine } from './ChatLine'
import { useCookies } from 'react-cookie'

const COOKIE_NAME = 'nextjs-example-ai-chat-gpt3'

// default first message to display in UI (not necessary to define the prompt)
export const initialMessages: Message[] = [
  {
    who: 'bot',
    message: 'Yo! Ready to step out!',
  },
]

const InputMessage = ({ input, setInput, sendMessage }: any) => (
  <div className="mt-6 flex clear-both">
    <input
      type="text"
      aria-label="chat input"
      required
      className=" flex-auto appearance-none rounded-md border border-white bg-black px-3 py-[calc(theme(spacing.2)-1px)] placeholder:text-white focus:outline-none"
      value={input}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          sendMessage(input)
          setInput('')
        }
      }}
      onChange={(e) => {
        setInput(e.target.value)
      }}
    />
    <button
      type="submit"
      className="ml-4 border-2 cursor-pointer rounded-lg w-32 md:flex hidden flex-row items-center justify-center pt-1.5 pb-1.5" 
      onClick={() => {
        sendMessage(input)
        setInput('')
      }}
    >
      Ask
    </button>
  </div>
)

const Chat = () => {
	const [messages, setMessages] = useState<Message[]>(initialMessages)
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const [cookie, setCookie] = useCookies([COOKIE_NAME])

	useEffect(() => {
		if (!cookie[COOKIE_NAME]) {
		// generate a semi random short id
		const randomId = Math.random().toString(36).substring(7)
			setCookie(COOKIE_NAME, randomId)
		}
	}, [cookie, setCookie])

  	// send message to API /api/chat endpoint
	const sendMessage = async (message: string) => {
		setLoading(true)
		const newMessages = [
			...messages,
			{ message: message, who: 'user' } as Message,
		]
		setMessages(newMessages)
		const last10mesages = newMessages.slice(-10)

		const response = await fetch('/api/assistant/chat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				messages: last10mesages,
				user: cookie[COOKIE_NAME],
			}),
		})
		const data = await response.json()

		// strip out white spaces from the bot message
		const botNewMessage = data.text.trim()

		setMessages([
			...newMessages,
			{ message: botNewMessage, who: 'bot' } as Message,
		])
		setLoading(false)
	}

	return (
		<div className="rounded-2xl  w-[30%] h-[80%] overflow-auto flex flex-col justify-between  border-zinc-100 border p-6">
			<div>
				{messages.map(({ message, who }, index) => (
					<ChatLine key={index} who={who} message={message} />
				))}

				{loading && <LoadingChatLine />}
			</div>
			<div className="  ">	
				{messages.length < 2 && (
					<span className="mx-auto text-gray-600 clear-both">
						Type a message to start the conversation
					</span>
				)}
				<InputMessage
					input={input}
					setInput={setInput}
					sendMessage={sendMessage}
				/>
			</div>	
		</div>
	)
}

export default Chat