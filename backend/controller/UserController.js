const UserModel = require('../models/Users');

const getInfos = async (req, res) => {
      try {
    const userId = req.query.id; // Récupère l’ID depuis la query string

    if (!userId) {
      return res.status(400).json({ message: 'ID manquant dans la requête' });
    }

    const user = await UserModel.findById(userId); // Recherche par ID

        if (!user) {
          return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

          res.json(user);
        } catch (err) {
          res.status(500).json({ message: err.message });
  }
};

const createInfos = async (req, res) => {
    try{
        const infos = new UserModel(req.body);
        await infos.save();
        res.status(201).json(infos);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
    
}

const updateInfo = async (req, res) => {
  const { id, ville, pays, number, bio } = req.body;
  console.log(" from frontend", id, ville, pays, number, bio);
  
  

//   if (!userId) {
//     return res.status(400).json({ error: 'ID requis' });
//   }
  try {
    const updateUser = await UserModel.findByIdAndUpdate(
      id,
      { $set: {infos: 
        {ville, pays, number, bio} 
      } },
      { new: true }
    );

    if (!updateUser) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json({status : "success", user : updateUser});
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
}

module.exports = {
    getInfos,
    updateInfo,
    createInfos
}

