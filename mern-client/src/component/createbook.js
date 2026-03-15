import axios from "axios";
import React from "react";
const CreateBook = () => {
    const formfieldset={
        width:'300px',
        margin:'auto',
        padding:'20px',
        border:'1px solid #f2eeee',
        borderRadius:'5px',
        backgroundColor:'#d2cdd5'
    }
    const[bookname,setBookname]=React.useState({
        bookname:'',
        author:'',
        price:'',
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setBookname({...bookname,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        try{
            const response=axios.post("http://localhost:5000/api/books",bookname);
            console.log("Book created successfully:", response.data);
            setBookname({
                bookname:'',
                author:'',
                price:'',
            });
        }catch(error){
            console.error("Error creating book:", error);
        }
    }
    return (
        <div>
            <fieldset style={formfieldset}>
                <legend>Create Book</legend>
                <tr>
               <td>book name</td>
               <td>
                  <input type="text" name="bookname" value={bookname.bookname} onChange={handleChange}/> 

               </td>
            </tr>
            <tr>
               <td>author</td>
               <td>
                  <input type="text" name="author" value={bookname.author} onChange={handleChange}/> 
               </td>
            </tr>
            <tr>
               <td>price</td>
               <td>
                  <input type="text" name="price" value={bookname.price} onChange={handleChange}/> 
               </td>
            </tr>
            <tr>
                <td colSpan={2} align="center">
                    <input type="submit" value={"Create"} name="createbook" onClick={handleSubmit}/>
                </td>
            </tr>
        </fieldset>
    </div>
    );
};

export default CreateBook;