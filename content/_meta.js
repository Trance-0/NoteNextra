export default {
  /**
   * Do not remove the labels "Math Courses Start"
   * and "Math Courses End" and "CSE Courses Start" and "CSE Courses End"
   * or the separated builds will not work.
   * 
   * WE USE THESE LABELS TO BUILD THE SEPARATED WEBSITES FOR MATH AND CSE COURSES.
   */
    menu: {
      title: 'Home',
      type: 'menu',
      items: {
        index: {
          title: 'Home',
          href: '/'
        },
        about: {
          title: 'About',
          href: '/about'
        },
        contact: {
          title: 'Contact Me',
          href: '/contact'
        }
      },
    },
    /* Load link with relative path */
    Math3200_link: {
      title: 'Math 3200',
      href: '/Math3200'
    },
    Math429_link: {
      title: 'Math 429',
      href: '/Math429'
    },
    Math4111_link: {
      title: 'Math 4111',
      href: '/Math4111'
    },
    Math4121_link: {
      title: 'Math 4121',
      href: '/Math4121'
    },
    Math4201_link: {
      title: 'Math 4201',
      href: '/Math4201'
    },
    Math416_link: {
      title: 'Math 416',
      href: '/Math416'
    },
    Math401_link: {
      title: 'Math 401',
      href: '/Math401'
    },
    CSE332S_link: {
      title: 'CSE 332S',
      href: '/CSE332S'
    },
    CSE347_link: {
      title: 'CSE 347',
      href: '/CSE347'
    },
    CSE442T_link: {
      title: 'CSE 442T',
      href: '/CSE442T'
    },
    CSE5313_link: {
      title: 'CSE 5313',
      href: '/CSE5313'
    },
    CSE510_link: {
      title: 'CSE 510',
      href: '/CSE510'
    },
    CSE559A_link: {
      title: 'CSE 559A',
      href: '/CSE559A'
    },
    CSE5519_link: {
      title: 'CSE 5519',
      href: '/CSE5519'
    },
    /* Math Courses Start */
    Math3200: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math429:{
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math4111: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math4121: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math4201: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math416: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    Math401: {
      display: 'hidden',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    /* Math Courses End */
    /* CSE Courses Start */
    CSE332S: {
      display: 'hidden',
      title: 'CSE332S',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE347: {
      display: 'hidden',
      title: 'CSE347',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE442T: {
      display: 'hidden',
      title: 'CSE442T',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE5313: {
      display: 'hidden',
      title: 'CSE5313',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE510: {
      display: 'hidden',
      title: 'CSE510',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE559A: {
      display: 'hidden',
      title: 'CSE559A',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    CSE5519: {
      display: 'hidden',
      title: 'CSE5519',
      type: 'page',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    /* CSE Courses End */
    Swap: {
      display: 'hidden',
      theme:{
        timestamp: true,
      }
    },
    index: {
      display: 'hidden',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    about: {
      display: 'hidden',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    },
    contact: {
      display: 'hidden',
      theme:{
        sidebar: false,
        timestamp: true,
      }
    }
  }