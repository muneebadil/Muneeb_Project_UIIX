import Image from 'next/image';

const Featurespost = () => {
  const featureData = [
    {
      imgSrc: '/unsplash_hHdHCfAifHU.png',
      subtitle: 'SUBTITLE',
      title: 'Chichen Itza',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      imgSrc: '/unsplash_tVEqStC2uz8.png',
      subtitle: 'SUBTITLE',
      title: 'Colosseum Roma',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
    {
      imgSrc: '/unsplash_dEGu-oCuB1Y.png',
      subtitle: 'SUBTITLE',
      title: 'Great Pyramid of Giza',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
    },
  ];

  return (
    <div>
      {/* Custom section before the features list */}
      <section className="flex flex-col items-center gap-10 px-5 py-24">
        {/* Subtitle */}
        <h6 className="text-center text-[#23A6F0] font-semibold text-sm leading-[24px] tracking-[0.2px]">
          #section-tag
        </h6>

        {/* Title */}
        <h3 className="text-center text-[#252B42] font-bold text-4xl leading-[50px] tracking-[0.2px]">
          BESTSELLER PRODUCTS
        </h3>

        {/* Description */}
        <p className="text-center text-[#737373] font-normal text-sm leading-[20px] tracking-[0.2px]">
          Problems trying to resolve the conflict between
        </p>
      </section>

      {/* Feature List */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 gap-10 justify-center">
            {featureData.map((feature, index) => (
              <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white shadow-md p-6 rounded-lg">
                  {/* Image */}
                  <div className="relative mb-6">
                    <Image
                      className="h-40 rounded w-full object-cover object-center"
                      src={feature.imgSrc}
                      alt={feature.title}
                      width={720}
                      height={400}
                    />
                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-[#E74040] text-white text-xs font-semibold py-1 px-3 rounded">
                      {feature.subtitle}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl text-[#252B42] font-medium mb-4">{feature.title}</h2>

                  {/* Description */}
                  <p className="text-base text-[#737373]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featurespost;
