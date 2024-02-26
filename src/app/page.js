import Image from "next/image";
// pages/index.js
import Header from './components/Header';
import FloatingImage from './components/FloatingImage';

export default function Home() {
  return (
    <div>
      <FloatingImage />
    </div>
  );
}
