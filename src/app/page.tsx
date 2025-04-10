"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Author");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", { email, password, role });
  };

  const handleRegister = () => {
    // Handle register logic here
    console.log("Registering with:", { email, password, role });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-secondary p-6 flex justify-between items-center">
        <div className="text-2xl font-semibold">ResearchFlow</div>
        <nav>
          <a href="#" className="mr-4">
            Features
          </a>
          <a href="#">Contact</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Landing Page Content */}
          <div className="md:order-1">
            <h1 className="text-4xl font-bold mb-4">
              Welcome to ResearchFlow
            </h1>
            <p className="text-lg mb-6">
              Your all-in-one platform for managing quantitative research
              projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold mb-2">Role-Based Access</h3>
                <p className="text-sm">
                  Secure access for administrators, authors, and reviewers.
                </p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold mb-2">Project Management</h3>
                <p className="text-sm">
                  Create and track research projects through various stages.
                </p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-semibold mb-2">Content Management</h3>
                <p className="text-sm">
                  Structured templates for various content types with version
                  control.
                </p>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-6 border rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
            <p className="text-gray-600 mb-4">Sign in to your account</p>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4"
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-4"
            />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full p-2.5 border rounded-md mb-4 text-sm"
            >
              <option value="Author">Author</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Admin">Admin</option>
            </select>
            <Button className="w-full" onClick={handleLogin}>
              Login
            </Button>
            <p className="mt-4 text-sm">
              Don't have an account?{" "}
              <a href="#" className="text-primary">
                Register here
              </a>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary p-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ResearchFlow. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
