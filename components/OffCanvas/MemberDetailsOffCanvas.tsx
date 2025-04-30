import { cn } from "@/utils/classNames";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
import { Icon } from "../ui/Icon";
import { Text, textVariants } from "../ui/Text";
import OffcanvasMemberImg from "@/public/member_offcanvas.png";
import Image from "next/image";
import ContentSection from "../common/ContentSection";
const MemberDetailsOffcanvas = () => {
  const { isOpenCanvas, activeTab, closeCanvas, setActiveTab } =
    useMemberDetailsOffcanvas();

  const tabs = [
    { label: "Biography", value: "biography" },
    { label: "Projects", value: "projects" },
  ];

  return (
    <div
      className={cn(
        "fixed w-[800px] h-[95vh] top-0 bg-white z-[999] right-0 transition duration-300 transform translate-x-full",
        isOpenCanvas && "translate-x-0"
      )}
    >
      <div className="w-full h-full overflow-auto flex flex-col gap-8 p-12 relative">
        {/* Close Button */}
        <div
          onClick={closeCanvas}
          className="absolute cursor-pointer right-5 top-5"
        >
          <Icon name="close" className="text-[20px] text-black" />
        </div>

        {/* Tabs */}
        <div className="flex flex-col gap-12">
          <div className="flex items-start gap-8">
            <div className="overflow-hidden border-4 border-propertiesMain  rounded-full h-[150px] w-[150px]">
              <Image
                src={OffcanvasMemberImg}
                alt="Member"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-8">
              <Text variant={"section_title_normal"}>John Anderson</Text>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <Icon name="call" className="text-[16px]" />
                  <Text variant={"small"}>+971 123 456 789</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="email" className="text-[16px]" />
                  <Text variant={"small"}>emailname@domain.com</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="location_on" className="text-[16px]" />
                  <Text variant={"small"}>London, UK</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            {["Biography", "Projects"].map((tab) => (
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
        </div>

        {/* Content */}
        <div className="">
          {activeTab === "biography" && <BiographyContent />}
          {activeTab === "projects" && <ProjectsContent />}
        </div>
      </div>
    </div>
  );
};

const BiographyContent = () => {
  return (
    <ContentSection
      color="text-neutralDark"
      texts={[
        "John Anderson is a seasoned real estate consultant with over 10 years of experience in residential, commercial, and luxury property investments. With a deep understanding of market trends, property valuation, and investment strategies, he has helped numerous clients find their ideal properties, maximize ROI, and make informed real estate decisions. John specializes in high-value transactions, property development, and portfolio management, ensuring that clients receive top-tier service tailored to their unique needs.",
        "Ultricies blandit magna vestibulum malesuada iaculis pellentesque volutpat odio amet. Ac sodales odio pulvinar imperdiet adipiscing libero ipsum. Non diam curabitur ipsum imperdiet. Tellus convallis consectetur viverra fames leo massa. Tellus sodales purus magna sed et fringilla id eu. Amet ac egestas nascetur aliquam. Mauris donec risus sed suspendisse lectus nibh lobortis aliquet. Nisi tortor sem viverra nec parturient id augue.",
        "Commodo lobortis etiam feugiat massa vel volutpat. Volutpat tortor turpis nibh enim imperdiet nibh. Aliquam nascetur urna vitae tincidunt id vel velit nisi. Eleifend cursus turpis cras in sed. Proin sit viverra nunc non vitae.",
      ]}
    />
  );
};
const ProjectsContent = () => {
  return (
    <div className="flex flex-col">
      {[
        {
          title: "Skyline Towers (Luxury Condos)",
          description:
            "Led sales & investment strategy for a 50-story residential tower in downtown Manhattan.",
        },
        {
          title: "Greenwood Business Hub",
          description:
            "Assisted in leasing and investment consultancy for a 500,000 sq. ft. commercial space.",
        },
        {
          title: "Riverside Villas",
          description:
            "Successfully managed end-to-end sales for a gated community with premium villas.",
        },
        {
          title: "Brooklyn Retail Complex",
          description:
            "Provided real estate solutions for retail brands looking to establish flagship stores.",
        },
        {
          title: "Coastal Homes Project",
          description:
            "Helped vacation home investors identify high-yield rental properties.",
        },
      ].map((project, index) => (
        <div key={index} className="flex items-start gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-neutralDark"></div>
          </div>
          <Text variant={"body"}>
            <b>{project.title}</b> – {project.description}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default MemberDetailsOffcanvas;
