import { FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import profileImage from "../../assets/myprofile.jpg";
import { FaSquareXTwitter } from "react-icons/fa6";

const Banner = () => {
  return (
    <div>
      <div className="flex  flex-col-reverse gap-3 md:flex-row justify-evenly items-center">
        {/* text div */}
        <div>
          <h1 className="text-white font-bold">
            I'M <span className="text-[#F0C268] text-2xl">Abu Bakr Siddik</span>
          </h1>
          <p className="text-4xl text-[#F0C268] font-bold mb-4">
            Fontend Developer
          </p>
          {/* ///link div */}
          <div className="text-white text-4xl flex justify-start items-center gap-3">
            <a href="https://github.com/abubakrsiddikl" target="_blank">
              <FaGithubSquare />
            </a>
            <a
              href="https://www.linkedin.com/in/pentestersiddik371/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://x.com/Abu15443Bakr" target="_blank">
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.facebook.com/limon.hosen.77582"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
          </div>
          <button className="btn bg-[#F0C268] my-4">Download CV</button>
        </div>
        {/* image div */}
        <div>
          <img src={profileImage} className="avatar w-52 rounded-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
