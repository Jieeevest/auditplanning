"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import fetchApi from "@/helpers/fetchApi";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

// Define the type for the form parameters
interface FormParams {
  pn: string;
  password: string;
}

export default function Home() {
  const router = useRouter();

  const [params, setParams] = useState<FormParams>({
    pn: "",
    password: "",
  });

  useEffect(() => {
    // Retrieve the 'pn' from cookies if it exists
    const savedPn = getCookie("pn")?.toString() || "";
    setParams((prev) => ({
      ...prev,
      pn: savedPn,
    }));
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setParams((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Save 'pn' to cookies
    setCookie("pn", params.pn);

    try {
      const response = await fetchApi(
        "POST",
        `${process.env.NEXT_PUBLIC_API_URL_AUTH}/login`,
        { pn: params.pn, password: params.password },
        false,
        "Berhasil login!"
      );

      if (response?.statusCode === 200) {
        setCookie("token", response.token);
        router.push("/dashboard");
      } else {
        // Handle login error here (e.g., show an error message)
        console.error("Login failed:", response?.message || "Unknown error");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("An error occurred:", error);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Authentication</CardTitle>
          <CardDescription>
            Enter your access below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="pn">Personal Number</Label>
            <Input
              id="pn"
              type="text"
              placeholder="e.g: 00136922"
              value={params.pn}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="***"
              value={params.password}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleSubmit}>
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
