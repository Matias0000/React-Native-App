import {connect} from '../middlewares/database'

export const getTask= async (req,res)=>{
    const connection = await connect()
    const [rows]= await connection.query('SELECT * FROM tasks')
    // console.log(rows);
    res.send(rows)
}

export const getTaskId= async(req,res)=>{
    const {id}=req.params
    const connection = await connect()
    const [rows]= await connection.query("SELECT * FROM tasks WHERE id = ?",[id])
    // console.log(rows);
    res.send(rows[0])
}
export const getTaskCount=async(req,res)=>{
    const connection = await connect()
    const [rows]= await connection.query("SELECT  COUNT(*) FROM tasks")
    res.json(rows[0]["COUNT(*)"])
}

export const postTask=async(req,res)=>{
    const connection =await connect()
    const [result]  = await connection.query("INSERT INTO tasks (title,description) VALUES (?,?)",
    [req.body.title,req.body.description])
    // console.log(result);
    res.json({
        id:result.insertId,
        ...req.body});
}

export const deleteTask=async(req,res)=>{
    const {id}=req.params
    const connection = await connect()
    await connection.query("DELETE FROM tasks WHERE id = ?",[id])
    // console.log();
    res.sendStatus(204);
}

export const putTask=async(req,res)=>{
    
    const {id}=req.params
    const connection = await connect()
    const result = await connection.query("UPDATE tasks SET ? WHERE id=?",
    [req.body,
    id])

    // console.log(result);

    res.sendStatus(204)
}

