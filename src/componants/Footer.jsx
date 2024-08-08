// Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FooterSection, FooterLink, SocialIcon } from "../utils/Utils";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          <FooterSection title="Get In Touch">
            <p className="text-gray-400 mb-4">the quick fox jumps over the lazy dog</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <SocialIcon href="#" icon={FaFacebookF} />
              <SocialIcon href="#" icon={FaInstagram} />
              <SocialIcon href="#" icon={FaTwitter} />
            </div>
          </FooterSection>
          <FooterSection title="Company info">
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Carrier</FooterLink>
              <FooterLink href="#">We are hiring</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </FooterSection>
          <FooterSection title="Features">
            <ul className="space-y-2">
              <FooterLink href="#">Business Marketing</FooterLink>
              <FooterLink href="#">User Analytic</FooterLink>
              <FooterLink href="#">Live Chat</FooterLink>
              <FooterLink href="#">Unlimited Support</FooterLink>
            </ul>
          </FooterSection>
          <FooterSection title="Resources">
            <ul className="space-y-2">
              <FooterLink href="#">IOS & Android</FooterLink>
              <FooterLink href="#">Watch a Demo</FooterLink>
              <FooterLink href="#">Customers</FooterLink>
              <FooterLink href="#">API</FooterLink>
            </ul>
          </FooterSection>
        </div>
        <div className="text-center text-gray-500 mt-16">
          Made With Love By Figmaland All Right Reserved
        </div>
      </div>
    </footer>
  );
}
