import story from "../../assets/story.png";
import PrimaryButton from "../../components/PrimaryButton";
export default function OurStory() {
  return (
    <div className="">
      <div className="max-w-screen-2xl mx-auto md:flex items-center py-10 text-center md:text-left md:py-40">
        <div>
          <h4
            className="lg:text-5xl text-7xl text-secondary2 font-bold"
            style={{ fontFamily: "Pinyon Script" }}
          >
            Our Story
          </h4>
          <h1 className="lg:text-7xl text-3xl text-primary font-semibold my-5">
            Traditional & Modern Service Since 1970
          </h1>
          <p className="lg:text-xl my-5 text-justify px-4 md:px-0">
            Ut neque turpis dolor sit amet consectetur adipiscing elit purus
            egestas diam sit vitae egestas suspendisse amet ultricies eu. Eget
            at porttitor morbi blandit ac vitae, dolor. Gravida eu vel ac
            luctus. Hac a vel est malesuada tellus sed nunc, etiam maecenas.
          </p>
          <PrimaryButton
            text={"More About Us"}
            style={"w-1/2 md:w-1/4 mx-auto md:mx-0"}
          />
        </div>
        <img
          className="md:w-1/2 mt-5 md:mt-0 mx-auto"
          src={story}
          alt="Story"
        />
      </div>
    </div>
  );
}
