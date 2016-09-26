(function(){ 'use strict';
  angular.module('resume')
    .controller('resumeController',['$scope', '$http',resumeController]);
    function resumeController($scope, $http){
      // function Skill(name, proficency, level){
      //   this.name = name;
      //   this.proficency = proficency;
      //   this.level = level;
      //   this.description = '';
      // }

      $http.get('app/common/data/resume.json')
        .then(response =>{
          $scope.resume = response.data;
        }).catch((err)=>{
          console.log(err);
        });

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
          from: new Date('2015-03-03').toDateString(),
          to: new Date('2016-01-30').toDateString(),
          place: 'Jalisco, Mexico',
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'I did consulting work for Metrodigi in the new version of their CHAUCER ® cloud-based authoring platform, then I joined the team developing BUMP a B2B social network tool designed to improve communication in companies distributed in large geographic areas, finally I moved shortly to work on Dentek™ website helping to get the site certified to process bank payments through their website. I also participated on the company effort on continuous training for the more junior staff.',
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
          from: new Date('2013-07-01').toDateString(),
          to: new Date('2015-03-01').toDateString(),
          place: 'Colima, Mexico',
          jobTitle: 'Manager',
          abstract: 'I started a small business on the fast food industry (pizza place). While not IT related, I kept actively developing during this period, I developed the company’s website, and other personal projects as a twitter bot (@knowIt1st), A3.js a library of angular directives for charts using D3.js among others, but most important I acquired experience managing a team.',
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
          from: new Date('2012-09-01').toDateString(),
          to: new Date('2013-08-01').toDateString(),
          place: 'Shelton, CT',
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'As a consultant for GE corporate (Working onsite in the client’s office in Shelton, CT), I worked on one of the GE’s key products at the time, Collab the GE’s internal social network tool. I was responsible to attend meetings with the GE’s Digital Media Technologies team, participate in the decision taking process and pass down the information to the Softtek team in Mexico as well as coding the application.',
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
          from: new Date('2011-04-01').toDateString(),
          to: new Date('2012-09-01').toDateString(),
          place: 'Aguascalientes, Mexico',
          jobTitle: 'Senior Front-end Engineer',
          abstract: 'I was part of the development team in charge of ‘site builder’ and ‘page editor’ web applications. This position required heavy use of JavaScript and jQuery as well as HTML and CSS. Later I was chosen as part of the team of engineers to develop Colab and shortly after I was relocated to GE’s office, working for the Softtek filial company in the US (See Softtek Integration Systems Inc. description above).',
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
          from: new Date('2010-10-01').toDateString(),
          to: new Date('2011-04-01').toDateString(),
          place: 'Colima, Mexico',
          jobTitle: 'FullStack Web Developper',
          abstract: 'Web developer for Palmera System a start­up company that offered web based solutions for local and international customers. My main activities consisted in translate client’s requirements to fully functional websites and CMS templates, set up web servers, convert mockups to html+css web pages and write php scripts to connect to databases as well as its frontend counterparts to render data via AJAX.',
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
          from: new Date('2008-08-01').toDateString(),
          to: new Date('2010-10-01').toDateString(),
          place: 'Colima, Mexico',
          jobTitle: 'FullStack Web Developper',
          abstract: 'Worked mostly self employed, building websites for local business where I was in charge of both backend and frontend and in some cases content management. During this time I also co­authored a blog about technology news and gadgets. Later I built a website about tourism and social life in Manzanillo, Colima, Mexico. Through this activities I gained experience in technologies such as PHP, MySQL, HTML, JavaScript, jQuery, CSS2 and CMS as well as understanding clients requirements to elaborate time and cost estimations of projects.',
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
