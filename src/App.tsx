import React, { useState } from 'react';
import { Activity, Users, Target, Clock, ChevronRight, Instagram, Facebook, Twitter, Calculator, Calendar, LineChart } from 'lucide-react';

function PainAssessment() {
  const [painLevel, setPainLevel] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const assessPain = () => {
    if (painLevel && location && duration) {
      setResult("Based on your input, we recommend scheduling a consultation for a personalized rehabilitation plan. Our experienced physical therapists will conduct a thorough assessment and develop a targeted treatment strategy.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Pain Assessment Tool</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Pain Level (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            value={painLevel}
            onChange={(e) => setPainLevel(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            placeholder="Enter pain level"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Pain Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Select location</option>
            <option value="back">Back</option>
            <option value="neck">Neck</option>
            <option value="shoulder">Shoulder</option>
            <option value="knee">Knee</option>
            <option value="ankle">Ankle</option>
            <option value="hip">Hip</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Duration</label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          >
            <option value="">Select duration</option>
            <option value="acute">Less than 2 weeks</option>
            <option value="subacute">2-6 weeks</option>
            <option value="chronic">More than 6 weeks</option>
          </select>
        </div>
        <button
          onClick={assessPain}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Assess Pain
        </button>
        {result && (
          <div className="mt-4 p-4 bg-blue-50 rounded-md">
            <p className="text-sm text-blue-900">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    condition: '',
    referral: '',
    insurance: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for booking! We will contact you shortly to confirm your appointment.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      condition: '',
      referral: '',
      insurance: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Schedule Initial Assessment</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Condition/Injury</label>
          <input
            type="text"
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Referral Source</label>
          <select
            value={formData.referral}
            onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          >
            <option value="">Select referral source</option>
            <option value="doctor">Doctor</option>
            <option value="insurance">Insurance</option>
            <option value="self">Self-referred</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Insurance Provider</label>
          <input
            type="text"
            value={formData.insurance}
            onChange={(e) => setFormData({ ...formData, insurance: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Information</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Schedule Assessment
        </button>
      </div>
    </form>
  );
}

function RecoveryTracker() {
  const [progress, setProgress] = useState({
    painLevel: '7',
    mobility: '60',
    strength: '40',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">Recovery Progress</h3>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Pain Level Reduction</label>
          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${Math.min(((10 - parseInt(progress.painLevel)) / 10) * 100, 100)}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 mt-1">Current pain level: {progress.painLevel}/10</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Mobility Improvement</label>
          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${Math.min(parseInt(progress.mobility), 100)}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 mt-1">{progress.mobility}% improved</span>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Strength Recovery</label>
          <div className="h-4 bg-gray-200 rounded-full">
            <div
              className="h-full bg-blue-600 rounded-full"
              style={{ width: `${Math.min(parseInt(progress.strength), 100)}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 mt-1">{progress.strength}% recovered</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Physical Therapy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <nav className="relative z-10 flex justify-between items-center px-6 py-4">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">RehabCare</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-gray-300">Services</a>
            <a href="#tools" className="text-white hover:text-gray-300">Assessment</a>
            <a href="#testimonials" className="text-white hover:text-gray-300">Success Stories</a>
            <a href="#booking" className="text-white hover:text-gray-300">Book Now</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Your Path to Recovery</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">Expert Physical Therapy & Rehabilitation Services</p>
          <a href="#booking" className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300 flex items-center">
            Schedule Assessment
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Physical Therapy</h3>
              <p className="text-gray-600">Personalized rehabilitation programs for injury recovery and pain management.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Sports Rehabilitation</h3>
              <p className="text-gray-600">Specialized treatment for sports-related injuries and performance recovery.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Post-Surgery Rehab</h3>
              <p className="text-gray-600">Comprehensive recovery programs following surgical procedures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Assessment Tools</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Pain Assessment</h3>
              </div>
              <PainAssessment />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Calendar className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Schedule Assessment</h3>
              </div>
              <BookingForm />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <LineChart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold">Track Recovery</h3>
              </div>
              <RecoveryTracker />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Recovery Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">"After my knee surgery, I was worried about getting back to normal. The team at RehabCare guided me through every step of my recovery. Now I'm back to my active lifestyle!"</p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-gray-500 text-sm">Knee Rehabilitation</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-gray-600 mb-6">"The chronic back pain I suffered from for years is finally manageable. The personalized treatment plan and exercises made all the difference."</p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
                  alt="Mike Thompson"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">Mike Thompson</p>
                  <p className="text-gray-500 text-sm">Back Pain Treatment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="bg-blue-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Recovery Journey</h2>
          <p className="text-xl mb-8">Schedule your initial assessment today and take the first step towards pain-free living.</p>
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Activity className="h-6 w-6" />
              <span className="ml-2 text-xl font-bold">RehabCare</span>
            </div>
            <p className="text-gray-400">Expert physical therapy and rehabilitation services for your recovery journey.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#tools" className="hover:text-white">Assessment</a></li>
              <li><a href="#testimonials" className="hover:text-white">Success Stories</a></li>
              <li><a href="#booking" className="hover:text-white">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Recovery Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@rehabcare.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 RehabCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;