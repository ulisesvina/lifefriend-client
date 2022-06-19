import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const { email } = req.body; // The error originated from here
    const user = await prisma.user.findMany({
        where: {
            id: email,
        }
    });

    if(user.length === 0) {
        try {
            await prisma.user.create({
                data: {
                    id: email,
                }
            })
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    }
    res.json({
       success: true,
       code: 200
    });
}

export default handler;