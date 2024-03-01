const { Block } = require('../models');

const blockController = {
  
  getAllBlocks: async (req, res) => {
    try {
      const blocks = await Block.findAll({
        include: 'choices',
        order: [
          ['id', 'ASC'],
          ['alphanum', 'ASC']
        ]
      });
      res.status(200).json(blocks);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  getOneBlock: async (req, res) => {
    const blockId = req.params.id;
    try {
      const block = await Block.findByPk(blockId, {
        include: 'choices'
      });
      res.status(200).json(block);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  createBlock: async (req, res) => {
    const {
      story_id,
      alphanum,
      type,
      label_text,
      choice_question,
      background_img_path,
      boy_character_img_path,
      girl_character_img_path,
      rest_img_path
    } = req.body;
    
    if (story_id === undefined) return res.status(400).json({ message: 'Il doit y avoir une histoire associée au bloc.'});
    if (alphanum === undefined || alphanum === "") return res.status(400).json({ message: 'Le nom alphanumérique ne doit pas être une chaîne vide'});
    if (type === undefined || type === "") return res.status(400).json({ message: 'Le type de bloc ne doit pas être une chaîne vide'});
    if (background_img_path === undefined || background_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image décor ne doit pas être une chaîne vide'});
    if (boy_character_img_path === undefined || boy_character_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image garçon ne doit pas être une chaîne vide'});
    if (girl_character_img_path === undefined || girl_character_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image fille ne doit pas être une chaîne vide'});
    
    try {
      const newBlock = Block.build({
        story_id,
        alphanum,
        type,
        background_img_path,
        boy_character_img_path,
        girl_character_img_path
      }); 
      
      if (label_text) newBlock.label_text = label_text;
      if (choice_question) newBlock.choice_question = choice_question; 
      if (boy_character_img_path) newBlock.boy_character_img_path = boy_character_img_path; 
      if (girl_character_img_path) newBlock.girl_character_img_path = girl_character_img_path; 
      if (rest_img_path) newBlock.rest_img_path = rest_img_path; 
      
      await newBlock.save();
      res.status(200).json(newBlock);

    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },

  modifyBlock: async (req, res) => {
    const blockId = req.params.id;
    const {
      story_id,
      alphanum,
      type,
      label_text,
      choice_question,
      background_img_path,
      boy_character_img_path,
      girl_character_img_path,
      rest_img_path
    } = req.body;
    
    if (alphanum === "") return res.status(400).json({ message: 'Le nom alphanumérique ne doit pas être une chaîne vide'});
    if (type === "") return res.status(400).json({ message: 'Le type de bloc ne doit pas être une chaîne vide'});
    if (background_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image décor ne doit pas être une chaîne vide'});
    if (boy_character_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image garçon ne doit pas être une chaîne vide'});
    if (girl_character_img_path === "") return res.status(400).json({ message: 'Le chemin vers l\'image fille ne doit pas être une chaîne vide'});
    
    try {
      const block =  await Block.findByPk(blockId); 
      
      if (alphanum) block.alphanum = alphanum;
      if (type) block.type = type;
      if (story_id) block.story_id = story_id;
      if (label_text) block.label_text = label_text;
      if (choice_question) block.choice_question = choice_question; 
      if (boy_character_img_path) block.boy_character_img_path = boy_character_img_path; 
      if (girl_character_img_path) block.girl_character_img_path = girl_character_img_path; 
      if (rest_img_path) block.rest_img_path = rest_img_path;

      await block.save();
      res.status(200).json(block);
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
  
  deleteBlock: async (req, res) => {
    const blockId = req.params.id;
    try {
      const block = await Block.findByPk(blockId)
      if (!block) return res.status(404).json({ message: `Le block avec l'id : ${blockId} n'a pas été trouvé.`}) 
      await block.destroy();
      res.status(200).json("Block bien supprimé");
    } catch (error) {
      res.status(500).json({ message: "Erreur interne du serveur" });
    }
  },
};

module.exports = blockController;
