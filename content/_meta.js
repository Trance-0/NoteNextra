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
    Math4201_link: {
      title: 'Math 4201',
      type: 'page',
      href: '/Math4201',
    },
    Math4111_link: {
      title: 'Math 4111',
      type: 'page',
      href: '/Math4111',
    },
    CSE559A_link: {
      title: 'CSE 559A',
      type: 'page',
      href: '/CSE559A',
    },
    /* Math Courses End */
    Math4201: {
      title: 'Math 4201',
      type: 'page',
      theme:{
        // sidebar: false,
        timestamp: true,
      }
    },
    /* CSE Courses Start */
    CSE559A: {
      title: 'CSE 559A',
      type: 'page',
      theme:{
        // sidebar: false,
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