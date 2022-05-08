import { connection } from '../database/connection.js'
import { astro } from '../model/astro.js'

export let message = "";

export const getIndex = async (req, res) => {
    setTimeout(() => {
        message = "";
      }, 1000);
    try {
        const tabelaAstro = await astro.findAll()
        console.log(tabelaAstro)
        res.render('index.ejs', {
            tabelaAstro, message //alerta de mensagem
        })
    } catch(error) {
        res.send(error.message)
    }
}

export const getDetails = async (req, res) => {
    try {
        const astroDetails = await astro.findByPk(req.params.id)
        res.render("details.ejs", {astroDetails, message}); // message = alerta de mensagem
    } 
    catch(error) {
        res.send(error.message) 
    }
};

export const getDel = async(req, res) => {
    // res.send('DELET')
    try {
        // await connection.query(`DELETE FROM astro WHERE = ${req.params.id}`) 
        await astro.destroy({where: {id:req.params.id}})
        message = 'Deleted'
        res.redirect('/')
    } 
    catch(error) {
        res.send(error.message)
    }
};

export const getEdit = async(req, res) => {
    
    try {
        const astroAtt =  await astro.findByPk(req.params.id)
        res.render('edit.ejs', {
            astroAtt, message //alerta de mensagem
        })
    } 
    catch(error) {
        res.send(error.message)
    }
};

export const postEdit = async (req, res) => {
    try {
        const {name, nickname, image, description, distance, category, constellation} = req.body
        await astro.update({
            name: name,
            nickname: nickname,
            image: image,
            description: description,
            distance: distance,
            category: category,
            constellation: constellation
        }, {
            where: {
                id: req.params.id
            }
        })
        message = 'Saved'
        res.redirect('/')
    } 
    catch(error) {
        res.send(error.message)
    }
};

export const getRegister = (req, res) => {
    res.render('register.ejs', {message}); //alerta de mensagem
};

export const postRegister = async (req, res) => {
    const { name, nickname, image, description, distance, category, constellation } = req.body
    try{
        if(!name || !nickname || !image || !description || !distance || !category || !constellation){
            res.send('You must fill common name, image and category before you send')
        } else {
        await astro.create({name, nickname, image, description, distance, category, constellation})
        message = 'Register successfully'
        res.redirect('/');
        }
    }
    catch(error) {
        res.send(error.message)
    }  
};



