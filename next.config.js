/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/download/:slug*',
        destination: '/downloads',
        permanent: true,
      },
      {
        source: '/batches',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/about-civil-services-examination',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/civil-services/kapu-corporation',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/civil-services-public-administration-optional',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/analog-courses/index.php',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/courses/civil-services/political-science-optional-',
        destination: '/courses',
        permanent: true
      },
      {
        source: '/gallery-images',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/faculty',
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
        source: '/correspondence-course-civil-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/downloads/the-hindu-bengaluru-edition',
        destination: '/downloads',
        permanent: true
      },
      {
        source: '/downloads/astra-material',
        destination: '/downloads',
        permanent: false
      },
      {
        source: '/events/free-workshop-for-upsc-aspirants',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/free-workshop-for-upsc-civils-aspirants-2020',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/abhyasa-screening-test-for-the-cse2019',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/free-workshop-for-upsc-aspirants-2020-vizag',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/free-workshop-for-upsc-aspirants-2020-indira-park',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/events/how-to-crack-civils-in-first-attempt-seminar-at-vizag',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/work-shop-madhapur/index.php',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/quick-links',
        destination: '/',
        permanent: true,
      },
      {
        source: '/test-categories/upsc-civil-services',
        destination: '/test-categories',
        permanent: false,
      },
      {
        source: '/news-updates',
        destination: '/',
        permanent: true,
      },
      {
        source: '/analog-ias-test-series/index.html',
        destination: '/test-series',
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
      {
        source: '/articles/ias-coaching-centres-in-delhi',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/articles/ias-coaching-in-hyderabad',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/videos/https-www-youtube-com-watch-v-xc-vzmzofsw-t-130s',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/videos/https-www-youtube-com-watch-v-dynbexu0qwo',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/videos/https-www-youtube-com-watch-v-nqv6dp9czzy-t-1356s',
        destination: '/videos',
        permanent: true,
      },
      {
        source: '/blog/category/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/page/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/author/:slug*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/wp-includes/ID3/slot-kakek-petir',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/wp-admin/js/mahjong-ways',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/mock-interview2021/index2.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/al-major/uploads/1198364037uploads_download_1421657725B06',
        destination: '/',
        permanent: true,
      },
      {
        source: '/civil-results/2010',
        destination: '/civil-results',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
