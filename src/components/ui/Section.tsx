import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'green' | 'yellow' | 'dark' | 'dark-light';
}

const Section = ({ children, className = '', background = 'white' }: SectionProps) => {
  const bgColors = {
    'white': 'bg-white',
    'green': 'bg-rvs-green',
    'yellow': 'bg-rvs-yellow',
    'dark': 'bg-rvs-green-dark',
    'dark-light': 'bg-rvs-green-dark-light'
  };
  
  return (
    <section className={`px-4 md:px-8 lg:px-16 xl:px-[238px] py-12 md:py-16 lg:py-24 ${bgColors[background]} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
