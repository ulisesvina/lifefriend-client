import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const { title, content, image, location, email } = req.body;
    try {
        await prisma.report.create({
            data: {
                title,
                content,
                /* image: image, */ // <- To-do
                /* location: location, */
                userId: email
            }
        })
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    res.json({
       success: true,
       code: 200
    });
}

export default handler;