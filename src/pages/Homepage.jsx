import StudySpace from "../components/StudySpace";
import ImageAndBeliefs from "../components/ImageAndBeliefs";

const Homepage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-8 pb-0 pl-[95px] pr-0 box-border gap-[137px] leading-[normal] tracking-[normal] mq750:gap-[68px] mq750:pl-[47px] mq750:box-border mq450:gap-[34px] mq450:pl-5 mq450:box-border">
      <header className="self-stretch flex flex-row items-start justify-between pt-0 pb-[71px] pl-0 pr-px box-border max-w-full gap-5 text-left text-[32px] text-darkolivegreen font-newsreader">
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <h1 className="m-0 relative text-inherit tracking-[-0.01em] leading-[100%] font-medium font-[inherit] whitespace-nowrap">
            Vee’s Timer
          </h1>
        </div>
        <div className="w-[694px] flex flex-row items-start justify-start gap-[47px] max-w-full text-center text-base text-black font-inter mq750:gap-[23px] mq1050:w-[87px]">
          <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
            <div className="relative leading-[21px] inline-block min-w-[40px]">
              Shop
            </div>
          </div>
          <div className="flex-1 flex flex-row items-end justify-start gap-6 max-w-full mq1050:hidden">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[13.5px]">
              <div className="relative leading-[21px] inline-block min-w-[77px]">
                Newstand
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 pb-3 pl-0 pr-[7px]">
              <div className="relative leading-[21px] inline-block min-w-[91px] whitespace-nowrap">
                Who we are
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 pb-3 pl-0 pr-[7px]">
              <div className="relative leading-[21px] inline-block min-w-[77px] whitespace-nowrap">
                My profile
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-darkolivegreen overflow-hidden flex flex-row items-start justify-start py-[13.5px] pl-9 pr-[35px] text-white">
              <div className="relative leading-[21px] font-semibold inline-block min-w-[55px]">
                Signup
              </div>
            </div>
            <div className="flex-[0.7818] rounded-lg bg-darkolivegreen overflow-hidden flex flex-row items-start justify-start py-[13.5px] pl-[42px] pr-[41px] text-white">
              <div className="relative leading-[21px] font-semibold inline-block min-w-[43px]">
                Login
              </div>
            </div>
          </div>
        </div>
      </header>
      <StudySpace />
      <div className="w-[74px] h-11 relative overflow-hidden shrink-0 hidden" />
      <ImageAndBeliefs />
      <section className="w-[1034px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-left text-sm text-black font-inter">
        <div className="h-[503px] flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[476px] box-border gap-[29px] max-w-full mq750:pb-[201px] mq750:box-border mq1050:pb-[309px] mq1050:box-border">
          <div className="w-[181px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[0.04em] leading-[160%] uppercase font-semibold">
              WHAT WE BELIEVE
            </div>
          </div>
          <div className="flex-1 relative text-xl leading-[160%] inline-block max-w-[calc(100%_-_210px)] mq450:text-base mq450:leading-[26px]">
            <p className="m-0">
              We believe in produce. Tasty produce. Produce like:
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">What are we forgetting?</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”).
              Persian cucumbers, in addition to aforementioned “normal”
              cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some
              cultures call pumpkins). Sweet potatoes and potato-potatoes.
              Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor
              (this website). Sorrel. Pineapple. Mango. Gooseberries.
              Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn.
              Endive. Escarole, which, we swear, we’re vendors of organic
              produce, but if you asked us to describe what escaroles are...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
