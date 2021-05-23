import Snippet from "../models/snippets.js";

export const getSnippets = async (req,res) => {
    try {
        const snippets = await Snippet.find();
        res.status(200).json(snippets)
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};