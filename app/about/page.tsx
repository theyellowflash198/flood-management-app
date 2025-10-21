"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Shield, Users, AlertCircle, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col">
      <Navbar isLoggedIn={true} user={{ name: "User" }} onLogout={() => {}} />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About Flood Manager</h1>
          <p className="text-gray-600 mt-2">Empowering communities with real-time flood management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-blue-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Flood Manager is dedicated to providing real-time flood monitoring and management solutions to help
              communities prepare, respond, and recover from flood disasters. We leverage advanced weather data,
              satellite imagery, and AI predictions to save lives and protect property.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-green-600" size={32} />
              <h2 className="text-2xl font-bold text-gray-800">NDRF Partnership</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We work closely with the National Disaster Response Force (NDRF) to provide critical data and insights for
              disaster management. Our platform helps coordinate rescue operations and evacuation efforts across
              affected regions.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <AlertCircle className="text-red-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Real-time Alerts</h3>
              <p className="text-sm text-gray-600">Instant notifications for flood warnings and updates</p>
            </div>
            <div className="text-center">
              <Shield className="text-blue-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Risk Assessment</h3>
              <p className="text-sm text-gray-600">AI-powered flood risk predictions and analysis</p>
            </div>
            <div className="text-center">
              <Users className="text-green-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Community Support</h3>
              <p className="text-sm text-gray-600">Connect with rescue teams and emergency services</p>
            </div>
            <div className="text-center">
              <Heart className="text-orange-600 mx-auto mb-3" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Disaster Relief</h3>
              <p className="text-sm text-gray-600">Resources and support for affected communities</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Emergency Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-blue-100 text-sm">NDRF Helpline</p>
              <p className="text-2xl font-bold">1-800-NDRF-911</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Flood Manager Support</p>
              <p className="text-2xl font-bold">1-800-FLOOD-911</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Email</p>
              <p className="text-2xl font-bold">help@floodmanager.com</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
