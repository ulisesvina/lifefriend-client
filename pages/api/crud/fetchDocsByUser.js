import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const docs = await prisma.document.findMany({
        where: {
            user: {
                id: req.body.email
            }
        }
    });
    res.json({
        docs,
        success: true,
        code: 200
    });
}

export default handler;