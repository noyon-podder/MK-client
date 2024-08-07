import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { MdDescription } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { TProduct } from "../../types/common";
import CustomerReviews from "./CustomerReviews";

type TProductDescriptionAccordionProps = {
  product: TProduct;
};
export const ProductDescriptionAccordion = ({
  product,
}: TProductDescriptionAccordionProps) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-2"
      collapsible
      className="w-full  "
    >
      <AccordionItem
        value="item-1"
        className="border  border-borderColor rounded-md mb-5"
      >
        <AccordionTrigger className="px-3 bg-[#bd00001a] py-[9px] px-5] rounded-tl-md rounded-tr-md font-medium text-base text-[#0f172a]">
          <div className="flex items-center text-start gap-2">
            <MdDescription size={24} className="text-noyonColor" /> Product
            Description
          </div>
        </AccordionTrigger>
        <AccordionContent className="py-5 px-3">
          <p
            className="my-3 text-base text-gray-700 leading-[21px]"
            dangerouslySetInnerHTML={{ __html: product?.description }}
          ></p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="border  border-borderColor rounded-md mb-5"
      >
        <AccordionTrigger className="px-3 bg-[#bd00001a] py-[9px] px-5] rounded-tl-md rounded-tr-md font-medium text-base text-[#0f172a]">
          <div className="flex items-center text-start gap-2">
            <IoIosStarOutline size={24} className="text-noyonColor" /> Reviews
          </div>
        </AccordionTrigger>
        <AccordionContent className="py-5 px-3">
          <CustomerReviews />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
