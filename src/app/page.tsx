"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { authenticateUser, registerUser } from "@/services/auth";
import { useToast } from "@/hooks/use-toast";
import { Icons } from "@/components/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";

export default function Home() {
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [roleLogin, setRoleLogin] = useState("Author");

  const [fullNameRegister, setFullNameRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [roleRegister, setRoleRegister] = useState("Author");

    const { toast } = useToast();
    const loginForm = useForm();
    const registerForm = useForm();

  const handleLogin = async () => {
    try {
      const authResult = await authenticateUser(
        emailLogin,
        passwordLogin,
        roleLogin
      );

      if (authResult) {
        toast({
          title: "Login Successful",
          description: `Logged in as ${roleLogin}`,
        });
        // Redirect or perform other actions upon successful login
        console.log("Login successful:", authResult);
      } else {
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid credentials. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Login Error",
        description: "An error occurred during login. Please try again.",
      });
    }
  };

  const handleRegister = async () => {
    try {
      const authResult = await registerUser(
        fullNameRegister,
        emailRegister,
        passwordRegister,
        roleRegister
      );

      if (authResult) {
        toast({
          title: "Registration Successful",
          description: "Please log in.",
        });
        // Optionally redirect to login or perform other actions
        console.log("Registration successful:", authResult);
      } else {
        toast({
          variant: "destructive",
          title: "Registration Failed",
          description: "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Registration Error",
        description: "An error occurred during registration. Please try again.",
      });
    }
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
              Quantitative Research Management System
            </h1>
            <p className="text-lg mb-6">
              A comprehensive platform for managing the entire research
              lifecycle, from proposal submission to final publication.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <div className="p-4 rounded-md flex items-center">
                <Icons.user className="mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold mb-2">Role-Based Access</h3>
                  <p className="text-sm">
                    Secure access for administrators, authors, and reviewers.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center">
                <Icons.file className="mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold mb-2">Project Management</h3>
                  <p className="text-sm">
                    Create and track research projects through various stages.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-md flex items-center">
                <Icons.edit className="mr-2 h-5 w-5" />
                <div>
                  <h3 className="font-semibold mb-2">Content Management</h3>
                  <p className="text-sm">
                    Structured templates for various content types with version
                    control.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Login Form */}
          <div className="p-6 rounded-md bg-secondary/50">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">Welcome</h2>
                  <p className="text-gray-600">
                    Sign in to your account or create a new one
                  </p>
                </div>

                {/* Login Form */}
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="email@example.com"
                      type="email"
                      value={emailLogin}
                      onChange={(e) => setEmailLogin(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <Select value={roleLogin} onValueChange={setRoleLogin}>
                        <SelectTrigger id="role">
                            <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Author">Author</SelectItem>
                            <SelectItem value="Reviewer">Reviewer</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                  <Button className="w-full" onClick={handleLogin}>
                    <Icons.arrowRight className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </div>

                <p className="mt-4 text-sm text-center">
                  Don't have an account?{" "}
                  <a href="#" className="text-primary">
                    Register here
                  </a>
                </p>
              </TabsContent>

              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">
                    Register Account
                  </h2>
                  <p className="text-gray-600">
                    Create a new account
                  </p>
                </div>

                {/* Registration Form */}
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={fullNameRegister}
                      onChange={(e) => setFullNameRegister(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      placeholder="email@example.com"
                      type="email"
                      value={emailRegister}
                      onChange={(e) => setEmailRegister(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={passwordRegister}
                      onChange={(e) => setPasswordRegister(e.target.value)}
                    />
                  </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Role</Label>
                        <Select value={roleRegister} onValueChange={setRoleRegister}>
                            <SelectTrigger id="role">
                                <SelectValue placeholder="Select a role" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Author">Author</SelectItem>
                                <SelectItem value="Reviewer">Reviewer</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                  <Button className="w-full" onClick={handleRegister}>
                    Register
                  </Button>
                </div>

                <p className="mt-4 text-sm text-center">
                  Already have an account?{" "}
                  <a href="#" className="text-primary">
                    Login here
                  </a>
                </p>
              </TabsContent>
            </Tabs>
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

