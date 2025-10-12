import { Facebook, Linkedin, Twitter, Instagram, Globe } from "lucide-react";
import { Divider } from "@mui/material";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-200 text-gray-800 text-sm">
      <div className="max-w-7xl mx-auto py-10 px-6 grid grid-cols-5 gap-10">

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="font-bold text-gray-900 text-base mb-2">LOGO</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>
          <p className="text-xs text-gray-600 mt-6">
            copyright 2024 <b>MinhaFeira</b> All Rights Reserved
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700 mb-1">About us</h3>
          <a href="#" className="hover:underline">Investors</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Book a demo</a>
          <a href="#" className="hover:underline">Security</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700 mb-1">Useful Links</h3>
          <a href="#" className="hover:underline">Free rewards</a>
          <a href="#" className="hover:underline">Documentation</a>
          <a href="#" className="hover:underline">Affiliate program</a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-gray-700 mb-1">Social</h3>
          <a href="#" className="hover:underline">Changelog</a>
          <a href="#" className="hover:underline">License</a>
          <a href="#" className="hover:underline">Site Maps</a>
          <a href="#" className="hover:underline">News</a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Facebook size={18} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Linkedin size={18} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Twitter size={18} />
            </button>
            <button className="bg-black rounded-full p-2 text-white hover:opacity-80">
              <Instagram size={18} />
            </button>
          </div>

          {/* Seleção de idioma */}
          <div className="flex items-center justify-between border border-gray-400 rounded-xl px-3 py-1 mt-1 shadow-sm w-fit">
            <div className="flex items-center gap-2 text-gray-600">
              <Globe size={16} />
              <span>Português - BR</span>
            </div>
            <span className="ml-2 text-gray-500">▼</span>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            This page uses cookies. See cookies details here
          </p>
        </div>
      </div>

      <Divider className="border-gray-400" />
    </footer>
  );
}
