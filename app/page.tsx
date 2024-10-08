"use client"
import { Button } from '@mui/material';
import { MonitorCheck } from 'lucide-react';
import { useState } from 'react';

export default function HomePage() {

  return (
    <>
      <MonitorCheck />
      <Button variant="contained">Minha Feira</Button>
    </>
  );
}