import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const user = await prisma.user.findMany({
        where: {
            id: req.body.email
        }
    });
    res.json({
        date: Date.parse(user[0].lastDocUpdate),
        success: true,
        code: 200
    })
}

export default handler;