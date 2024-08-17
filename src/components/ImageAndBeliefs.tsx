import { FunctionComponent } from "react";

export type ImageAndBeliefsType = {
  className?: string;
};

const ImageAndBeliefs: FunctionComponent<ImageAndBeliefsType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 pb-[19px] pl-px pr-0 box-border max-w-full text-left text-sm text-black font-inter ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-center gap-[60px] max-w-full mq750:gap-[30px] mq1125:flex-wrap">
        <img
          className="w-[496px] relative max-h-full object-cover max-w-full mq1125:flex-1"
          loading="lazy"
          alt=""
          src="/jonathankemper1hhrdiolfpuunsplash-1@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[63px] box-border min-w-[499px] min-h-[603px] max-w-full mq750:pb-[41px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4 max-w-full">
            <img
              className="self-stretch h-[480px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/stocksy-txp226f62b2ane300-medium-4582193-1@2x.png"
            />
            <div className="w-[744px] relative tracking-[-0.01em] leading-[160%] inline-block max-w-full box-border pr-5">
              <span className="font-medium">Central California</span>
              <span className="font-light">
                {" "}
                — The person who grew these was located in Central California
                and, er, hopefully very well-compensated.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageAndBeliefs;
