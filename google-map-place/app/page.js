"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryList from "./components/Home/CategoryList";
import RangeSelect from "./components/Home/RangeSelect";
import SelectRating from "./components/Home/SelectRating";
import GoogleMapView from "./components/Home/GoogleMapView";
import GlobalApi from "@/Shared/GlobalApi";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, []);

  const getGooglePlace = () => {
    GlobalApi.getGooglePlace().then((resp) => {
      console.log(resp.data.product.results);
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className="p-3">
          <CategoryList />
          <RangeSelect />
          <SelectRating />
        </div>
        <div className="col-span-3">
          <GoogleMapView />
        </div>
      </div>
    </div>
  );
}
