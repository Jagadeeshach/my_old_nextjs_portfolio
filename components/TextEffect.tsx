import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Frontend Developer',
        500, // wait 1s before replacing "Mice" with "Hamsters"
        'Backend Developer',
        1500,
        'Full Stack Developer',
        1500,
        'Content Creator',
        1500,
        'Influencer At LinkedIn',
        1500
        
      ]}
      speed={50}
      className="text-[35px] md:text-{3rem} text-[#55e6af] font-bold uppercase"
      repeat={Infinity}
    />
  );
};

export default TextEffect;