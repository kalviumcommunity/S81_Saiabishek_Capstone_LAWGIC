import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ChatPage = () => {
  const { id } = useParams(); // The ID of the person you are chatting with
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  
  // Mock useEffect for fetching messages and setting up chat
  useEffect(() => {
    // In a real application, you'd fetch chat history and connect to a WebSocket
    setMessages([
      { id: 1, sender: 'other', text: 'Hi, I saw your post about the property dispute. How can I help?', timestamp: '10:00 AM' },
      { id: 2, sender: 'self', text: 'Thanks for responding! I need advice on drafting a legal notice.', timestamp: '10:01 AM' },
      { id: 3, sender: 'other', text: 'Okay, I can help with that. Can you provide more details about the issue?', timestamp: '10:02 AM' },
    ]);
  }, [id]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'self',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInput('');
    // In a real app, this would send the message via WebSocket
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  return (
    <motion.div 
      className="flex flex-col h-[calc(100vh-6rem)] bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white shadow-md p-4">
        <h2 className="text-xl font-bold text-gray-800">Chat with [User/Lawyer Name]</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg, index) => (
          <motion.div
            key={msg.id}
            className={`flex ${msg.sender === 'self' ? 'justify-end' : 'justify-start'}`}
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            custom={index}
          >
            <div className={`p-3 rounded-lg max-w-xs md:max-w-md ${
              msg.sender === 'self' 
                ? 'bg-blue-500 text-white rounded-br-none' 
                : 'bg-gray-300 text-gray-800 rounded-bl-none'
            }`}>
              <p>{msg.text}</p>
              <span className="text-xs mt-1 block opacity-80">{msg.timestamp}</span>
            </div>
          </motion.div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="bg-white p-4 flex items-center shadow-inner">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          type="submit"
          className="ml-4 bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaPaperPlane />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ChatPage;