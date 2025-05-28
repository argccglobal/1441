import { cn } from "@/utils/classNames";
import { useMemberDetailsOffcanvas } from "@/store/memberDetailsOffcanvas";
import { Icon } from "../ui/Icon";
import { Text, textVariants } from "../ui/Text";
import OffcanvasMemberImg from "@/public/member_offcanvas.png";
import Image from "next/image";
import ContentSection from "../common/ContentSection";
const MemberDetailsOffcanvas = () => {
  const { isOpenCanvas, activeTab, closeCanvas, selectedMember, setActiveTab } =
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
      {selectedMember && (
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
                  src={selectedMember.profileImage}
                  // fill
                  width={300}
                  height={300}
                  alt="Member"
                  className="w-full object-cover h-full"
                />
              </div>
              <div className="flex flex-col gap-8">
                <Text variant={"section_title_normal"}>
                  {selectedMember.name}
                </Text>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-2">
                    <Icon name="call" className="text-[16px]" />
                    <a href={`tel:${selectedMember.phone}`}>
                      {" "}
                      <Text variant={"small"}>{selectedMember.phone}</Text>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="email" className="text-[16px]" />
                    <a href={`mailto:${selectedMember.email}`}>
                      {" "}
                      <Text variant={"small"}>{selectedMember.email}</Text>
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="location_on" className="text-[16px]" />
                    <Text variant={"small"}>{selectedMember.location}</Text>
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
            {activeTab === "biography" && selectedMember?.biography && (
              <BiographyContent />
            )}
            {activeTab === "projects" && <ProjectsContent />}
          </div>
        </div>
      )}
    </div>
  );
};

const BiographyContent = () => {
  const { selectedMember } = useMemberDetailsOffcanvas();
  return (
    <ContentSection
      color="text-neutralDark"
      texts={[selectedMember?.biography.map((text) => text)]}
    />
  );
};
const ProjectsContent = () => {
  const { selectedMember } = useMemberDetailsOffcanvas();

  return (
    <div className="flex flex-col">
      {selectedMember?.projects.map((project, index) => (
        <div key={index} className="flex items-start gap-1">
          <div className="h-6 w-6 flex items-center justify-center">
            <div className="h-1.5 w-1.5 rounded-full bg-neutralDark"></div>
          </div>
          <Text variant={"body"}>
            <b>{project.name}</b> – {project.description}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default MemberDetailsOffcanvas;
