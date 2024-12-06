import book from  "../models/book_model.js";
//create new book
export const createbook = async(req,res)=>{
    try{
        const bookData=book(req.body);
        if(!bookData){
            return res.status(404).json({msg:"book not found"});
        }
        await bookData.save();
        res.status(200).json({msg:"book found successfully"});

    }
    catch(err){
        res.status(500).json({error : err.message});

    }
    
}

export const  getAllBook = async(req,res)=>{
        try{ 
            const bookData = await book.find();
            if(!bookData){
                return res.status(404).json({ msg : "Book not found "});
            }
            res.status(200).json(bookData);
        }
        catch(err){
            res.status(500).json({ error :err.message });
        }
    }

export const getOneBook= async(req,res) => {
        try{ 
            const id =req.params.id;
            const bookData = await book.findById(id);
            if(!bookData){
                return res.status(404).json({ msg : "Book not found "});
            }
            res.status(200).json(bookData);
        }
        catch(err){
            res.status(500).json({ error :err.message });
        }
}


export const updatebook = async(req,res) => {
    try{ 
        const id =req.params.id;
        const bookExist = await book.findById(id);
        if(!bookExist){
            return res.status(404).json({ msg : "Book not found "});
        }
        await book.findByIdAndUpdate(id,req.body,{new:true})
        res.status(500).json({ msg :"Book updated successfully"});
    }
    catch(err){
        res.status(500).json({ error :err.message });
    }

}
export const deletebook = async(req,res) => {
    try{ 
        const id =req.params.id;
        const bookExist = await book.findById(id);
        if(!bookExist){
            return res.status(404).json({ msg : "Book not found "});
        }
        await book.findByIdAndDelete(id,req.body,{new:true})
        res.status(500).json({ msg :"Book deleted successfully"});
    }
    catch(err){
        res.status(500).json({ error :err.message });
    }

}
    