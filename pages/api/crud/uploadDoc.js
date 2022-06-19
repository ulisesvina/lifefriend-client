import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const { email, file, type } = req.body;
    try {
        await prisma.document.create({
            data: {
                user: {
                    connect: {
                        id: email,  
                    },
                }, 
                type,
                file
            }
        });
    
        res.json({
            success: true,
            code: 200
        });    
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
}

export default handler;