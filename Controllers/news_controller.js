const news = require("../Models/news");
const addNews = async (req, res) => {
  try {
    const data = await news.create(req.body);
    return res.status(201).send();
  } catch (e) {
    return res.status(500).send(e);
  }
};

const updateNews = async (req, res) => {
  try {
    const data = await news.updateOne({ _id: req.query.id }, req.body);
    if (data.matchedCount === 0) {
      return res.status(404).send("No news announced by this id");
    }
    return res.status(200).json({
      message: "successfully updated",
      success: true,
    });
  } catch (e) {
    return res.status(500).send(e);
  }
};

const getNews = async (req, res) => {
  try {
    const data = await news.find();
    if (data.length === 0)
      return res.status(404).json({ success: false, message: "No news found" });
    return res.status(200).json({
      success: true,
      data: data,
    });
  } catch (e) {
            return res.status(500).send(e)
  }
};

const deleteNews = async (req, res) => { 
          try {
                    const data = await news.deleteOne({ _id: req.query.id })
                    if (data.deletedCount === 0) return res.status(404).send('No news announced by this id')
                    return res.status(200).json({
                              message: 'successfully deleted news',
                              success:true
                    })
          }
          catch (e) {
                    return res.status(500).send(e)
          }
          
}