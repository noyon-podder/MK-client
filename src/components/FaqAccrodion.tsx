import {
  Accordion as UiAccordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FaqAccrodion = () => {
  return (
    <div>
      <UiAccordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Do you ship overseas?</AccordionTrigger>
          <AccordionContent>
            Yes, we ship all over the world. Shipping costs will apply, and will
            be added at checkout. We run discounts and promotions all year, so
            stay tuned for exclusive deals.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How long will it take to get my orders?
          </AccordionTrigger>
          <AccordionContent>
            It depends on where you are. Orders processed here will take 5-7
            business days to arrive. Overseas deliveries can take anywhere from
            7-16 days. Delivery details will be provided in your confirmation
            email.
            <br />
            In stock orders typically ship within 24 hours, but please allow up
            to 72 business hours for dispatch from our warehouse. Shipping times
            may increase during holiday periods and busy weeks due to Group Buy
            fulfillments. If any delays are anticipated, we will inform you
            accordingly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Can I return my products?</AccordionTrigger>
          <AccordionContent>
            We always aim for make sure our customers love our products, but if
            you do need to return an order, we’re happy to help. Just email us
            directly and we’ll take you through the process. You can send a
            direct email via our contact page.
          </AccordionContent>
        </AccordionItem>
      </UiAccordion>
    </div>
  );
};

export default FaqAccrodion;
