import React from 'react';
import { 
  MessageSquare, 
  Users, 
  Zap, 
  Chrome, 
  Star, 
  CheckCircle, 
  ArrowRight,
  LinkedinIcon,
  Shield,
  Bot,
  Target,
  Download
} from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Message Generation",
      description: "Generate personalized connection requests, follow-ups, sales messages, and networking outreach with AI."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Multiple Message Types",
      description: "Create messages for connections, follow-ups, sales outreach, and networking with different tones and styles."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Smart Personalization",
      description: "Auto-fill contact information and customize messages based on profiles for higher response rates."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Works seamlessly within LinkedIn - no external tools needed. Generate and insert messages instantly."
    }
  ];

  const messageTypes = [
    {
      title: "Connection Requests",
      description: "Craft compelling connection requests that get accepted",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Follow Up Messages",
      description: "Professional follow-ups that maintain relationships",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Sales Outreach",
      description: "Persuasive sales messages that convert prospects",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Networking",
      description: "Build meaningful professional relationships",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Sales Manager",
      content: "This AI assistant doubled my LinkedIn response rate. The personalized messages feel natural and professional.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Business Developer",
      content: "Saves me hours every week. The AI generates perfect messages for every situation - connections, sales, follow-ups.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Recruiter",
      content: "Game-changer for LinkedIn outreach. My connection acceptance rate went from 20% to 65%.",
      rating: 5
    }
  ];

  const handleDownload = () => {
    // Replace with actual Chrome store URL
    window.open('https://chrome.google.com/webstore/detail/linkedin-ai-assistant', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10"></div>
        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LinkedIn AI Assistant</span>
            </div>
            <button 
              onClick={handleDownload}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Chrome className="w-4 h-4" />
              <span>Download</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered LinkedIn Messaging
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Generate Perfect LinkedIn
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Messages</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              AI-powered Chrome extension that crafts personalized connection requests, follow-ups, 
              sales messages, and networking outreach that actually get responses.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleDownload}
              className="group flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Chrome className="w-5 h-5" />
              <span className="font-semibold">Install Free Extension</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm">4.9/5 from 1,200+ users</span>
            </div>
          </div>

          {/* Hero Visual - Message Types */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {messageTypes.map((type, index) => (
                  <div key={index} className={`bg-gradient-to-br ${type.color} p-6 rounded-xl text-white`}>
                    <h3 className="font-semibold mb-2">{type.title}</h3>
                    <p className="text-sm opacity-90">{type.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-2 text-gray-600">
                  <Bot className="w-5 h-5" />
                  <span className="text-sm font-medium">AI generates personalized messages in seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to generate perfect LinkedIn messages
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Message Type</h3>
              <p className="text-gray-600">Select from Connection, Follow Up, Sales, or Networking messages</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Generates Content</h3>
              <p className="text-gray-600">Our AI creates personalized messages based on the profile and context</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Send & Get Results</h3>
              <p className="text-gray-600">Review, customize if needed, and send your perfectly crafted message</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for LinkedIn Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI features designed to boost your LinkedIn messaging effectiveness
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-200">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              <Download className="w-4 h-4 mr-2" />
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Lead Generation
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're working on powerful data scraping features that will help recruiters and sales professionals 
              extract and download LinkedIn search results for easy lead management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Profile data extraction</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Bulk export to CSV</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                <span>Recruiter-friendly format</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by LinkedIn Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of professionals who've transformed their LinkedIn outreach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your LinkedIn Outreach?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Install our AI assistant and start generating messages that get responses today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={handleDownload}
              className="group flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Chrome className="w-5 h-5" />
              <span className="font-semibold">Install Free Extension</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>Free to install</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>Works instantly</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
              <span>No signup required</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">LinkedIn AI Assistant</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 LinkedIn AI Assistant. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;