function translateSite() {
    document.getElementById('aboutBtn').textContent = 'About';
    document.getElementById('musicBtn').textContent = 'Music';
    document.getElementById('hobbyBtn').textContent = 'Passions';
    document.getElementById('contactBtn').textContent = 'Contact';
    document.querySelector('.jumbotron__slogan--text').textContent = 'Life is only one';
    document.querySelector('.about__me--body p').innerHTML = 'Music and IT. Is it possible to connect?<br>For over 30 years I play the violin. I have completed all degrees in music education. Elementary and secondary schools, studies, then doctorate and habilitation degrees. The computer has always been close to me. I have tried many technologies, pretty well mastered Photoshop, created advanced Excel worksheets, even folded and published my own book using Adobe InDesign.<br>Now I decided that I would like to professionally deal with creating websites and web applications. I\'ve always had plenty of ideas on how should it look, act, have funcionalities. I just lacked the knowledge of how to do this with code. For some time I have been very diligent learning HTML, CSS styles and above all JavaScript. And I\'m more and more fascinated by their possibilities, which seem to have no limits.<br>Apart from work I\'m a woodworking lover, sometimes I\'m organizing urban games. I like to travel, and recently I was fascinated with off-road.';
    document.querySelector('.about__front--body p').innerHTML = 'I\'m starting my career as a Front-End developer. As many of beginers I have good, in my opinion, knowledge of HTML and CSS. I use HTML5 and CSS3 for my projects. Currently I\'m most fascinated by the capabilities of JavaScript. I am delighted with the new ES6 solutions that make it easier for me to implement my ideas.<br>In order to streamline my work, I use the Gulp toolkit and CSS preprocessors. My favorite is SASS and in fact I use it most often. I\'m also using CSS and JS libraries e.g. Twitter Bootstrap, jQuery, AngularJS.<br>I am constantly learning and discovering new opportunities to solve my problems every day. I would like to use my existing skills and join to projects in a professional development team. Such kind of work would allow me to use the experience and knowledge of my colleagues to further develop in this field. I think my artistic experience can help in an completely unexpected way, to solve the problems and issues we will be working on.<br>Because I\'m a musician, I\'d like to work on creating websites and applications for learning this art. I see huge deficiencies in the educational applications market for learning music.';
    document.querySelector('.about__front--works').textContent = "My choosen works:";
    document.querySelector('.about__front--list').innerHTML = '<li><a href="http://www.atiart.pl" target="_blank"><i class="fa fa-arrow-right"></i> Muzyczni Odkrywcy - home site</a></li><li><a href="http://www.muzyczniodkrywcy.pl/nuty" target="_blank"><i class="fa fa-arrow-right"></i> Poznaj Nuty - education game for children</a></li><li><a href="http://www.muzyczniodkrywcy.pl/clock" target="_blank"><i class="fa fa-arrow-right"></i> JavaScript clock</a></li>';
    document.querySelector('.about__front--git').innerHTML = 'My projects on GitHub: <a href="https://github.com/ladom"><i class="fa fa-github"></i> github.com/ladom</a>';
    document.querySelector('.about__music--header h2').textContent = "Classical music";
    document.querySelector('.about__music--body p').innerHTML = 'I\'m a professional violinist. For nearly twenty years I have performed on many stages in Poland and abroad. For many years I worked also as a teacher at the Academy of Music in Wrocław. I have recorded a dozen CDs and DVDs, played hundreds of concerts as a soloist, chamber and orchestra musician.<br>Playing is like riding a bike - it is not forgotten. That is why I\'ll always be a musician and I\'ll always enjoy playing the violin.';
    document.querySelector('.about__hobby--header h2').textContent = "Passions";
    document.querySelector('.about__hobby--body p').innerHTML = 'How long I remember, I loved wood. When I was a child, I was spending hours hulling bark boats or sticking wooden constructions. Over time, I began to approach this more practically. Amateur, but with great success I manage to create small wooden trinkets, as well as large structures such as stairs in my home, terraces or terrace roof from wood. It invariably gives me a lot of fun and allows me to relax and rest.<br>Since I remember I also liked traveling. As a child I visited various parts of the world with my parents. Later, due to the music profession, I was able to visit a large number of amazing places. Often very exotic and rarely visited by tourists. For the few years, I\'m fascinated by driving off-road car. Off-road allows me to visit places that were once inaccessible and give me an incredible sense of independence and complete separation from daily affairs.<br>Besides this and many other hobbies I\'m fortunate that I love both the violin and the programming, so the work is also a source of satisfaction and joy for me.';
    document.querySelector('.footer__contact').textContent = "Contact:";

}