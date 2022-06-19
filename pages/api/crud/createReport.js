import prisma from "../../../lib/prismaclient";

const handler = async (req, res) => {
  const { title, content, image, location, email } = req.body;
  try {
    await prisma.report.create({
      data: {
        title,
        content,
        image,
        location,
        user: {
          connect: {
            id: email,
          },
        },
      },
    });
    res.json({
      success: true,
      code: 200,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export default handler;
