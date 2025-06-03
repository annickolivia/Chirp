const UserModel = require('../models/Users');

const getInfos = async (req, res) => {
  const { id } = req.query;

  try {
    const user = await UserModel.findById(id).select('infos');

    if (!user) {
      return res.status(404).json({ error: 'Utilisateur non trouvé' });
    }

    res.status(200).json({ status: 'success', infos: user.infos });
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des infos' });
    console.log(err)
  }
};


const updateInfo = async (req, res) => {
  const { id, ville, pays, number, bio } = req.body;
  console.log(" from frontend", id, ville, pays, number, bio);

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

const updateAvatar = async(req, res) => {
    try {
    const { id } = req.body; // ou req.params si tu utilises une route dynamique
    
    const updatedData = {};
    if (req.file) {
      updatedData.avatar = `/uploads/${req.file.filename}`;
    }

    const user = await UserModel.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      message: 'Utilisateur mis à jour',
      user
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
}

const getAvatar = async(req, res) => {
   try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ message: 'ID manquant dans la requête.' });
    }

    const user = await UserModel.findById(id);

    if (!user || !user.avatar) {
      return res.status(404).json({ message: 'Utilisateur ou avatar non trouvé.' });
    }

    res.status(200).json({ avatar: user.avatar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
}

module.exports = {
    getInfos,
    updateInfo,
    updateAvatar,
    getAvatar,
}

