import { FunctionComponent } from "react";

export type StudySpaceType = {
  className?: string;
};

const StudySpace: FunctionComponent<StudySpaceType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1230px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-45xl text-black font-newsreader ${className}`}
    >
      <div className="w-[1004px] flex flex-col items-start justify-start gap-12 max-w-full mq750:gap-6">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[120%] font-normal font-[inherit] mq450:text-19xl mq450:leading-[46px] mq1050:text-32xl mq1050:leading-[61px]">
          <p className="m-0">Build your study space, set your timer</p>
          <p className="m-0">learn in community</p>
        </h1>
        <div className="self-stretch flex flex-row items-start justify-center py-0 pl-5 pr-[23px] text-left text-xl text-white font-inter">
          <div className="w-[261px] rounded-lg bg-darkolivegreen overflow-hidden shrink-0 flex flex-row items-start justify-end py-6 px-[37px] box-border whitespace-nowrap">
            <div className="relative leading-[130%] font-semibold">
              Start your journey
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudySpace;
