import { Request, Response } from 'express';
import { Op } from 'sequelize'

import { Product } from '../models/Product';

import { sequelize } from '../instances/mysql';
import { User } from '../models/User';

export const home = async (req: Request, res: Response)=>{

    const user = User.build({
        name:'mascoste',
        age:45
    })
    await user.save()


  /*let users = await User.findAll({
  



    /*where: {
        name:{
            [Op.like]:'%a'
        }

        
    }
  })*/



  

  

    

    res.render('pages/home', {
      
    });
};