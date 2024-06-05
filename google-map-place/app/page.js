"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import CategoryList from "./components/Home/CategoryList";
import RangeSelect from "./components/Home/RangeSelect";
import SelectRating from "./components/Home/SelectRating";
import GoogleMapView from "./components/Home/GoogleMapView";
import GlobalApi from "@/Shared/GlobalApi";
import { UserLocationContext } from "@/context/UserLocationContext";
import BusinessList from "./components/Home/BusinessList";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(25);
  const [businessList, setBusinessList] = useState([]);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/Login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlace();
  }, [category, radius]);

  const getGooglePlace = () => {
    GlobalApi.getGooglePlace(
      category,
      radius,
      userLocation.lat,
      userLocation.lng
    ).then((resp) => {
      // console.log(resp.data.product.results);
      setBusinessList(resp.data.product.results);
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 h-screen">
        <div className="p-3">
          <CategoryList onCategoryChange={(value) => setCategory(value)} />
          <RangeSelect onRadiusChange={(value) => setRadius(value * 100)} />
          <SelectRating />
        </div>
        <div className="col-span-3">
          <GoogleMapView />
          <div
            className="md:absolute mx-2 w-[90%] md:w-[74%]
            bottom-36 relative md:bottom-3"
          >
            <BusinessList businessList={businessList} />
          </div>
        </div>
      </div>
    </div>
  );
}
