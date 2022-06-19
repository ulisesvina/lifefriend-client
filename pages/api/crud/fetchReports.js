import prisma from '../../../lib/prismaclient';

const handler = async (req, res) => {
    const reports = await prisma.report.findMany()
    res.json({
        reports,
        success: true,
        code: 200
    })
}

export default handler;