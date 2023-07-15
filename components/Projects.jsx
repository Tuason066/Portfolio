'use client';

import { projects } from '@helper/constants';
import Image from 'next/image';

import Masonry from '@mui/lab/Masonry';

const Projects = () => {
  return (
    <section id='projects' className='bg-darkest py-14 lg:py-20'>
      <div className='center max-w-7xl'>
        {/* TITLE */}
        <h2 className='h2 uppercase mb-8 lg:mb-16'>
          <span className="relative text-lightest after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightAccent">
            my
          </span>{' '}
          <span className="text-lightAccent relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-lightest">
            works
          </span>
        </h2>

        {/* CARDS */}
        <Masonry
          columns={{ xs: 1, md: 2, lg: 3 }}
          spacing={2}
          className='max-w-[716px] xl:max-w-6xl mx-auto'
        >
          {projects.map(
            ({
              title,
              live_url,
              source_url,
              image: { url, width, height },
              technologies,
            }) => (
              <div key={title}>
                <figure className='bg-lightest rounded shadow max-w-[350px] mx-auto'>
                  {/* IMAGE */}
                  <div className='h-full max-h-96 overflow-hidden rounded-t shadow mx-auto'>
                    <Image
                      src={url}
                      alt={title}
                      width={width}
                      height={height}
                    />
                  </div>
                  {/* CONTENT */}
                  <div className='text-center p-4 grid gap-y-4'>
                    <a
                      href={live_url}
                      title={'Project Title'}
                      target='_blank'
                      className='text-darkest text-lg font-semibold line-clamp-2'
                    >
                      <figcaption>{title}</figcaption>
                    </a>
                    <div className='flex gap-x-4 justify-center'>
                      <a
                        href={live_url}
                        title='Preview'
                        target='_blank'
                        className='border border-darkest rounded px-[1em] py-[.5em] capitalize'
                      >
                        live demo
                      </a>
                      <a
                        href={source_url}
                        title='View Code'
                        target='_blank'
                        className='bg-darkest border border-darkest text-lightest  rounded px-[1em] py-[.5em] capitalize'
                      >
                        source code
                      </a>
                    </div>
                    <div className='text-left'>
                      {technologies.map((item, index) => (
                        <span key={index}>#{item} </span>
                      ))}
                    </div>
                  </div>
                </figure>
              </div>
            )
          )}
        </Masonry>
      </div>
    </section>
  );
};

export default Projects;
