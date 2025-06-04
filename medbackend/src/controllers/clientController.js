import * as clientService from "../services/clientServices.js";


export const getClients = async (req, res) => {
    try {
        const clients = await clientService.getClients();
        res.status(200).json(clients);
    } catch (err) {
        console.error('Error fetching clients:', err);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const client = await clientService.createClient(clientData);
        res.status(200).json(client);
    } catch (err) {
        console.error(' Error fetching clients:', err); // <- FULL error printed
        res.status(500).json({ message: "Internal Server Error"});
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientID = req.params.id;
        const clientData = req.body;
        const client = await clientService.updateClient(clientID, clientData);
        if (!client) {
            return res.status(404).json({ message: "Client not found" });
        }
        res.status(200).json(updateClient);
    
    
    } catch (err) {
        console.error(' Error fetching clients:', err); // <- FULL error printed
        res.status(500).json({ message: "Internal Server Error",
            error: err.message,
            stack: err.stack,
        });
    }
};
