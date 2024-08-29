import heroImage from '../assets/hero1.png';
const Hero = () => {
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <img
            className='lg:w-4/6 md:w-4/6 w-8/6 mb-10 object-cover object-center rounded'
            alt='hero'
            src={heroImage} // New local image
          />
          <div className='text-center lg:w-2/3 w-full'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              16<sup>th</sup> INTERNATIONAL CONFERENCE ON INTELLIGENT HUMAN COMPUTER INTERACTION
            </h1>
            <p className='mb-8 leading-relaxed'>
              <b>Welcome to IHCI 2024</b>
              | November 13th - 16th
              <p> 
                Hosted by the University of Twente and the BMS Lab
                Embark on a transformative journey at IHCI 2024, where the brightest minds in research, education,
                and emerging technology converge. Join us for an exceptional four-day event dedicated to 
                exploring and advancing the field of Human-Computer Interaction. 
              </p>
              <b>Conference Theme:</b>
              Meaningful Human-Computer Interaction
            </p>
            <div className='flex justify-center'>
              <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
                Join Us
              </button>
              <button className='ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'>
                Paper Submission
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
