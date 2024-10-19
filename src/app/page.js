import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Section from "../components/Section.jsx";

export default function Home() {
  return (
    <main>
      <Header />
      <Section />
      <Footer />
    </main>
  );
}
//src\components\header.jsx