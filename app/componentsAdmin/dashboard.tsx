"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, IconButton, Alert } from "@mui/material";
import { Activity, LogOut } from "lucide-react";

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  


}