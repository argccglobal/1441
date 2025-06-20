import { Text } from "@/components/ui/Text";
import { useServicePageStore } from "@/store/servicePage";

export const HaveQuestions = () => {
  const { pageData } = useServicePageStore();

  return (
    <div className="bg-[#3C434A] mb-28">
      <div className="container py-12">
        <div className="flex items-center gap-5 justify-between">
          <div className="flex flex-col gap-5 max-w-[600px]">
            <Text variant={"section_title_normal"} className="text-white">
              {pageData?.cta.title}
            </Text>
            <Text variant={"body"} className="text-white">
              {pageData?.cta.description}
            </Text>
          </div>
          <button className="px-[30px] bg-white py-3 rounded-[2px] hover:bg-neutral hover:text-white">
            {pageData?.cta.button_text}
          </button>
        </div>
      </div>
    </div>
  );
};
