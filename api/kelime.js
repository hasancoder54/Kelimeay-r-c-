

export default function handler(req, res) { const query = req.query; const paramKey = Object.keys(query).find(k => k.includes("="));

let words = []; let keyword = "";

if (paramKey) { const [beforeEqual, keywordValue] = paramKey.split("="); keyword = keywordValue;

// Decode URI components and split by non-word characters (spaces, +, symbols)
const allWords = decodeURIComponent(beforeEqual).split(/[^\p{L}\p{N}]+/u);

// Remove empty strings and filter out keyword if already in
words = allWords.filter(w => w && w !== keyword);

}

res.status(200).json({ keyword: keyword, words: words }); }


