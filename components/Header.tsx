import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div className="flex flex-row items-center">
        <SocialIcon 
          url="https://www.github.com/seancfong/" 
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon 
          url="https://www.github.com/seancfong/" 
          fgColor="gray" 
          bgColor="transparent"
        />
        <SocialIcon 
          url="https://www.github.com/seancfong/" 
          fgColor="gray" 
          bgColor="transparent"
        />
      </div>

      <div>
        <SocialIcon 
          className="cursor-pointer"
          network="email"
          fgColor="gray" 
          bgColor="transparent"
        />
        <p className="uppercase">Get in touch</p>
      </div>
    </header>
    
  );
}

export default Header