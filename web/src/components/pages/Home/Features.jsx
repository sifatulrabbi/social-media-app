import React from 'react';
import {
  featureOne,
  featureOneBg,
  featureTwo,
  featureTwoBg,
  featureThree,
  featureThreeBg,
  featureFour,
  featureFourBg,
} from '../../../images';
import FeatureCard from '../../FeatureCard';
import {v4} from 'uuid';

const features = [
  {
    img: featureOne,
    bg: featureOneBg,
    title: 'Expand your Network',
    desc: 'Your network is your networth!This old saying still holds true today and especially in the healthcare industry. Connect with colleagues, view and engage with their posts.',
  },
  {
    img: featureTwo,
    bg: featureTwoBg,
    title: 'Expand your Network',
    desc: 'Your network is your networth!This old saying still holds true today and especially in the healthcare industry. Connect with colleagues, view and engage with their posts.',
  },
  {
    img: featureThree,
    bg: featureThreeBg,
    title: 'Expand your Network',
    desc: 'Your network is your networth!This old saying still holds true today and especially in the healthcare industry. Connect with colleagues, view and engage with their posts.',
  },
  {
    img: featureFour,
    bg: featureFourBg,
    title: 'Expand your Network',
    desc: 'Your network is your networth!This old saying still holds true today and especially in the healthcare industry. Connect with colleagues, view and engage with their posts.',
  },
];

const Features = () => {
  return (
    <section className="flex flex-col items-center">
      <h2
        className={`text-3xl font-bold text-textPrimary font-display mb-[3vh]
        lg:text-4xl`}
      >
        Features
      </h2>
      <h6 className="mb-[10vh]">
        Functionalities implemented in this prototype
      </h6>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-[100px]">
        {features.map((feature) => (
          <FeatureCard {...feature} key={v4()} />
        ))}
      </div>
    </section>
  );
};

export default Features;
