import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Productcard from "@/components/ProductCard";

export default function Home() {
  return (
    <main >
      <Banner/>
      <div style={{margin:"20px",display:"flex",
        flexDirection:"row",alignContent:"space-around",
        justifyContent:"space-around",flexWrap:"wrap"
      }}>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
        <Productcard/>
      </div>
    </main>
  );
}
