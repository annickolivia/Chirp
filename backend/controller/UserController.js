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

const updateAvatar = async(res, req) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.user.id,
      { avatar: `/uploads/avatars/${req.file.filename}` },
      { new: true }
    );
    res.json({ success: true, avatar: user.avatar });
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la mise à jour de l'avatar" });
  }
}

module.exports = {
    getInfos,
    updateInfo,
    updateAvatar,
}

