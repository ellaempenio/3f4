const m ={
    main:(req, res) =>{
        res.render('index');
    },
    about: (req, res) => {
        res.render('about');  
    },
    contact: (req, res) => {
        res.render('contact');  
    },
    location: (req, res) => {
        res.render('location');  
    },
    services: (req, res) => {
        res.render('services');  
    }
};
module.exports = m;