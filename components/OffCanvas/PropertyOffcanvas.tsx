import { cn } from "@/utils/classNames";
import { usePropertyDetailsOffcanvas } from "@/store/propertyDetailsOffcanvas";

import React from "react";

import TabPhoto1 from "@/public/tab_photo_1.png";
import TabPhoto2 from "@/public/tab_photo_2.png";
import TabPhoto3 from "@/public/tab_photo_3.png";
import TabPhoto4 from "@/public/tab_photo_4.png";
import TabPhoto5 from "@/public/tab_photo_5.png";
import TabPhoto6 from "@/public/tab_photo_6.png";
import TabPhoto7 from "@/public/tab_photo_7.png";
import TabPhoto8 from "@/public/tab_photo_8.png";

import FloorPlan from "@/public/floor_plan.png";

import Image from "next/image";
import { Icon } from "../ui/Icon";
import { textVariants } from "../ui/Text";
import Map from "../Map";
import { Property } from "@/api/endpoints/properties";

const PropertyOffcanvas = ({ data }: { data: Property }) => {
  // const [isOpenCanvas, setIsOpenCanvas] = React.useState(false);
  const { isOpenCanvas, setIsOpenCanvas, activeTab, setActiveTab } =
    usePropertyDetailsOffcanvas();

  return (
    <div
      className={cn(
        "fixed min-w-[1170px] h-[95vh] top-0 bg-white z-[999] right-0 transition duration-300 transform translate-x-full",
        isOpenCanvas ? "translate-x-0" : ""
      )}
    >
      <div className="w-full h-full overflow-auto flex flex-col gap-8  p-12 relative">
        <div
          onClick={() => setIsOpenCanvas(false)}
          className="absolute cursor-pointer right-5 top-5"
        >
          <Icon name="close" className="text-[20px] text-black" />
        </div>
        <div className="flex items-center gap-8">
          {["Photos", "Floor Plan", "Video", "Map"].map((tab) => (
            <button
              key={tab.toLowerCase().replace(" ", "-")}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={cn(
                textVariants({
                  variant: "button",
                }),
                "border-b-[2px] pb-2.5",
                activeTab === tab.toLowerCase()
                  ? "border-propertiesMain"
                  : "border-transparent"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="overflow-y-auto max-w-[1074px] w-full h-full">
          {activeTab === "photos" && <Photos data={data.media} />}
          {activeTab === "floor plan" && (
            <FloorPlanCanvas data={data.media.floorPlan} />
          )}
          {activeTab === "video" && <Videos data={data.media} />}
          {activeTab === "map" && <MapLocation />}
          {/* <Photos /> */}
        </div>
      </div>
    </div>
  );
};

const FloorPlanCanvas = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-4 md:grid-cols-6">
      <div className="col-span-6">
        {data && (
          <Image src={data} width={1080} height={800} alt="Floor Plan" />
        )}
      </div>
    </div>
  );
};
const Videos = () => {
  return (
    <div className="w-auto max-h-[604px]">
      <video
        height={"504px"}
        controls
        src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1272176544213014571/d0a0ff97fb545580aef00085d8f3d243e78a6b9c?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=POXiS-nfV2DqGsrLhgOhcqLcQtls2QowWSHk2YhlpxrdWE1ueKA40bcgjUD2dtNu1WUywnL8OgcsqW5GtuJ2aKfqcVy-DxzudAIY4CEbzvw4teYDVqi46DXmsfoC5094ybO-F~CJpW~NvHUt0oPUFkhOuiJPFypgZU0bl2Kqn3TYM9TyVQNyYV2CLI2~TG4CZnVf-EAH2INj5djFM7IVwkqqrilMe64308KfevIkdI4Q3scUwWECw71wMMG4JgLQbUCQE8PO~Annnbt3NOnOD0dHrSIN9yB~7bxCiLwk5xrn0bf8dn-iIyW0l6yhZmCOU1VU9B~IHTBT0d1Cpvm7Og__"
      />
      {/* <video src="URL_ADDRESS.youtube.com/watch?URL_ADDRESS.youtube.com/watch?56l9c" contURL_ADDRESS.youtube.com/watch?URL_ADDRESS.youtube.com/watch?56l9c" controlsURL_ADDRESS.youtube.com/watch?URL_ADDRESS.youtube.com/watch?56l9c" controls /> */}
      {/* <video src="URL_ADDRESS.youtube.com/watch?56l9c" controls /> */}
      {/* <video src="URL_ADDRESS.youtube.com/watch?ontrols />
      {/* <video src="URL_ADDRESS.youtube.com/watch?56l9c" controls /> */}
      {/* <video src="URL_ADDRESS/* <video src="URL_ADDRESS.youtube.com/watch?ontrols />
      {/* <video src="URL_ADDRESS   {/* <video src="https://www.youtube.com/watch?v=u8z24j56l9c" controls /> */}
      {/* <video src="https://www.youtube.com/watch?v=u8z24j56l9c" controls /> */}
    </div>
  );
};

const MapLocation = () => {
  return (
    <div className="h-[446px]">
      <Map address="UAE" />
    </div>
  );
};

const Photos = ({ data }: { data: any }) => {
  return (
    <div className="grid grid-cols-1 items-start gap-2.5 sm:grid-cols-4 md:grid-cols-6">
      {data.galleryPhotos &&
        data.galleryPhotos.length > 0 &&
        data.galleryPhotos?.map((item, index) => (
          <div key={index} className="sm:col-span-2">
            <Image
              src={item.url}
              // fill
              width={600}
              height={250}
              className=" object-contain w-full h-full"
              alt="Gallery Image 1"
            />
          </div>
        ))}
      <div className="sm:col-span-2">
        <Image
          src={TabPhoto1}
          className=" object-contain w-full h-full"
          alt="Slider Image 1"
        />
      </div>
      {/* <div className="sm:col-span-2">
        <Image
          src={TabPhoto2}
          className=" object-contain w-full"
          alt="Gallery Image 1"
        />
      </div>
      <div className="sm:col-span-2">
        <Image
          src={TabPhoto3}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div>
      <div className="sm:col-span-3">
        {" "}
        <Image
          src={TabPhoto4}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div>
      <div className="sm:col-span-3">
        {" "}
        <Image
          src={TabPhoto5}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div>
      <div className="sm:col-span-2">
        {" "}
        <Image
          src={TabPhoto6}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div>
      <div className="sm:col-span-2">
        {" "}
        <Image
          src={TabPhoto7}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div>
      <div className="sm:col-span-2">
        {" "}
        <Image
          src={TabPhoto8}
          className=" object-contain w-full"
          alt="Slider Image 1"
        />
      </div> */}
    </div>
  );
};

export default PropertyOffcanvas;
