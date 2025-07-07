import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface FAQItem {
  question: string
  answer: string
  keywords: string[]
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // FAQ data - you can customize these questions and answers
  const faqData: FAQItem[] = [
    {
      question: "What services do you offer?",
      answer: "I offer web development, mobile app development, UI/UX design, and technical consulting. I specialize in React, TypeScript, Node.js, and modern web technologies.",
      keywords: ["services", "offer", "what do you do", "work", "development"]
    },
    {
      question: "How can I contact you?",
      answer: "You can reach me through email, LinkedIn, or by filling out the contact form on my website. I typically respond within 24 hours.",
      keywords: ["contact", "email", "reach", "get in touch", "message"]
    },
    {
      question: "What is your experience level?",
      answer: "I have several years of experience in full-stack development, working with various technologies and frameworks. I've completed numerous projects for clients and personal ventures.",
      keywords: ["experience", "years", "level", "senior", "junior", "expertise"]
    },
    {
      question: "Do you work remotely?",
      answer: "Yes, I work remotely and can collaborate with clients worldwide. I'm available for both short-term projects and long-term partnerships.",
      keywords: ["remote", "work from home", "location", "onsite", "collaboration"]
    },
    {
      question: "What are your rates?",
      answer: "My rates vary depending on project complexity and scope. I offer competitive pricing and can provide detailed quotes after understanding your requirements.",
      keywords: ["rates", "pricing", "cost", "price", "budget", "quote"]
    },
    {
      question: "What technologies do you use?",
      answer: "I work with React, TypeScript, Node.js, Python, and various databases. I'm always learning new technologies and can adapt to your specific tech stack.",
      keywords: ["technologies", "tech stack", "programming languages", "frameworks", "tools"]
    }
  ]

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        text: "Hi! I'm your portfolio assistant. Ask me anything about my services, experience, or how to get in touch!",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chatbot opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }, [isOpen])

  const findBestMatch = (userInput: string): FAQItem | null => {
    const input = userInput.toLowerCase()
    
    // First, try exact question matches
    const exactMatch = faqData.find(item => 
      item.question.toLowerCase().includes(input) || 
      input.includes(item.question.toLowerCase())
    )
    if (exactMatch) return exactMatch

    // Then, try keyword matches
    const keywordMatches = faqData.filter(item =>
      item.keywords.some(keyword => input.includes(keyword.toLowerCase()))
    )

    if (keywordMatches.length > 0) {
      // Return the best match based on keyword count
      return keywordMatches.reduce((best, current) => {
        const bestScore = best.keywords.filter(k => input.includes(k.toLowerCase())).length
        const currentScore = current.keywords.filter(k => input.includes(k.toLowerCase())).length
        return currentScore > bestScore ? current : best
      })
    }

    return null
  }

  const generateResponse = (userInput: string): string => {
    const match = findBestMatch(userInput)
    
    if (match) {
      return match.answer
    }

    // Default responses for unrecognized input
    const defaultResponses = [
      "I'm not sure I understand. Could you rephrase that or ask about my services, experience, or how to contact me?",
      "That's an interesting question! I'd be happy to discuss my work, skills, or how we can collaborate. What would you like to know?",
      "I'm here to help! Feel free to ask about my development services, experience, or how to get in touch for a project."
    ]
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(userMessage.text)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChatbot = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setMessages([])
    }
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label="Toggle chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <div className="chatbot-title">
              <Bot size={20} />
              <span>Portfolio Assistant</span>
            </div>
            <button
              className="chatbot-close"
              onClick={toggleChatbot}
              aria-label="Close chatbot"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === 'user' ? 'message-user' : 'message-bot'}`}
              >
                <div className="message-avatar">
                  {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message message-bot">
                <div className="message-avatar">
                  <Bot size={16} />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="send-button"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Chatbot 