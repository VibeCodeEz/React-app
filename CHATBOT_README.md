# Custom Chatbot Component

A simple, customizable chatbot component for your React portfolio that works offline and responds to FAQ-style questions.

## Features

- ✅ **No Backend Required** - Works completely offline
- ✅ **Fully Customizable** - Easy to modify questions and responses
- ✅ **Modern UI** - Matches your portfolio's design system
- ✅ **Responsive** - Works on all device sizes
- ✅ **Dark Mode Support** - Automatically adapts to theme changes
- ✅ **TypeScript** - Fully typed for better development experience
- ✅ **Accessible** - Proper ARIA labels and keyboard navigation

## How to Customize

### 1. Modify FAQ Data

Edit the `faqData` array in `src/components/Chatbot.tsx`:

```typescript
const faqData: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer: "I offer web development, mobile app development, UI/UX design, and technical consulting. I specialize in React, TypeScript, Node.js, and modern web technologies.",
    keywords: ["services", "offer", "what do you do", "work", "development"]
  },
  // Add more FAQ items here...
]
```

### 2. Customize Welcome Message

Change the welcome message in the `useEffect` hook:

```typescript
const welcomeMessage: Message = {
  id: '1',
  text: "Hi! I'm your portfolio assistant. Ask me anything about my services, experience, or how to get in touch!",
  sender: 'bot',
  timestamp: new Date()
}
```

### 3. Modify Default Responses

Update the `defaultResponses` array in the `generateResponse` function:

```typescript
const defaultResponses = [
  "I'm not sure I understand. Could you rephrase that or ask about my services, experience, or how to contact me?",
  "That's an interesting question! I'd be happy to discuss my work, skills, or how we can collaborate. What would you like to know?",
  "I'm here to help! Feel free to ask about my development services, experience, or how to get in touch for a project."
]
```

### 4. Adjust Styling

The chatbot uses CSS custom properties that match your portfolio's theme. You can modify the styles in `src/App.css`:

- `.chatbot-toggle` - The floating button
- `.chatbot-container` - The main chat window
- `.message-bot` and `.message-user` - Message styling
- `.typing-indicator` - Loading animation

### 5. Change Position

To move the chatbot to a different position, modify these CSS classes:

```css
.chatbot-toggle {
  bottom: 2rem;  /* Distance from bottom */
  right: 2rem;   /* Distance from right */
}

.chatbot-container {
  bottom: 5rem;  /* Distance from bottom */
  right: 2rem;   /* Distance from right */
}
```

## How It Works

1. **Keyword Matching**: The chatbot uses keyword matching to find the best response
2. **Exact Matches**: First tries to find exact question matches
3. **Keyword Scoring**: If no exact match, finds responses with the most matching keywords
4. **Fallback Responses**: Uses random default responses for unrecognized input

## Adding New Features

### Quick Response Buttons

Add quick response buttons by modifying the component:

```typescript
const quickResponses = [
  "What services do you offer?",
  "How can I contact you?",
  "What's your experience level?"
]

// Add to JSX
<div className="quick-responses">
  {quickResponses.map(response => (
    <button key={response} onClick={() => handleQuickResponse(response)}>
      {response}
    </button>
  ))}
</div>
```

### Message Persistence

To save chat history, add localStorage:

```typescript
// Save messages
useEffect(() => {
  localStorage.setItem('chatbot-messages', JSON.stringify(messages))
}, [messages])

// Load messages
useEffect(() => {
  const saved = localStorage.getItem('chatbot-messages')
  if (saved) {
    setMessages(JSON.parse(saved))
  }
}, [])
```

### Analytics Integration

Track user interactions:

```typescript
const handleSendMessage = async () => {
  // ... existing code ...
  
  // Track user interaction
  if (typeof gtag !== 'undefined') {
    gtag('event', 'chatbot_message', {
      'event_category': 'engagement',
      'event_label': userMessage.text
    })
  }
}
```

## Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Performance

- Lightweight: ~15KB minified
- No external dependencies (except Lucide React icons)
- Efficient keyword matching algorithm
- Smooth animations with CSS transforms

## Troubleshooting

### Chatbot not appearing?
- Check that the component is imported and added to App.tsx
- Verify CSS is loaded properly
- Check browser console for errors

### Styling issues?
- Ensure CSS custom properties are defined in your theme
- Check for CSS conflicts with other components
- Verify responsive breakpoints

### Messages not sending?
- Check that input field is not disabled
- Verify event handlers are properly bound
- Check for JavaScript errors in console

## License

This component is part of your portfolio project and can be freely modified and distributed. 