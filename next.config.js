/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/downloads/:slug*',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/download/:slug*',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/about-civil-services-examination',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/gallery-images',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/videos',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/test-categories',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/faculty',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/testimonial',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/civil-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/appsc',
        destination: '/',
        permanent: false,
      },
      {
        source: '/tspsc',
        destination: '/',
        permanent: false,
      },
      {
        source: '/kpsc-kas',
        destination: '/',
        permanent: true,
      },
      {
        source: '/correspondence-course',
        destination: '/',
        permanent: true,
      },
      {
        source: '/batches',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/free-workshop-for-upsc-aspirants',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/free-workshop-for-upsc-civils-aspirants-2020',
        destination: '/',
        permanent: true,
      },
      {
        source: '/events/abhyasa-screening-test-for-the-cse2019',
        destination: '/',
        permanent: true,
      },{
        source: '/events/free-workshop-for-upsc-aspirants-2020-vizag',
        destination: '/',
        permanent: true,
      },
      {
        source: '/quick-links',
        destination: '/',
        permanent: true,
      },
      {
        source: '/test-categories/upsc-civil-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/disclaimer',
        destination: '/',
        permanent: true,
      },
      {
        source: '/news-updates',
        destination: '/',
        permanent: true,
      },
      {
        source: '/analog-ias-test-series/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/page/2/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/page/8',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/page/14/',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/articles/is-coaching-a-must-to-crack-the-ias-exam-',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/ntr-vidyonnati-web-options',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/analog-ias-academy-is-going-online-in-response-to-covid-19-pandemic-outbreak',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/ias-Coaching-in-Delhi',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/ias-in-first-attempt-with-without-coaching',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/tspsc-notifcation-2019-tspsc-jobs-eligibility-criteria',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/upsc-syllabus-for-prelims-and-mains-2019',
        destination: '/articles',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
