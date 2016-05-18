(function(){ 'use strict';
  angular.module('resume')
    .controller('resumeController',['$scope', resumeController]);
    function resumeController($scope){
      // function Skill(name, proficency, level){
      //   this.name = name;
      //   this.proficency = proficency;
      //   this.level = level;
      //   this.description = '';
      // }

      $scope.librariesAndFrameworks = [
        {name: 'jQuery'},
        {name: 'ExpressJS'},
        {name: 'AngularJS'},
        {name: 'BackboneJS'},
        {name: 'Bootstrap'},
        {name: 'Purecss'},
        {name: 'Sass'},
        {name: 'RequireJS'}
      ];

      $scope.tools = [
        {name: 'GIT'},
        {name: 'SVN'},
        {name: 'REST'},
        {name: 'Gulp'},
        {name: 'NodeJS'},
        {name: 'Browser Sync'},
      ];

      $scope.programmingLanguages = [
        {name: 'JavaScript', proficency:95, level:'Expert'},
        {name: 'HTML', proficency:90, level:'Advanced'},
        {name: 'CSS', proficency:88, level:'Advanced'},
        {name: 'Python', proficency:25, level:'Beginner'},
        {name: 'SQL', proficency:18, level:'Beginner'},
      ];

      $scope.employmentHistory = [
        {
          company: 'Blue Trail Software',
          from: new Date('2015-03-01').toDateString(),
          to: new Date('2016-01-30').toDateString(),
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'I worked as a consultant for Metrodigi in the new version of their CHAUCER ® cloud-based authoring platform, after that I Joined the team developping BUMP a social network tool designed for companies distributed in large geographic areas, finally I moved shortly to Dentek website to help in the process to secure the site in order to get certified to process payments thru their website. During this time I was also part of the company effort on continous lerning, I imparted a course on NodeJS to the interns. ',
          description: '',
          keyWords: [
            'NodeJS',
            'AngularJS',
            'ExpressJS',
            'MongoDB',
            'JavaScript',
            'CSS',
            'HTML',
            'GIT',
            'REST',
            'Gulp',
            'Sass',
            'Bootstrap',
            'jQuery'
          ]
        },
        {
          company: 'Entrepreneur',
          from: Date('2013-07-01'),
          to: Date('2015-03-01'),
          jobTitle: 'Manager',
          abstract: 'After resigning of my position in Softtek I came back to Mexico to start my own business non IT related, but still actively developing apps like a twitter bot https://twitter.com/knowit1st, A3.js http://jorgeriv.github.io/A3/, an angular.js app for sports forecasting, statistics and data analysis among other projects. ',
          description: '',
          keyWords: [
            'NodeJS',
            'AngularJS',
            'ExpressJS',
            'MongoDB',
            'JavaScript',
            'CSS',
            'HTML',
            'GIT',
            'REST',
            'Gulp',
          ]
        },
        {
          company: 'Entrepreneur',
          from: Date('2013-07-01'),
          to: Date('2015-03-01'),
          jobTitle: 'Manager',
          abstract: 'After resigning of my position in Softtek I came back to Mexico to start my own business non IT related, but still actively developing apps like a twitter bot https://twitter.com/knowit1st, A3.js http://jorgeriv.github.io/A3/, an angular.js app for sports forecasting, statistics and data analysis among other projects. ',
          description: '',
          keyWords: [
            'NodeJS',
            'AngularJS',
            'ExpressJS',
            'MongoDB',
            'JavaScript',
            'CSS',
            'HTML',
            'GIT',
            'REST',
            'Gulp',
          ]
        },
        {
          company: 'Softtek Integration Systems Inc.',
          from: Date('2012-09-01'),
          to: Date('2013-08-01'),
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'Consultant for GE corporate onsite (US), in this position I was responsible to attend meetings with the clients, participate in the decision taking process and pass down the information to the team in Mexico as well as coding the application. ',
          description: '',
          keyWords: [
            'NodeJS',
            'RequireJS',
            'ExpressJS',
            'MongoDB',
            'JavaScript',
            'CSS',
            'HTML',
            'SVN',
            'REST',
            'jQuery'
          ]
        },
        {
          company: 'Softtek Servicios Corporativos S.A. de C.V.',
          from: Date('2011-04-01'),
          to: Date('2012-09-01'),
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'Consultant for GE corporate, I was part of the development team in charge of ‘site builder’ and ‘page editor’ web apps. This position required heavy use of JavaScript and jQuery as well as HTML and CSS. Later I was chosen as part of the team to develop the new GE corporate website ‘colab’ an internal social network for GE’s employees. ',
          description: '',
          keyWords: [
            'JavaScript',
            'CSS',
            'HTML',
            'SVN',
            'REST',
            'jQuery'
          ]
        },
        {
          company: 'Palmera Systems',
          from: Date('2010-10-01'),
          to: Date('2011-04-01'),
          jobTitle: 'FullStack Web Developper',
          abstract: 'Web developer for Palmera System a start­up company that offered web based solutions for local and international customers. My main activities consisted in translate client’s requirements to fully functional websites and CMS templates, set up web servers, convert mockups to html+css webpages and write php scripts to connect to databases as well as it’s front end counterparts to render the data via AJAX.',
          description: '',
          keyWords: [
            'JavaScript',
            'CSS',
            'HTML',
            'REST',
            'jQuery',
            'PHP',
            'MySQL',
            'Joomla'
          ]
        },
        {
          company: 'Freelancer',
          from: Date('2008-08-01'),
          to: Date('2010-10-01'),
          jobTitle: 'FullStack Web Developper',
          abstract: 'After obtaining my engineering degree I worked mostly self­employed building websites for local business where I was a full stack developer in charge of both backend and frontend and in some cases content management. During this time I also co­authored a blog about technology news and gadgets and later I built a website about tourism and social life in Manzanillo, Colima, Mexico. Through this activities I had the opportunity to gain experience in technologies such as PHP, MySQL, HTML, JavaScript, jQuery, CSS2 and CMS as well as understand clients requirements and elaborate time and cost estimations of projects.',
          description: '',
          keyWords: [
            'JavaScript',
            'CSS',
            'HTML',
            'REST',
            'jQuery',
            'PHP',
            'MySQL',
            'Joomla'
          ]
        },
      ];
    }
}());
