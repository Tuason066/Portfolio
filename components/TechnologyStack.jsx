'use client';

import { Icon } from '@iconify/react';

const TechnologyStack = () => {
  return (
    <section id='stack' className='bg-lightest text-center py-14 lg:py-20'>
      <h2 className='uppercase text-darkest h2 mb-8 lg:mb-16'>
        Technology Stack
      </h2>
      <div className='text-4xl lg:text-6xl text-darkest grid grid-cols-[repeat(auto-fit,minmax(min-content,75px))] gap-4 justify-center center max-w-2xl lg:max-w-4xl lg:gap-12 rounded-lg'>
        <div>
          <Icon icon='devicon:nextjs' className='inline' />
          <p className='capitalize text-base mt-1'>nextjs</p>
        </div>
        <div>
          <Icon icon='logos:typescript-icon' className='inline' />
          <p className='capitalize text-base mt-1'>typescript</p>
        </div>
        <div>
          <Icon icon='logos:react' className='inline' />
          <p className='capitalize text-base mt-1'>react</p>
        </div>
        <div>
          <Icon icon='devicon:tailwindcss' className='inline' />
          <p className='capitalize text-base mt-1'>tailwindcss</p>
        </div>
        <div>
          <Icon icon='logos:bootstrap' className='inline' />
          <p className='capitalize text-base mt-1'>bootstrap</p>
        </div>
        <div>
          <Icon icon='logos:javascript' className='inline' />
          <p className='capitalize text-base mt-1'>javascript</p>
        </div>
        <div>
          <Icon icon='devicon:css3' className='inline' />
          <p className='text-base mt-1'>CSS</p>
        </div>
        <div>
          <Icon icon='vscode-icons:file-type-html' className='inline' />
          <p className='text-base mt-1'>HTML</p>
        </div>

        <div>
          <Icon icon='bxl:spring-boot' color='#6db33f' className='inline' />
          <p className='capitalize text-base mt-1'>spring boot</p>
        </div>
        <div>
          <Icon icon='devicon:java' color='#6db33f' className='inline' />
          <p className='capitalize text-base mt-1'>java</p>
        </div>
        <div>
          <Icon icon='logos:mysql' color='#6db33f' className='inline' />
          <p className='text-base mt-1'>MySQL</p>
        </div>
        <div>
          <Icon icon='logos:sass' color='#6db33f' className='inline' />
          <p className='capitalize text-base mt-1'>sass</p>
        </div>
        <div>
          <Icon icon='devicon:git' color='#6db33f' className='inline' />
          <p className='capitalize text-base mt-1'>git</p>
        </div>
        <div>
          <Icon icon='logos:npm-icon' color='#6db33f' className='inline' />
          <p className='text-base mt-1'>NPM</p>
        </div>
        <div>
          <Icon icon='logos:figma' color='#6db33f' className='inline' />
          <p className='capitalize text-base mt-1'>figma</p>
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;
