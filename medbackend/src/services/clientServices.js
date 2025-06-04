import { query } from "../db.js";

export const getClients = async ()=> {
    const {rows} = await query('SELECT * FROM clients_tb');
    return rows;
}

export const createClient = async (clientData)=> {
    const {name,email,password,role,is_active} = clientData;
    const {rows} = await query(
        `INSERT INTO clients_tb (name,email,password,role,is_active)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [name, email, password, role, is_active]
     );
    return rows[0];
}

export const updateClient = async (clientData, clientId)=> {
    const {name,email,password,role,is_active} = clientData;
    const {rows} = await query(
        `UPDATE clients_tb SET name =$1, email =$2, password =$3, role =$4, is_active =$5
        WHERE id =$6 RETURNING *`,
        [name, email, password, role, is_active, clientId]
     );
    return rows[0];
};